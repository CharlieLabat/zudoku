import React, { useState } from "react";
import Case from "./Case.tsx";

interface EcranProps {
  grilleRef: Array<Array<number>>;
}

const Ecran = ({ grilleRef }: EcranProps) => {
  // Grille de test
 /*  const n = 0;
  const grilleTest = [
    [1, n, n, n, n, n, n, 1, n],
    [n, 2, n, n, n, n, n, n, n],
    [n, n, 3, n, n, 5, n, n, n],
    [n, n, n, 4, n, n, n, n, 1],
    [n, n, n, n, 5, n, n, n, n],
    [n, 3, n, n, n, 6, n, n, n],
    [n, n, n, 4, n, n, 7, n, n],
    [n, n, n, 1, n, n, n, 9, n],
    [n, n, n, n, n, n, n, n, 8],
  ];
 */

  
// Recherche d'occuences : Les trois conditions (ligne, colonne, sous-grille) utilisent cette fonction pour voir l'unicité de la zone
  const nbOccuences = (nombre: number, liste: string | any[]) => {
    // Vérification par occuence
    const occuences = [];
    let occuencesId = liste.indexOf(nombre.toString());
    while (occuencesId !== -1) {
      occuences.push(occuencesId);
      occuencesId = liste.indexOf(nombre.toString(), occuencesId + 1);
    }
    return occuences;
  };
  // Fonction pour retourner la grille pour vérifier les colonne
  const grilleRetourne = (liste: any[]) => {
    const grilleRetourneBase: any[] = [];
    for (let index = 0; index < 9; index++) {
      grilleRetourneBase.push(liste.map((casse: any[]) => casse[index]));
    }
    //  console.log(grilleRetourneBase);
    return grilleRetourneBase;
  };

  const agloTest = (grillePrincipal: any[]) => {
    // Vérification de ligne
    grillePrincipal.forEach((casse, ligne) => {
      for (let n = 1; n <= 9; n++) {
        // Peu import l'ordre des nombres, on balaye le nombre de fois et on vérifie si cela apparait une fois par ligne
        // Autrement dit, un Sudoku vérifie l'unicité par ligne
        let occuence = nbOccuences(n, casse);
        if (occuence.length > 1) {
          console.error("Il y a trop de " + n + " sur cette ligne");
        }
      }
    });
    // Vérification de colonne
    const grilleColonne = grilleRetourne(grillePrincipal);
    grilleColonne.forEach((casse, ligne) => {
      for (let n = 1; n <= 9; n++) {
        // Peu import l'ordre des nombres, on balaye le nombre de fois et on vérifie si cela apparait une fois par colonne
        // Autrement dit, un Sudoku vérifie l'unicité par colonne
        let occuence = nbOccuences(n, casse);
        if (occuence.length > 1) {
          console.error("Il y a trop de " + n + " sur cette colonne");
        }
      }
    });
  };


  return (
    <form className="ecran">
      {grilleRef.map((grille, ligne) => (
        <Case sousGrille={grille} key={ligne} numLigne={ligne} grillePrincipal={grilleRef}></Case>
      ))}
    </form>
  );
};

export default Ecran;
