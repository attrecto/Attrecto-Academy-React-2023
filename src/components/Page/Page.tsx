import classNames from "classnames";
import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from "axios";


interface PageProps {
    title?: string;
    noCard?: boolean;
    children: React.ReactNode;
}

const Page = ({ children, noCard, title }: PageProps) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(() => 
    {
        axios.get('http://localhost:3000').then(() => 
        {
            setData(data);
            setIsLoading(false);
        }).catch((error) => 
        {
            console.error('Hiba történt:', error);
        });
    });


    return (
        <div>
            {isLoading? ( <Loader /> ) : 
            (
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
