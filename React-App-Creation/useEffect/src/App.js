import './App.css';
import { useState, useEffect } from 'react';
import React from 'react';

// In Destructuring, Destructuring - Reaching and grabbing a value of an object by its key.
function App() {
  const [sport, setSport] = useState("Cricket");
  const [athletic, setAthletic] = useState("100m");

  // @TODO - Check these changes by commenting each use effect
  useEffect (() => {
    console.log(`Sport : ${sport} recorded.` );
  }, [sport]);

  useEffect (() => {
    console.log(`Sport Changed: ${sport} recorded.` );
  }, []);

  useEffect (() => {
    console.log(`Athletic Sport : ${athletic}`);
  }, []);

  useEffect (() => {
    console.log(`Athletic Sport : ${athletic}`);
  }, [athletic]);

  useEffect (() => {
    console.log(`All Sport : ${athletic}`);
  }, [sport, athletic]);

  return (
    <div className="App">
      <h1>Today's topic is {sport}</h1>
      <button onClick={() => setSport("Foot Ball")}>Foot Ball</button>
      <button onClick={() => setSport("Volley Ball")}>Volley Ball</button>
      <button onClick={() => setSport("Cricket")}>Cricket</button>
      <button onClick={() => setSport("Basket Ball")}>Basket Ball</button>

      <h2>Athletic Sports : {athletic}</h2>
      <button onClick={() => {setAthletic("Hurdles")}}>Hurdles</button>
      <button onClick={() => {setAthletic("Long Jump")}}>Long Jump</button>
    </div>
  );
}

function Counter () {
  const [value, setCounter] = useState(0);
  useEffect(() => {
    console.log(`counter value : ${value}`);
  });
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
