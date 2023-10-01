import React, { useEffect, useState } from "react";
import { BadgesModel } from "../../models/badges.model";
import { badgesService } from "../../services/badges.service";
import Page from "../../components/Page/Page";

const BadgesPage = () => {

  const [badges, setBadges] = useState<BadgesModel[]>([]);

  const cardStyle: React.CSSProperties = {
    width: '18rem',
    display: 'inline-block', // This makes the card inline
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setBadges(await badgesService.getBadges());
    };

    fetchUsers();

    

  }, []);



  return (
    <Page title="Badges">
      <div>BadgesPage</div>
      
      <div className="row">
      {badges.map((item,index)=>(
        <div className="col-6">
            <div className="card mt-5" style={cardStyle}>
            <img key={index} src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" key={index}>{item.name}</h5>
              <p className="card-text" key={index}>Id: {item.id}</p>
              <p className="card-text" key={index}>Description: {item.description}</p>
              <p className="card-text" key={index}>Created: {new Date(item.createdAt).toLocaleDateString()}</p>

            </div>
          </div>
        </div>
      ))}
      </div>
    </Page>
  );
};

export default BadgesPage;
