import React from 'react';
import { render, screen } from '@testing-library/react';
import Cell from './Cell';

describe('Cell Component', () => {
  test('renders a game cell with default styling', () => {
    render(<Cell isWorm={false} />);
    const cellElement = screen.getByRole('cell');

    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toHaveClass('game-cell');
    expect(cellElement).not.toHaveClass('worm');
  });

  test('renders a worm cell with "worm" class and "WORM" text when isWorm is true', () => {
    render(<Cell isWorm={true} />);
    const cellElement = screen.getByRole('cell');

    expect(cellElement).toBeInTheDocument();
    expect(cellElement).toHaveClass('game-cell');
    expect(cellElement).toHaveClass('worm');
    expect(cellElement).toHaveTextContent('WORM');
  });

});
