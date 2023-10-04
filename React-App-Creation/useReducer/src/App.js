import './App.css';
import { useState, useReducer } from 'react';
import React from 'react';

// In Destructuring, Destructuring - Reaching and grabbing a value of an object by its key.
function App() {
  const [checkStatus, setCheckStatus] = useState(false);
// Here we used use state to update the user behaviour on checkbox.
  return (
    <div className="App">
      <h2>Check Box with useState</h2>
      <input 
        type='checkbox' 
        value={checkStatus} 
        onChange={() => setCheckStatus( (checkStatus) => !checkStatus) }>
      </input>
      <label>{checkStatus ? "checked" : "not checked"}</label>
    </div>
  );
}

function CheckWithReducer () {
  const [checkStatus, setCheckStatus] = useReducer(
    (checkStatus) => !checkStatus,
    false);

  return (
    <div className='Counter'>
      <h2>Check box with useReducer</h2>
      <input 
        type='checkbox'
        value={checkStatus} 
        onChange={setCheckStatus}></input>
      <label>{checkStatus ? "checked" : "not checked"}</label>
    </div>
  );
}

function Collection () {
  return (
    <React.Fragment>
      <App/>
      <CheckWithReducer/>
    </React.Fragment>
  );
}

export default Collection;
