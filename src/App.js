import React from "react";
import "./App.scss"
import Ecran from "./components/Ecran.tsx";


function App() {
  return (
    <main className="principal">
      <h1 className="principal__titre">SUDOKU</h1>
   <Ecran></Ecran>
    </main>
  );
}

export default App;
