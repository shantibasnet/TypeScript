import { IPerson, ICar, IBike } from "./pages/type.tsx";

function App() {
  const Person: IPerson = {
    name: "Chiz",
    age: "Thirty-Six",
  };
  console.log(Person);

  const vechile: ICar = {
    make: "Toyota",
    model: "Camry",
  };

  return (
    <div>
      <p>Name:{Person.name}</p>
      <p>Age:{Person.age}</p>
      <p>Make:{vechile.make}</p>
      <p>Model:{vechile.model}</p>
    </div>
  );
}

export default App;
