import React, { useEffect, useState } from "react";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Page from "../../components/Page/Page";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

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
    </Page>
  );
};

export default UsersPage;
