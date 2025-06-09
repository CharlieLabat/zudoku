import React, { useState } from "react";

interface GrillesProps {
  sousGrille: Array<number>;
}

const Case = ({ sousGrille }: GrillesProps) => {
  const [grilleValeur, setGrilleValeur] = useState(sousGrille);

  const handleCases = (caseChoisi) => {
    setGrilleValeur(
      grilleValeur.map((casse, key) =>
        caseChoisi.target.id === key.toString()
          ? (casse = caseChoisi.target.value)
          : casse
      )
    );
  };
  return (
    <form className="grille">
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
    </form>
  );
};

export default Case;
