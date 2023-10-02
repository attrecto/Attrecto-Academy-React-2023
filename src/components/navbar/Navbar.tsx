import { FC } from "react";
import classNames from "classnames";

import classes from "./Navbar.module.scss";
import { NavLink } from "react-router-dom";

const Navbar: FC = () => {
  const routes = [
    { label: "Home", link: "/home" },
    { label: "Users", link: "/users" },
    { label: "Badges", link: "/badges" },
  ];

  return (
    <nav className={classNames("navbar", [classes.Navbar])}>
      <div className="ps-3 d-flex flex-grow-1">
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
