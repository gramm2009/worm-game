import React from "react";

interface GemeButtonProps {
  startEndClickHandler : ()=>void;
  isGameStart: boolean;
}

const GameButton: React.FC<GemeButtonProps> = ({
  startEndClickHandler,
  isGameStart,
}): React.ReactElement => {
  return (
    <div>
      <button 
        onClick={startEndClickHandler}
        className="game-button"
        role="button"
      >
          {isGameStart ? "PAUSE" : "START"}
      </button>
    </div>
  );
};

export default GameButton;
