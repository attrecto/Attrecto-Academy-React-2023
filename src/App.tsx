import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";

function App() {
  const [counter, setCounter] = useState(0);
  const [isTooltipDisplayed, setIsTooltipDisplyed] = useState(false);

  const updateCounter = (increase: boolean) => {
    setCounter((currentValue) => {
      const futureValue = increase ? currentValue + 1 : currentValue - 1;
      const attemptedToGoUnderZero = futureValue < 0;
      return attemptedToGoUnderZero
        ? (() => {
            setIsTooltipDisplyed(true);
            return 0;
          })()
        : (() => {
            if (isTooltipDisplayed) setIsTooltipDisplyed(false);
            return futureValue;
          })();
    });
  };

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
              onClick={() => updateCounter(true)}
            >
              Increase +
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => updateCounter(false)}
            >
              Decrease -
            </button>
            <button className="btn btn-danger" onClick={() => setCounter(0)}>
              Reset
            </button>
          </div>
        </div>
      </div>
      {isTooltipDisplayed ? (
        <div className="container d-flex justify-content-center">
          <div className="row">
            <div className="col alert alert-danger" role="alert">
              <h5 className="alert-heading">
                Oops! Something went wrong...
              </h5>
              <p className="mb-0">Counter cannot display value less than 0!</p>
              <hr />
              <p className="mb-0"> Hint: Click on button "Increase +"</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
