import React, { useEffect, useState } from "react";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import classes from "./UsersPage.module.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import User from "../../components/User/User";

const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);
  const [view_state,setViewState]=useState(2);

  const SetToTableView = () => {
    setViewState(1);
  };

  const SetToListView = () => {
    setViewState(2);
  };


  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };

    fetchUsers();
  }, []);

  return (
    <Page title="Users">
      <div className="d-flex justify-content-center flex-wrap gap-2">
      <Button color="primary" onClick={SetToTableView} >Tábla Nézet</Button>
      <Button color="primary" onClick={SetToListView}>Lista Nézet</Button>
      </div>
      <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3">
            <Button className="w-100 mb-3">Create User</Button>
          </div>
        </div>
        <div className="row">
          {users.map((item) => (
            <User state={view_state} user={item}  className="my-1"></User>
          ))}
        </div>
    </Page>
  );
};



export default UsersPage;
