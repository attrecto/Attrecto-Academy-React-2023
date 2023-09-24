import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";

function App()
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
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
      <div className="container d-flex justify-content-center">
        <div className="card bg-white shadow text-center p-4 m-4">
          {error && <h5 className="mb-4 fs-3" style={{ color: "red" }}>Counter nem lehet negatív!</h5>}
          <h5 className="mb-4">Counter: {counter}</h5>
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
            <button className="btn btn-danger" onClick={() => Reset()}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
