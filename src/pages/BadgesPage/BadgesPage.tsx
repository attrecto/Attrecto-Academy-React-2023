import React, { useEffect, useState } from "react";
import { BadgeModel } from "../../models/badge.model";
import { badgesService } from "../../services/badge.service";
import Page from "../../components/Page/Page";

const BadgesPage = () => {
    const [badges, setBadges] = useState<BadgeModel[]>([]);

    useEffect(() => {
        const fetchBadges = async () => {
            setBadges(await badgesService.getBadges());
        };

        fetchBadges();
    }, []);

    console.log(badges);

    return (
        <Page title="Badges">
            <div>BadgesPage</div>
        </Page>
    );
};

export default BadgesPage;
