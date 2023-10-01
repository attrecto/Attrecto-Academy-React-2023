import React, { useEffect, useState } from "react";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Page from "../../components/Page/Page";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  const cardStyle: React.CSSProperties = {
    width: '18rem',
    display: 'inline-block', // This makes the card inline
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };

    fetchUsers();


  }, []);

  console.log(users);



  return (
    <Page title="Users">
      <div>UsersPage</div>
      
      <div className="row">
      {users.length>0&&users.map((item,index)=>(
        <div className="col-6">
            <div className="card mt-5" style={cardStyle}>
            <img key={index} src={item.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title" key={index}>{item.name}</h5>
              <p className="card-text" key={index}>Id: {item.id}</p>
              <p className="card-text" key={index}>BadgesId: {item.badges? item.badges.map(badge=>badge.id).join(', '): 'No badges'}</p>
              <p className="card-text" key={index}>Created: {new Date(item.createdAt).toLocaleDateString()}</p>

            </div>
          </div>
        </div>
      ))}
      </div>
    </Page>
  );
};

export default UsersPage;
