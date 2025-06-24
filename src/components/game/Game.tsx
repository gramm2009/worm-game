import React, {
  ReactElement,
  useState,
  useRef,
  useCallback,
  useEffect,
} from "react";
import { getRandomNumber } from '../functions';
import Cell from "../cell/Cell";
import GameButton from "../gameButton/GameButton";

const Game = () => {
  const fieldSize = 16;
  let speedRef: React.RefObject<number> = useRef<number>(2000);
  let intervalRef: React.RefObject<NodeJS.Timeout | null> =
    useRef<NodeJS.Timeout | null>(null);

  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [wormPosition, setWormPosition] = useState<number>(
    getRandomNumber(0, fieldSize)
  );

  const renderBoards: () => ReactElement[] = useCallback((): ReactElement[] => {
    const size: number = fieldSize;
    const reactElements: ReactElement[] = [];

    for (let i = 0; i < size; i++) {
      const isWorm = isGameStart && (i === wormPosition ? true : false);
      reactElements.push(<Cell isWorm={isWorm} key={i} />);
    }
    return reactElements;
  }, [isGameStart, wormPosition]);

  function cellClickHandler(
    e: React.MouseEvent<HTMLDivElement | MouseEvent>
  ): void {
    const target = e.target as HTMLElement;
    const isWorm = Object.values(target.classList).includes("worm");
    if (isWorm) {
      setScore((prev) => prev + 1);
      setWormPosition(getRandomNumber(0, 16));
    }
  }

  const startEndClickHandler = useCallback((): void => {
    setIsGameStart((prev) => !prev);
  }, []);

  const clearIntervslF = useCallback((): void => {
    intervalRef.current && clearInterval(intervalRef.current);
  }, []);

  const setNewIntervalF = useCallback((): void => {
    clearIntervslF();

    intervalRef.current = setInterval(() => {
      setWormPosition(getRandomNumber(0, fieldSize));
    }, speedRef.current);
  }, [clearIntervslF]);

  useEffect(() => {
    if (isGameStart) {
      setNewIntervalF();
    } else {
      clearIntervslF();
    }

    return () => {
      clearIntervslF();
    };
  }, [wormPosition, isGameStart, clearIntervslF, setNewIntervalF]);

  useEffect(() => {
    if (score % 10 === 0) {
      speedRef.current = speedRef.current * 0.8;
    }
  }, [score]);

  return (
    <div className="game" role="game">
      <div className="game-title">Click on the worm game</div>
      <div className="game-score">{score}</div>
      <div onClick={cellClickHandler} className="game-field">
        {renderBoards()}
      </div>
      <GameButton
        startEndClickHandler={startEndClickHandler}
        isGameStart={isGameStart}
      />
    </div>
  );
};

export default Game;
