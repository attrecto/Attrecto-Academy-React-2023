import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./Pages/HomePage/HomePage";
import UsersPage from "./Pages/UsersPage/UsersPage";
import BadgesPage from "./Pages/BadgesPage/BadgesPage";
import NotFoundPage from "./Pages/NotFound/NotFoundPage";

function App()
{
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />}></Route>
        <Route path="/home" element={<HomePage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/badges" element={<BadgesPage />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
