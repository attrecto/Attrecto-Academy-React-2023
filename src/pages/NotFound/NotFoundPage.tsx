import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            <div>404 Page not found</div>
            <Link to="/home">
                <Button color="primary">Home</Button>
            </Link>
        </div>
    );
};
export default NotFoundPage;