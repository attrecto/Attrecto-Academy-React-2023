import React, { useEffect, useState } from "react";
import { BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";
import Page from "../../components/Page/Page";
import Badge from "../../components/Badge/badge";


const BadgesPage = () => 
{
    const [badges, setBadges] = useState<BadgeModel[]>([]);

    useEffect(() => 
    {
        const fetchBadges = async () => 
        {
            setBadges(await badgeService.getBadges());
        };

        fetchBadges();
    }, []);

    return (
        <Page title="Badges">
            <div className="row">
                {badges.map((elem) => 
                (
                    <Badge badge={elem} className="col-lg-4 col-md-6 col-sm-12"></Badge>
                ))}
            </div>
        </Page>
    );
};

export default BadgesPage;
