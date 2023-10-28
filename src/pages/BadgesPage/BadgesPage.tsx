import { useEffect, useState } from "react";
import Page from "../../components/Page/Page";
import { BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";
import Badge from "../../components/Badge/Badge";

const BadgesPage = () => {
  const [badges, setBadges] = useState<BadgeModel[]>([]);

  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeService.getBadges());
    };

    fetchBadges();
  }, []);

  return (
    <Page title="Badges">
      <div className="row">
        {badges.map((currentBadge) => (
          <Badge
            badgeModel={currentBadge}
            className="col-lg-4 col-md-6 col-sm-12"
          />
        ))}
      </div>
    </Page>
  );
};

export default BadgesPage;