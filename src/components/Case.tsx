import React from "react";

interface GrillesProps {
  sousGrille: Array<number>;
}

const Case = ({ sousGrille }: GrillesProps) => {
  return (
    <form className="grille">
      {sousGrille.map((casse, key) => (
        <input
          type="number"
          name=""
          id={key.toString()}
          key={key}
          className="grille__case"
          maxLength={1}
          value={casse}
        />
      ))}
    </form>
  );
};

export default Case;
