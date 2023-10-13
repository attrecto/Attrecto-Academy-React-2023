import classNames from "classnames";
import { BadgeModel } from "../../models/badges.model";
import classes from "../../pages/BadgesPage/Badges.module.scss";

interface BadgeProps {
  className?: string;
  badge:BadgeModel;
}

const Badge = ({ className, badge }: BadgeProps) => {
  return (
    <div className={className}>
        <div
              className={classNames(
                "d-flex box-shadow align-items-center",
                classes.Badge
              )}
            >
              <div
                className={classes.BadgeImage}
                style={{ backgroundImage: `url(${badge.image})` }}
              />
              <div className="d-flex flex-column">
                <h5 className="ms-3">{badge.name}</h5>
                <p className="ms-3 text-black-50">{badge.description}</p>
              </div>
            </div>
  </div>
  );
};

export default Badge;