import React from 'react';
import { BadgeModel } from '../../models/badges.model';
import classes from "../../pages/BadgesPage/Badges.module.scss";
import classNames from "classnames";
import { hasPermission } from "../../util/hasPermission";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import AccessController from "../access-controller/AccessController";


interface BadgeProps
{
    badge: BadgeModel;
    className?: string;
    handleDeleteBadge: (userId: string) => void;
}


const Badge =({badge, className, handleDeleteBadge}:BadgeProps) => 
{
    const allowedUserChangeFor: Role[] = ["ADMIN"];
    const showLink = hasPermission(allowedUserChangeFor);
    const BadgeContent = (
            <div className={classNames("d-flex box-shadow align-items-center", classes.Badge)}>
                <div className={classes.BadgesImage} style={{backgroundImage: `url(${badge.image})`}}>

                </div>
                <div className="d-flex flex-column">
                    <h5 className="ms-3">
                        {badge.name}
                    </h5>
                    <p className="ms-3 text-black-50">
                        {badge.description}
                    </p>
                </div>
                <div  className="d-flex flex-column">
                    <AccessController allowedFor={allowedUserChangeFor}>
                        <Button className={classes.DeleteIcon} onClick={(e) => {e.preventDefault(); handleDeleteBadge(badge.id.toString())}}>
                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                        </Button>
                    </AccessController>
                </div>
            </div>
    );
    return showLink? (
            <Link to={`/badge/${badge.id}`} className={classNames('card', classes.BadgeCard)} >
                {BadgeContent}
            </Link>
    ) : 
    (
        <div className={classNames(classes.NotLink)}>
            {BadgeContent}
        </div>
    );
}

export default Badge