import React from "react";
import { BadgeModel } from "../../models/badges.model";
import classes from "../../pages/BadgesPage/Badges.module.scss";
import classNames from "classnames";

interface BadgeProps {
  badgeModel: BadgeModel;
  className?: string;
}

const Badge = ({ badgeModel, className }: BadgeProps) => {
  return (
    <div key={badgeModel.id} className={className}>
      <div
        className={classNames(
          "d-flex box-shadow align-items-center",
          classes.Badge,
        )}
      >
        <div
          className={classes.BadgeImage}
          style={{ backgroundImage: `url(${badgeModel.image})` }}
        ></div>
        <div className="d-flex flex-column">
          <h5 className="ms-3">{badgeModel.name}</h5>
          <p className="ms-3 text-black-50">{badgeModel.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Badge;
