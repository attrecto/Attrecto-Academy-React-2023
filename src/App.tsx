import React, { useState } from "react";

import Navbar from "./components/navbar/Navbar";

function App() {

  const [error, setError] = useState("")
  const [counter, setCounter]= useState(0)

  const updateCounter=(increase: boolean)=>{
    if(!increase && counter <=0){
      setError("Nem lehet az érték 0-nál kisebb!")
      return
    }

    setError("")

    setCounter((currentValue)=>{
      return increase ? currentValue+1: currentValue -1})
  };

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <div className="container d-flex justify-content-center">
          <div className="card bg-white shadow text-center p-4 m-4">
            <h5>Counter: {counter}</h5>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <div className="d-flex justify-content-center flex-wrap gap-2">
              <button className="btn btn-primary" onClick={()=>updateCounter(true)}> Increase +</button>
              <button className="btn btn-secondary" onClick={()=>updateCounter(false)}> Decrease -</button>
              <button className="btn btn-danger" onClick={()=>setCounter(0)}> Reset </button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
