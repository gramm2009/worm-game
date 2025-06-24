import React from 'react';
import { screen, render } from '@testing-library/react';
import Game from './Game'
import GameButton from '../gameButton/GameButton'


describe("Game test", () => {

  test("Default render", () => {
    render(<Game />);
    const gameElement = screen.getByRole("game");
    expect(gameElement).toBeInTheDocument();
    expect(gameElement).toHaveClass("game");
  });

  test("Render with GameButton", () => {
    render(<Game ><GameButton /></Game>);
    const gameElement = screen.getByRole("game");
    expect(gameElement).toBeInTheDocument();
    expect(gameElement).toHaveClass("game");

    const gameButtonElement = screen.getByRole("game-button");
    expect(gameButtonElement).toBeInTheDocument();
    expect(gameButtonElement).toHaveClass("game-button");
  });
});
