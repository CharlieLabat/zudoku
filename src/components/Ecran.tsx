import React from "react";
import Case from "./Case.tsx";

const Ecran = () => {
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
      {grilleTest.map((grille,key) => (
        <Case sousGrille={grille} key={key}></Case>
      ))}
    </section>
  );
};

export default Ecran;
