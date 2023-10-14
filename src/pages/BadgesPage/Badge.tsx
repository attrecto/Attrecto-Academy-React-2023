import React from "react";
import classNames from "classnames";
import classes from "./Badge.module.scss";

const Badge = ({ badge, className }) => {
  const { id, image, name, description } = badge;

  return (
    <div className={classNames("col-lg-4 col-md-6 col-sm-12", className)}>
      <div className={classNames("d-flex box-shadow align-items-center", classes.Badge)}>
        <div className={classes.BadgeImage} style={{ backgroundImage: `url(${image})` }} />
        <div className="d-flex flex-column">
          <h5 className="ms-3">{name}</h5>
          <p className="ms-3 text-black-50">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
