import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";

function App() {
  const [counter, setCounter] = useState(0);
  const [loverThanZeroError, setloverThanZeroError] =useState(false);

  const updateCounter = (increase: boolean) => {
    setCounter((currentValue) => {
      if (currentValue == 0 && !increase)
      {
        setloverThanZeroError(true);
        return 0;
      }
      setloverThanZeroError(false);
      return increase ? currentValue + 1 : currentValue - 1;
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
            <h6 className="text-danger">{loverThanZeroError ? "Counter can't be lover than zero" : ""}</h6>
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
      </div>
  );
}


export default App;
