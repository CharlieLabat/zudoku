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
    [n, n, 3, n, n, 5, n, n, n],
    [n, n, n, 4, n, n, n, n, 1],
    [n, n, n, n, 5, n, n, n, n],
    [n, 3, n, n, n, 6, n, n, n],
    [n, n, n, n, n, n, 7, n, n],
    [n, n, n, 1, n, n, n, 9, n],
    [n, n, n, n, n, n, n, n, 8],
  ];
  const grilleInv = grilleTest.toReversed();
  // console.log(grilleInv);

  const nbOccuences = (nombre, liste) => {
    // Vérification par occuence
    const occuences = [];
    let occuencesId = liste.indexOf(nombre);
    while (occuencesId !== -1) {
      occuences.push(occuencesId);
      occuencesId = liste.indexOf(nombre, occuencesId + 1);
    }
    return occuences;
  };

  const grilleRetourne = () => {
    const grilleRetourneBase = [];
    grilleTest.forEach((casse, ligne) => {
      console.log(casse)
      
    
    });
    console.log(grilleRetourneBase);
  };

  const agloTest = () => {
    // Vérification de ligne
    grilleTest.forEach((casse, ligne) => {
      for (let n = 1; n <= 9; n++) {
        let occuence = nbOccuences(n, casse);

        /*  console.log("Il y a : ");
        console.log(occuence.length);
        console.log("d'" + n + " dans la ligne " + ligne); */
        if (occuence.length > 1) {
          console.error("Il y a trop de " + n + " sur cette ligne");
        }
      }
    });
    grilleRetourne();
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
