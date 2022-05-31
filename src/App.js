import "./styles.css";
import NavBar from "./components/Navbar/NavBar";
import TaskList from "./components/TaskList/TaskList";
import Calcular from "./components/Calcular/Calcular";
import { useState } from "react";

let idAcc = 0;
const generateId = () => {
  idAcc = idAcc + 1;
  return idAcc;
};
export default function App() {
  const [Dices, setDice] = useState([]);
  const addDice = (people, weightburguer) => {
    const newDices = {
      id: generateId(),
      people,
      weightburguer
    };
    setDice((existingDices) => {
      return [...existingDices, newDices];
    });
  };
  return (
    <div className="App">
      <NavBar />
      <div>
        <h3>A calculadora mais simples de hamburger</h3>
        <div className="container">
          <TaskList title="Pessoas" />
        </div>
        <div>
          <Calcular title="Calcular" onAddDices={addDice} Dices={Dices} />
        </div>
      </div>
    </div>
  );
}
