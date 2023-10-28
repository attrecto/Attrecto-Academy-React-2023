import React from "react";
import classes from "./Loader.module.scss";
import classNames from "classnames";

interface LoaderProps {
  textToDisplay?: string;
}

function Loader({ textToDisplay}: LoaderProps) {
  return (
    <div className={classes.Loader}>
      <div className="text-center">
        <div className={classNames("spinner-border")} role="status"></div>
      </div>
        <span className={classes.TextToDisplay}>{textToDisplay}</span>
    </div>
  );
}

export default Loader;