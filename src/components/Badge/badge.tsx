import React from 'react';
import { BadgeModel } from '../../models/badges.model';
import classes from "../../pages/BadgesPage/Badges.module.scss";
import classNames from "classnames";


interface BadgeProps
{
    badge: BadgeModel;
    className?: string;
}


const Badge =({badge, className}:BadgeProps) => 
{
  return (
        <div key={badge.id} className={className}>
            <div className={classNames("d-flex box-shadow align-items-center", classes.Badge)}>
                <div className={classes.BadgeImage} style={{backgroundImage: `url(${badge.image})`}}>

                </div>
                <div className="d-flex flex-column">
                    <h5 className="ms-3">
                        {badge.name}
                    </h5>
                    <p className="ms-3 text-black-50">
                        {badge.description}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Badge