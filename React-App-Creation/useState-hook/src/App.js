import './App.css';
import { useState } from 'react';
import React from 'react';

// In Destructuring, Destructuring - Reaching and grabbing a value of an object by its key.
function App() {
  const [sport, setSport] = useState("Cricket");

  return (
    <div className="App">
      <h1>Today's topic is {sport}</h1>
      <button onClick={() => setSport("Foot Ball")}>Foot Ball</button>
      <button onClick={() => setSport("Volley Ball")}>Volley Ball</button>
      <button onClick={() => setSport("Cricket")}>Cricket</button>
      <button onClick={() => setSport("Basket Ball")}>Basket Ball</button>
    </div>
  );
}

function Counter () {
  const [value, setCounter] = useState(0);

  return (
    <div className='Counter'>
      <h2>COUNTER : {value}</h2>
      <button onClick={() => setCounter(value+1)}>Count</button>
      <button onClick={() => setCounter(0)}>Clear</button>
    </div>
  );
}

function Collection () {
  return (
    <React.Fragment>
      <App/>
      <Counter/>
    </React.Fragment>
  );
}

export default Collection;
