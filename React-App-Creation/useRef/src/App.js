import './App.css';
import { useRef, useState } from 'react';
import React from 'react';

function App() {
  const textTitle = useRef();
  const hexColor = useRef();

  console.log(textTitle);

  const submit = (event) => {
    event.preventDefault();
    const title = textTitle.current.value;
    const color = hexColor.current.value;
    alert(`${title} : ${color}`);
    textTitle.current.value = "";
    hexColor.current.value = "";
  } // this submit method prevents the refresfreshing. 
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input 
          ref={textTitle}
          type='text' 
          placeholder='Add the color'></input>
        <input
          ref={hexColor} 
          type='color'></input>
        <button>ADD</button>
      </form>
      <br></br>
      <CounterWithUseState />
      <CounterWithUseRef/>
    </div> 
  );
}

function CounterWithUseState () {
  const [initial, setCounter] = useState(0);

  const changeCount = () => {
    setCounter (initial+1);
    console.log(initial);
    alert(`Counter ${initial}`);
  }

  return (
    <div>
      <h2>useState</h2>
      <button 
        onClick={changeCount}
      >
          useState Counter : {initial}
      </button>
    </div>
  );
}

function CounterWithUseRef () {
  let count = useRef(0);

  let changeCount = () => {
    count.current = count.current+1;
    console.log(count.current);
    alert(`Counter ${count.current}`);
  }

  return (
    <div>
      <h1>useRef</h1>
      <button 
        onClick={changeCount}>
        useRef Counter : {count.current}
      </button>
    </div>
  );
}

export default App;
