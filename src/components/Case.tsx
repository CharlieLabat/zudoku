import React, { useState } from "react";

interface GrillesProps {
  sousGrille: Array<number>;
}

const Case = ({ sousGrille }: GrillesProps) => {
  const [grilleValeur, setGrilleValeur] = useState(sousGrille);
  const handleCases = () => {
    setGrilleValeur(grilleValeur.map((casse) => casse));
  };
  return (
    <form className="grille">
      {sousGrille.map((casse, key) => (
        <input
          type="number"
          id={key.toString()}
          key={key}
          onChange={handleCases}
          className="grille__case"
          maxLength={1}
          value={casse}
        />
      ))}
    </form>
  );
};

export default Case;
