import './App.css';
import { useState } from 'react';
import React from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  return [
    {
      value,
      onChange : (event) => {
        setValue(event.target.value);
      }
    },
    () => setValue(initialValue)
  ];
}

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (event) => {
    event.preventDefault();
    alert(`${titleProps.value} : ${colorProps.value}`);
    resetTitle();
    resetColor();
  } // this submit method prevents the refresfreshing. 
  // The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.

  return (
    <div className="App">
      <form onSubmit={submit}>
        <input
          {...titleProps} 
          type='text'
          placeholder='Type the color'
        >
        </input>
        <input
          {...colorProps}
          type='color'>
        </input>
        <button>Add Color</button>
      </form>
    </div> 
  );
}

export default App;
