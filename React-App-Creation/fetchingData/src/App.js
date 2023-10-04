import './App.css';
import { useEffect, useState } from 'react';
import React from 'react';

// Creating child component to display the data.
const GithubUser = ({userName, avatar, id, nodeId}) => {
  return (
    <div>
      <p>Name : {userName}</p>
      <img src = {avatar} height={250} alt={userName}/>
      <p>ID : {id}</p>
      <p>Node ID : {nodeId}</p>
    </div>
    
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null); //For handling errors.
  const [loading, setLoading] = useState(false); //for set the loading status

  //using useEffect hook, we fetch the data from external API.
  useEffect (() => {
    setLoading(true);
    fetch(
      `https://api.github.com/users/Kaviraj-MK`
    )
    .then((response) => 
      response.json()
    )
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);

 

  console.log("Data => ", data);
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <pre>{JSON.stringify(error)}</pre>
  }
  if(!data) {
    return (
      <div className="App">
        <h1>No Data Found</h1>
      </div> 
    );
  }
    return (
      <div className='App'>
        <h1>Github User Data</h1>
        <GithubUser 
          userName = {data.login}
          avatar = {data.avatar_url}
          id={data.id}
          nodeId={data.node_id}
          />
      </div>
    );
}

const Lift = ({ name, elevationGain, status }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  );
}


const query = `
query {
  allLifts {
    name
    elevationGain
    status
  }
}
`;

const opts = {
  method: "POST",
  headers: {"Content-Type": "application/josn"},
  body: JSON.stringify({ query })
};

function GraphQLFetch () {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 //Fetching GraphQL data
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com`, opts
    )
    .then((response) => response.json())
    .then(setData)
    .then(() => setLoading(false))
    .catch(setError);
  }, []);
  console.log("graphQl Data : ", data);
  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    console.log("Error Occuerd: ", error);
    return <pre>{JSON.stringify(error)}</pre>
  }
  if (data === null) {
    return (
      <div>
        <h2>No Data Found!</h2>
      </div>
    );
  }
  console.log("graphQl Data : ", data);
  return (
    <div>
      <h1>Fetching Data with GraphyQL</h1>
      {data.data.allLifts.map( (lift) => (
        <Lift 
          name={lift.name} 
          elevationGain={lift.elevationGain}
          status={lift.status}/>
      ))}
    </div>
  );
}

function Collection () {
  return (
    <div>
      <App/>
      <GraphQLFetch/>
    </div>
  );
}
   


export default Collection;
