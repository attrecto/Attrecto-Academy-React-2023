import classNames from "classnames";
import { BadgeModel } from "../../models/badges.model";
import classes from "../badge-card/BadgeCard.module.scss";
import AccessController from "../access-controller/AccessController";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { hasPermission } from "../../util/hasPermission";

interface BadgeCardProps {
  className?: string;
  badge:BadgeModel;
  handleDeleteBadge: (badgeId:string)=>void;
}

const BadgeCard = ({ className, badge, handleDeleteBadge }: BadgeCardProps) => {
    const allowedUserChangeFor: Role[] = ["ADMIN"];

    const showLink = hasPermission(allowedUserChangeFor);
const badgeCardContent=(
    <div className={className}>
        <div
                className={classNames(
                    "d-flex box-shadow align-items-center justify-content-evenly",
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
                <div className="">
                    <AccessController allowedFor={allowedUserChangeFor}>
                <Button
                    className={classes.DeleteIcon}
                    onClick={(e) => {
                    e.preventDefault();
                    handleDeleteBadge(badge.id.toString());
                    }}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
                </AccessController>
                </div>
                
        </div>
    </div>
 
  )

  return showLink?(
    <Link to={`/badge/${badge.id}`} className={classNames(classes.Badge)}>
      {badgeCardContent}
    </Link>
  ):(
    <div className={classNames(classes.Badge, classes.NotLink)}>
      {badgeCardContent}
    </div>
  )

};

export default BadgeCard;