import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

const highJumpRecords = [
  { name: "lamasif", record: 1.02 },
  { name: "jayden", record: 2.35},
  { name: "kaile", record: 1.18},
  { name: "Jade", record: 1.08}
];

const List = ({data, renderItem, renderEmpty}) => {
  return !data.length? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => (
        <li key ={item.name}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  )
}
function App() {
  
    return (
      <div className='App'>
        <h1>render props</h1>
        <List 
        data={highJumpRecords}
        renderEmpty={<p>No data to load</p>}
        renderItem={(item) => (
          <>{item.name}-{item.record}</>
        )}
        />
      </div>
    );
}



export default App;
