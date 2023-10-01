import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";


const HomePage = () =>
{

    const [counter, setCounter] = useState(0);
    const [error, setError] = useState(false);

    const updateCounter = (increase: boolean) =>
    {
        if (increase)
        {
            setError(false);
            setCounter((currentValue) => currentValue + 1);
        }
        else
        {
            if (counter > 0)
            {
                setCounter((currentValue) => currentValue - 1);
            }
            else
            {
                setError(true);
            }
        }
    };

    const Reset = () =>
    {
        setCounter(0);
        setError(false);
    };

    return (
        <Page title="Home" noCard>
            <div className="container d-flex justify-content-center">
                <div className="card bg-white shadow text-center p-4 m-4">
                    {error && <h5 className="mb-4 fs-3" style={{ color: "red" }}>Counter nem lehet negatív!</h5>}
                    <h5 className="mb-4">Counter: {counter}</h5>
                    <div className="d-flex justify-content-center flex-wrap gap-2">
                        <Button color="primary" onClick={() => updateCounter(true)}>Increase +</Button>
                        <Button color="secondary" onClick={() => updateCounter(false)}>Decrease -</Button>
                        <Button color="danger" onClick={() => Reset()}>Reset</Button>
                    </div>
                </div>
            </div>
        </Page>
    );
};

export default HomePage;
