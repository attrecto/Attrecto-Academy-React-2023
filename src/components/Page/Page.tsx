import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

interface PageProps {
  title?: string;
  noCard?: boolean;
  children: React.ReactNode;
}

const Page = ({ children, noCard, title }: PageProps) => {
  const [isLoaderActive, setIsLoaderActive] = useState(true);

  useEffect(() => {
    const artificalDelay = async (delayInMs: number) => {
      setTimeout(() => setIsLoaderActive(false), delayInMs);
    };
    artificalDelay(500);
  }, []);

  return (
    <div>
      {isLoaderActive ? (
        <Loader textToDisplay={"Loading " + title?.toLowerCase() + "..."} />
      ) : (
        <div className="container pt-3">
          {title ? <h5>{title}</h5> : null}
          <div className={classNames({ "card bg-white shadow p-3": !noCard })}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
