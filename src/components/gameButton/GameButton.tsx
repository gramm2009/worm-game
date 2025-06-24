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
        role="game-button"
        className="game-button"
      >
          {isGameStart ? "PAUSE" : "START"}
      </button>
    </div>
  );
};

export default GameButton;
