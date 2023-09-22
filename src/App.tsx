import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";

function App()
{
    const [counter, setCounter] = useState(0);
    const [isZero,setZero]=useState(false);

    function UpdateCounter(isIncrease:boolean)
    {
        if(counter!=0)
        {
            if(isIncrease)
            {
                setZero(false);
                return setCounter(counter+1);
            }
            else
            {
                setZero(false);
                return setCounter(counter-1);
            }
        }
        else
        {
            if(isIncrease)
            {
                setZero(false);
                return setCounter(counter+1);
            }
            else
            {
                setZero(true);
                return  setCounter(0);
            }
        }
    }

    function Reset()
    {
        setZero(false);
        return setCounter(0);
    }


    function Alert()
    {
        return (
            <div className="container d-flex justify-content-center">
                <div className="alert alert-danger text-center" role="alert">
                    A számláló nem vehet fel 0-nál kisebb értéket!!!
                </div>
            </div>
        );
    }

    return (
        <div className="App">
            <header className="App-header">
                <Navbar />
            </header>
            <div className="container d-flex justify-content-center">
                <div className="card bg-white shadow text-center p-4 m-4">
                    <h5>Counter: {counter}</h5>
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                        <button
                            className="btn btn-primary"
                            onClick={() => UpdateCounter(true)}
                        >
                            Increase +
                        </button>
                        <button
                            className="btn btn-secondary"
                            onClick={() => UpdateCounter(false)}
                        >
                            Decrease -
                        </button>
                        <button className="btn btn-danger" onClick={() => Reset()}>
                            Reset
                        </button>

                    </div>
                </div>
            </div>
            {isZero && <Alert />}
        </div>

    );
}

export default App;
