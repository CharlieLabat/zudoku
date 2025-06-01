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

  return (
    <section className="ecran">
      {  grilleRef.map((grille,key) => (
        <Case sousGrille={grille} key={key}></Case>
      ))}
    </section>
  );
};

export default Ecran;
