import React, { useEffect, useState } from "react";
import "./App.scss"
import Ecran from "./components/Ecran.tsx";


function App() {
  // Récup de la grille
  const [grille, setGrille] = useState([])
  useEffect(() => {
    fetch("https://sudoku-api.vercel.app/api/dosuku").then(reponse => reponse.json()).then(grilleApi => {
      setGrille(grilleApi.newboard.grids[0].value) 
    })
  }, [])


  return (
    <main className="principal">
      <h1 className="principal__titre">ZUDOKU</h1>
      <Ecran grilleRef={grille}></Ecran>
    </main>
  );
}

export default App;
