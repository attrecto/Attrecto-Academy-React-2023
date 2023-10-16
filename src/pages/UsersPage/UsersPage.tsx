import React, { useCallback, useEffect, useState } from "react";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import UserCard from "../../components/user-card/UserCard";
import { BadgeModel } from "../../models/badges.model";
import { badgeService } from "../../services/badges.service";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [badges, setBadges] = useState<BadgeModel[]>([]);
  const navigate = useNavigate();

  const fetchUsers = useCallback(async () => {
    setUsers(await usersService.getUsers());
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const fetchBadges = async () => {
      setBadges(await badgeService.getBadges());
    };
    fetchBadges();
  }, []);

  const goToUserPage = () => {
    navigate("/user");
  };

  const handleDeleteUser = async (id: string) => {
    await usersService.deleteUser(id);
    fetchUsers();
  };

  return (
    <Page title="Users">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Button className="w-100 mb-3" onClick={goToUserPage}>
            Create User
          </Button>
        </div>
      </div>
      <div className="row">
        {users.map((user) => (
          <div key={user.id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
            <UserCard
              user={user}
              handleDeleteUser={handleDeleteUser}
              badges={badges}
            />
          </div>
        ))}
      </div>
    </Page>
  );
};

export default UsersPage;
