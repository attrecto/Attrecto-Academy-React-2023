import classNames from "classnames";
import React, { useState } from "react";
import Loader from "../loader/Loader";
import { useEffect } from 'react';

interface PageProps {
  title?: string;
  noCard?: boolean;
  children: React.ReactNode;
  badge?:boolean;
  user?:boolean;
}



const Page = ({ children, noCard, title,badge,user }: PageProps) => {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => 
  {
    if(badge)
      fetch('http://localhost:3001/badges').then(() => 
      {
          setLoading(false);
      })
      if(user)
      fetch('http://localhost:3001/users').then(() => 
      {
          setLoading(false);
      })
  });
   
  
  

  return (
    <div className="container pt-3">
      {title ? <h5>{title}</h5> : null}
      <div className={classNames({ "card bg-white shadow p-3": !noCard })}>
        {(loading&&(badge||user)) ? <Loader></Loader>:children}
      </div>
    </div>
  );
};

export default Page;
