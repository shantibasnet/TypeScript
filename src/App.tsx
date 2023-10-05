import "./App.css";
import { IHuman, IPerson, INumber, ICar, IBike } from "./pages/type.tsx";

function App() {
  const myHuman: IHuman = {
    gender: "Male",
    DOB: "01/29/1987",
    status: true,
  };

  const Person: IPerson = {
    name: "Chiz",
    age: 36,
  };

  console.log(Person);

  const numbers: INumber = {
    dates: [1997, 2002, 1985, 2005],
  };

  const lowestDate = Math.min(...numbers.dates);

  const union: ICar | IBike = {
    make: "HONDA",
    model: "CIVIC",
  };

  const intersection: ICar & IBike = {
    make: "Ford",
    model: "Focus",
    brand: "Kawasaki",
    type: "Sport",
  };

  return (
    <div className="container">
      <p>
        Hi, I am {Person.name}. I am a {myHuman.gender} and I am {Person.age}
        years old.
      </p>
      <p>Human DOB: {myHuman.DOB} </p>
      <p>Human Status: {myHuman.status.toString()}</p>
      <h1>List of Numbers</h1>
      <ul>
        {numbers.dates.map((date, index) => (
          <li key={index}>{date}</li>
        ))}
      </ul>
      <h1>Lowest Date: {lowestDate}</h1>
      <div className="vehicle-info-container">
        <div className="vehicle-info">
          <h1>CAR</h1>
          <p>Make: {union.make}</p>
          <p>Model: {union.model}</p>
        </div>
        <div className="vehicle-info">
          <h1>CAR</h1>
          <p>Make: {intersection.make}</p>
          <p>Model: {intersection.model}</p>
        </div>
        <div className="vehicle-info">
          <h2>BIKE</h2>
          <p>Brand: {intersection.brand}</p>
          <p>Type: {intersection.type}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
