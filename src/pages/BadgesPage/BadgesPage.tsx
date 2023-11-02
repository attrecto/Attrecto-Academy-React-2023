import { useCallback, useEffect, useState } from "react";


import Page from "../../components/Page/Page";
import { BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";


import { useNavigate } from "react-router-dom";
import AccessController from "../../components/access-controller/AccessController";
import Button from "../../components/Button/Button";

import BadgeCard from "../../components/badge-card/BadgeCard";

const BadgesPage = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  const fetchBadges=useCallback(async()=>{
    setBadges(await badgeService.getBadges());
  },[]);

  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeService.getBadges());
    };

    fetchBadges();
  }, []);

  const navigate=useNavigate();

  const goToBadgePage = () =>{
    navigate("/badge")
  }

  const handleDeleteBadge=async (id: string)=>{
    await badgeService.deleteBadge(id);
    fetchBadges();
  };

  return (
    <Page title="Badges">
      <AccessController allowedFor={["ADMIN"]}>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Button className="w-100 mb-3" onClick={goToBadgePage}>
              Create Badge
            </Button>
          </div>
        </div>
      </AccessController>
      <div className="row">
        {badges.map((badge) => (
          <div key={badge.id} className="col-lg-4 col-md-6 col-sm-12 my-1">
            <BadgeCard badge={badge} handleDeleteBadge={handleDeleteBadge}></BadgeCard>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default BadgesPage;