import React, { useCallback, useEffect, useState } from "react";
import { BadgeModel } from "../../models/badges.model";
import { badgesService } from "../../services/badges.service";
import Page from "../../components/Page/Page";
import Badge from "../../components/Badge/badge";
import { useNavigate } from "react-router-dom";
import AccessController from "../../components/access-controller/AccessController";
import Button from "../../components/Button/Button";


const BadgesPage = () => 
{
    const [badges, setBadges] = useState<BadgeModel[]>([]);
    const navigate = useNavigate();

    const fetchBadges = useCallback(async () => 
    {
      setBadges(await badgesService.getBadges());
    },[]);


    useEffect(() => 
    {
        const fetchBadges = async () => 
        {
            setBadges(await badgesService.getBadges());
        };

        fetchBadges();
    }, []);


    const gotoBadgePage = () => 
    {
      navigate('/badge')
    };
  
  
    const handleDeleteBadge = async (id: string) =>
    {
      await badgesService.deleteBadge(id)
      fetchBadges();
    };


    return (
        <Page title="Badges">
            <AccessController allowedFor={["ADMIN"]}>
                <div className="row w-100">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3 w-50">
                    <Button className="w-25 mb-3 me-3" onClick={gotoBadgePage}>Create Badge</Button>
                    </div>
                </div>
            </AccessController>
            <div className="row">
                {badges.map((elem) => 
                (
                    <div key={elem.id} className="col-lg-4 col-md-6 col-sm-12">
                        <Badge badge={elem} handleDeleteBadge={handleDeleteBadge}></Badge>
                    </div>
                ))}
            </div>

        </Page>
    );
};

export default BadgesPage;
