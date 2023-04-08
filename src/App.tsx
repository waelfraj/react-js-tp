import "./App.css";
import ListPerson from "./components/listPerson/listPerson";

function App() {
  return (
    <div className="App">
      <ListPerson
        person={[
          { name: "wael", age: 12 },
          { name: "Amine", age: 14 },
          { name: "Ali", age: 16 },
        ]}
      />
    </div>
  );
}

export default App;
