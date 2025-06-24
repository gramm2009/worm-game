import React, { ReactElement } from "react";

interface CellPropsInterface {
  isWorm: boolean;
};

const Cell: React.FC<CellPropsInterface> = ({ isWorm }): ReactElement => {
  return (
    <div 
      className={`game-cell ${isWorm ? "worm" : ""}`}
      role="cell"
    >
      {isWorm ? "WORM" : null}
    </div>
  );
};

export default Cell;