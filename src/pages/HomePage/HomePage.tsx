import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Page from "../../components/Page/Page";

const HomePage = () => {
  const [counter, setCounter] = useState(0);

  const updateCounter = (increase: boolean) => {
    setCounter((currentValue) => {
      return increase ? currentValue + 1 : currentValue - 1;
    });
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <Page title="Home" noCard>
      <div className="container d-flex justify-content-center">
        <div className="card bg-white shadow text-center p-4 m-4">
          <h5>Counter: {counter}</h5>
          <div className="d-flex justify-content-center flex-wrap gap-2">
            <Button color="primary" onClick={() => updateCounter(true)}>
              Increase +
            </Button>
            <Button color="secondary" onClick={() => updateCounter(false)}>
              Decrease -
            </Button>
            <Button color="danger" onClick={resetCounter}>
              Reset
            </Button>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default HomePage;
