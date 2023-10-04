import './App.css';

const subjects = ["Maths", "Science", "English", "IT"];
console.log(subjects[2]);

const [firstSport, secondSport, thirdSport, fourthSport] = ["cricket", "volley Ball", "Foot Ball", "Basket Ball"];
console.log(firstSport);
console.log(fourthSport);
// In Destructuring, Destructuring - Reaching and grabbing a value of an object by its key.
function App({name}) {
  return (
    <div className="App">
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
