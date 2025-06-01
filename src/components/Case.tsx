import React, { useState } from "react";

interface GrillesProps {
  sousGrille: Array<number>;
}

const Case = ({ sousGrille }: GrillesProps) => {
     const [grilleValeur, setGrilleValeur] = useState(0)
  const handleCase = (e) => {

    setGrilleValeur(e.target.value)
  }
  return (
    <form className="grille">
      {sousGrille.map((casse, key) => (
        <input
          type="number"
          name=""
          id={key.toString()}
          key={key}
          onChange={handleCase}
          className="grille__case"
          maxLength={1}
          value={casse}
        />
      ))}
    </form>
  );
};

export default Case;
