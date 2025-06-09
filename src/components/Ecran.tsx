import React, { useState } from "react";
import Case from "./Case.tsx";

interface EcranProps {
 grilleRef : Array<Array<number>>
}

const Ecran = ({ grilleRef } : EcranProps) => {


  const n = Math.floor(Math.random() * 10);
  const grilleTest = [
    [0, n, n, n, n, n, n, n, n],
    [n, 0, n, n, n, n, n, n, n],
    [n, n, 0, n, n, n, n, n, n],
    [n, n, n, 0, n, n, n, n, n],
    [n, n, n, n, 0, n, n, n, n],
    [n, n, n, n, n, 0, n, n, n],
    [n, n, n, n, n, n, 0, n, n],
    [n, n, n, n, n, n, n, 0, n],
    [n, n, n, n, n, n, n, n, 0],
  ];


const agloTest = () => {
  grilleTest.forEach((casse,ligne) => {
    
  })
}


  return (
    <section className="ecran">
      {  grilleRef.map((grille,ligne) => (
        <Case sousGrille={grille} key={ligne}></Case>
      ))}
    </section>
  );
};

export default Ecran;
