import './App.css';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'; //Outlet is used for the nesting, in this case it's History()

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

// IMPORTANT
// When we use react router to route through the different pages, we need to exoprt them separately.
export function App() {
  
    return (
      <div className='App'>
        <nav>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/services"}>Services</Link>
        </nav>
        <h1>Home</h1>
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

export function About () {
  return (
    <div>
      <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/services"}>Services</Link>
        </nav>
      <h1>About Us</h1>
      <Outlet/>
    </div>
  );
}

export function History () {
  return (
    <div>
      <h2>Brief about us.</h2>
      <p>Hi we are from Dublin.</p>
    </div>
  );
}

export function Login () {
  return (
    <div>
      <nav>
          <Link to={"/about"}>About</Link>
          <Link to={"/"}>Home</Link>
          <Link to={"/services"}>Services</Link>
        </nav>
      <h2>Login</h2>
    </div>
  );
}

export function Services () {
  return (  
    <div>
      <nav>
          <Link to={"/about"}>About</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/"}>Home</Link>
        </nav>
      <h2>Services</h2>
    </div>
    );
}


// we remove this defaul export component
// export default App;
