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


const UsersPage = () => {
  const [users, setUsers] = useState<UserModel[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsers(await usersService.getUsers());
    };

    fetchUsers();
  }, []);

  return (
    <Page title="Users">
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <Button className="w-50 mb-3">Create User</Button>
          <Link to="/usersTableView">
            <Button className="w-50 mb-3">Table View</Button>
          </Link>
        </div>
      </div>
      <div className="row">
        {users.map(({ id, image, name }) => (
          <div key={id} className="col-12 col-sm-6 col-md-4 col-lg-3 my-1">
            <Link
              to={`/user/${id}`}
              className={classNames("card", classes.UserCard)}
            >
              <img
                src={image}
                alt={`user #${id}`}
                className={classNames("card-img-top", classes.UserImage)}
              />
              <div className="card-body">
                <h5>{name}</h5>
              </div>
              <Button className={classes.DeleteIcon}>
                <FontAwesomeIcon icon={faTrash} />
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Page>
  );
};

export default UsersPage;
