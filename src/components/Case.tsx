import React, { useState } from "react";

interface GrillesProps {
  sousGrille: Array<number>;

  grillePrincipal: Array<Array<number>>;
  numLigne: number;
}
// Case : Zone d'un nombre (entre 1 et 9)
const Case = ({
  sousGrille,

  grillePrincipal,
  numLigne,
}: GrillesProps) => {
  const [grilleValeur, setGrilleValeur] = useState(sousGrille);

  // Controle de la case
  const handleCases = (caseChoisi : any) => {
    setGrilleValeur(
      grilleValeur.map((casse, key) =>
        caseChoisi.target.id === key.toString()
          ? (casse = caseChoisi.target.value)
          : casse,
      ),
    );

 console.log(sousGrille)
    

  };
  return (
    <section className="grille">
      {grilleValeur.map((casse, key) => (
        <input
          type="number"
          id={key.toString()}
          key={key}
          onChange={handleCases}
          className="grille__case"
          maxLength={1}
          value={casse > 0 ? casse : ""}
        />
      ))}
    </section>
  );
};

export default Case;
