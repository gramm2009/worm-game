import React from 'react';
import { screen, render, fireEvent, waitFor } from '@testing-library/react';
import Game from './Game';
import GameButton from '../gameButton/GameButton';

describe("Game component render", () => {

  test("Default render", () => {
    render(<Game />);
    const gameElement = screen.getByRole("game");
    expect(gameElement).toBeInTheDocument();
    expect(gameElement).toHaveClass("game");
  });

  test("Render with GameButton", () => {
    render(
      <Game>
        <GameButton />
      </Game>);
    const gameElement = screen.getByRole("game");
    expect(gameElement).toBeInTheDocument();
    expect(gameElement).toHaveClass("game");

    const gameButtonElement = screen.getByRole("button");
    expect(gameButtonElement).toBeInTheDocument();
    expect(gameButtonElement).toHaveClass("game-button");
  });

  test('renders correctly asFragment', () => {
    const { asFragment } = render(<Game />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Integration Game component test", () => {
  test("Click game button", async () => {
    render(<Game />);

    const startButton = screen.getByRole('button', { name: /START/i });
    fireEvent.click(startButton);
    expect(startButton).toHaveTextContent("PAUSE");


    await waitFor(() => {
      const wormCell = screen.getAllByRole("cell").filter(el => el.classList.contains("worm"));
      fireEvent.click(wormCell[0]);
      const scoreElement = screen.getByText(/Score: 1/i);
      expect(scoreElement).toBeInTheDocument();
    });
  });
});
