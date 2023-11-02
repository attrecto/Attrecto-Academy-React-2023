import React, { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import BadgesPage from "./Pages/BadgesPage/BadgesPage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";
import UserPage from "./Pages/UserPage/UserPage";
import UserTablePage from "./Pages/UserTablePage/UserTablePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import BadgePage from "./Pages/BadgePage/BadgePage";
import { getDataFromTokenModel } from "./util/token";
import { AUTH_TOKEN } from "./util/constans";

function App() 
{
  const [role, setRole] = useState<Role | null>(getDataFromTokenModel("role") as Role);

  const [token, setToken] = useState<string | null>(localStorage.getItem(AUTH_TOKEN));

  const login = (token: string) => 
  {
    localStorage.setItem(AUTH_TOKEN, token);
    setToken(token);
    setRole(getDataFromTokenModel("role") as Role);
  }

  const logout = () => 
  {
    localStorage.removeItem(AUTH_TOKEN);
    setToken(null);
    setRole(null);
  }

  const userRouteElement = role === "ADMIN" ? <UserPage /> : <Navigate to="/home" />
  const badgeRouteElement = role === "ADMIN" ? <BadgePage /> : <Navigate to="/home" />

  return (
    <div className="App">
      <header className="App-header">
        <Navbar isLoggedIn={!!token} logout={logout}/>
      </header>
      <Routes>
        {token?(
          <>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/user" element={userRouteElement} />
          <Route path="/usersTableView" element={<UserTablePage />} />
          <Route path="/user/:id" element={userRouteElement} />
          <Route path="/badges" element={<BadgesPage />} />
          <Route path="/badge" element={badgeRouteElement} />
          <Route path="/badge/:id" element={badgeRouteElement} />
          <Route path="/login" element={<Navigate to="/home" replace />} />
          <Route path="*" element={<NotFoundPage />} />
          </>
        ):
        (
          <>
          <Route path="/login" element={<LoginPage login={login} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          </>
        )}

      </Routes>
    </div>
  );
}

export default App;
