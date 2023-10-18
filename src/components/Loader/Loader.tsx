import React from 'react'
import classes from "./Loader.module.scss";
import classNames from 'classnames';

const Loader = () => 
{
  return (
    <div className={classes.SpinnerDiv}>
        <div className='row'>
            <div  className='col-12'>
                <div className={classNames("spinner-border", classes.Spinner)} role="status">
                    
                </div>
            </div>
            <div className='col-12 mt-3'>
                <div className={classes.Felirat}>Loading...</div>
            </div>
        </div>
    </div>
  )
}

export default Loader