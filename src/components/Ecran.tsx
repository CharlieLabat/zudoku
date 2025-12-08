import React, { useState } from "react";
import Case from "./Case.tsx";

interface EcranProps {
  grilleRef: Array<Array<number>>;
}

const Ecran = ({ grilleRef }: EcranProps) => {
  // Grille de test
  const n = 0;
  const grilleTest = [
    [1, n, n, n, n, n, n, 1, n],
    [n, 2, n, n, n, n, n, n, n],
    [n, n, 3, n, n, n, n, n, n],
    [n, n, n, 4, n, n, n, n, 1],
    [n, n, n, n, 5, n, n, n, n],
    [n, n, n, n, n, 6, n, n, n],
    [n, n, n, n, n, n, 7, n, n],
    [n, n, n, 1, n, n, n, 9, n],
    [n, n, n, n, n, n, n, n, 8],
  ];

  const agloTest = () => {
    grilleTest.forEach((casse, ligne) => {
      //console.log(casse);
      const occuences = [];
      let occuencesId = casse.indexOf(1);
      while (occuencesId !== -1) {
        occuences.push(occuencesId);
        occuencesId = casse.indexOf(1, occuencesId + 1);
      }
      console.log("Il y a : ");
      console.log(occuences.length);
      console.log("d'1 dans la ligne " + ligne);
      if (occuences.length > 1) {
        console.error("Il y a trop de 1 sur cette ligne");
      }
    });
  };
  agloTest();

  return (
    <section className="ecran">
      {grilleTest.map((grille, ligne) => (
        <Case sousGrille={grille} key={ligne}></Case>
      ))}
    </section>
  );
};

export default Ecran;
