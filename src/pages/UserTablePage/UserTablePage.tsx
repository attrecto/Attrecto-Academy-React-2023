import React, { useEffect, useState } from "react";
import { UserModel } from "../../models/user.model";
import { usersService } from "../../services/user.service";
import Page from "../../components/Page/Page";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

/*import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./UsersPage.module.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";*/

const UserTablePage = () => 
{

    const [users, setUsers] = useState<UserModel[]>([]);

    useEffect(() => {
      const fetchUsers = async () => {
        setUsers(await usersService.getUsers());
      };
  
      fetchUsers();
    }, []);

  return (
    <Page title="Users Table View">
        <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Button className="w-50 mb-3">Create User</Button>
                <Link to="/users">
                    <Button className="w-50 mb-3">Card View</Button>
                </Link>
            </div>
        </div>
        <div className="table-responsive">
            <table className="table table-striped w-100">
                <thead>
                <tr>
                <th>ID</th>
                <th>Avatar</th>
                <th>Name</th>
                <th>Avatar Url</th>
                <th>Update</th>
                </tr>
                </thead>
                <tbody className="m-auto">
                    {users.map(({ id, image, name }) => (               
                        <tr key={id}>
                                <td className="align-middle">{id}</td>
                                <td>           
                                    <img src={image} alt={`user #${id}`} className="m-auto w-25"/>
                                </td>
                                <td className="align-middle">{name}</td>
                                <td className="align-middle">{image}</td>
                                <td className="align-middle">
                                    <Link to={`/user/${id}`}>
                                        <Button className="btn btn-secondary">Update</Button>
                                    </Link>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </Page>
  );
};

export default UserTablePage