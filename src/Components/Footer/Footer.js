import React, { Component } from 'react'
import '../Footer/Footer.css';

const Footer = ({winner,draw, reset}) => {
  return ( 
      <div>
        {winner && <h3 id="game-status">{winner} Won! </h3>}
        {draw && <h3 id="game-status">Draw! </h3>}        
        <button onClick={reset} >RESET</button>
      </div>
   );
}
 
export default Footer;
