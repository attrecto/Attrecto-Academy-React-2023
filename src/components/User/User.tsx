import classNames from "classnames";
import { UserModel } from "../../models/user.model";
import classes from "../../pages/UsersPage/UsersPage.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


interface UserProps {
  className?: string;
  user:UserModel;
  state:number;
}

const User = ({ className, user,state }: UserProps) => {
    if(state===1)
    {
  return (
    <div className={classNames("d-flex col-6 justify-content-center",className)}>
        <Link
                to={`/user/${user.id}`}
                className={classNames("card", classes.UserCard)}
              >
                <img
                  src={user.image}
                  alt={`user #${user.id}`}
                  className={classNames("card-img-top", classes.UserImage)}
                />
                <div className="card-body">
                  <h5>{user.name}</h5>
                </div>
                <Button className={classes.DeleteIcon}>
                  <FontAwesomeIcon icon={faTrash} />
                </Button>
        </Link>
    </div>
  );
    }
    else
    {
        return (
        <div className={classNames("col-12 col-sm-6 col-md-4 col-lg-3",className)}>
            <Link
                    to={`/user/${user.id}`}
                    className={classNames("card", classes.UserCard)}
                >
                    <img
                    src={user.image}
                    alt={`user #${user.id}`}
                    className={classNames("card-img-top", classes.UserImage)}
                    />
                    <div className="card-body">
                    <h5>{user.name}</h5>
                    </div>
                    <Button className={classes.DeleteIcon}>
                    <FontAwesomeIcon icon={faTrash} />
                    </Button>
            </Link>
        </div>
        );
    }
};

export default User;