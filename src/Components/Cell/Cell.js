import React, { Component } from 'react'
import '../Cell/Cell.css';

const Cell = ({currentPlayer, visited, play}) => {
  const style = visited ? `cell ${visited}` : `cell`;
  return ( 
    <div className={style} id={visited} onClick={play} >
        {visited}
    </div>
   );
}
 
export default Cell;