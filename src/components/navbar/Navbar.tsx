import { FC } from "react";
import classNames from "classnames";

import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";
import "./Navbar.scss"

const Navbar: FC = () => {
  const routes = [
    { label: "Home", link: "/home" },
    { label: "Users", link: "/users" },
    { label: "Badges", link: "/badges" },
  ];

  return (
    <nav className={classNames("navbar p-2", [classes.Navbar])}>
     <div className="d-flex align-items-center justify-content-between flex-grow-1 flex-wrap">
        <div className="d-flex">
          {routes.map(({ link, label }) => (
            <NavLink key={link} to={link} className="nav-link me-4">
              {label}
            </NavLink>
          ))}
        </div>
        Welcome to Attrecto Academy
      </div>
    </nav>
  );
};

export default Navbar;
