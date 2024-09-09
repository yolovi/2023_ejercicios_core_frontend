import "./App.css";
import Person from "./components/Person/Person";
import PersonaClass from "./components/PersonClass/PersonaClass";

const name = "Yolanda";
const surname = "Lopez";
const age = 38;

function App() {
  return (
    <>
      <div>
        <Person name={name} surname={surname} age={age} /> <br />
        <Person name={"Alma"} surname={surname} age={3} /> <br />
        <Person name={"Carlos"} surname={"Martinez"} age={60} />
      </div>
      <div>
        <PersonaClass name={"Carlota"} surname={"Soriano"} age={25} /> <br />
        <PersonaClass name={"Pau"} surname={"Vidal"} age={12} /> <br />
        <PersonaClass name={"Marc"} surname={"Perz"} age={30} />
      </div>
    </>
  );
}

export default App;
