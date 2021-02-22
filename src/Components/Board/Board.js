import React, { Component } from 'react';
import '../Board/Board.css';
import Cell from '../Cell/Cell';

const Board = ({gameState, currentPlayer, play}) => {
  return ( 
    <div className="board">
      {
        gameState.map(
          (square, i) => (
            <Cell key={i} visited={square}  play={() => play(i)} currentPlayer={currentPlayer}  />
          )
        )
      }
    </div>
    
   );
}
 
export default Board;

