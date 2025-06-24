import React from 'react';
import {screen, render} from '@testing-library/react';
import GameButton from './GameButton';


describe('Render GameButton', ()=>{
  test("Button default", ()=>{
    render(<GameButton 
        startEndClickHandler={()=>{}}
        isGameStart={false}
    />)
    const gameButtonElement = screen.getByRole("game-button");

    expect(gameButtonElement).toBeInTheDocument();
    expect(gameButtonElement).toHaveTextContent("START");
    expect(gameButtonElement).toHaveClass("game-button");
  });

    test("Button Game started", ()=>{
    render(<GameButton 
        startEndClickHandler={()=>{}}
        isGameStart={true}
    />)
    const gameButtonElement = screen.getByRole("game-button");

    expect(gameButtonElement).toBeInTheDocument();
    expect(gameButtonElement).toHaveTextContent("PAUSE");
    expect(gameButtonElement).toHaveClass("game-button");
  })
})