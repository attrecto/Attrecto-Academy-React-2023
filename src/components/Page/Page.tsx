import classNames from "classnames";
import React from "react";

interface PageProps {
    title?: string;
    noCard?: boolean;
    children: React.ReactNode;
}

const Page = ({ children, noCard, title }: PageProps) => {
    return (
        <div className="container pt-3">
            {title ? <h5>{title}</h5> : null}
            <div className={classNames({ "card bg-white shadow p-3": !noCard })}>
                {children}
            </div>
        </div>
    );
};

export default Page;
