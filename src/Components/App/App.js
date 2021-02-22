import React, { Component, useEffect, useState } from 'react'
import Board from '../Board/Board';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import '../App/App.css';

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [gameState, setGameState] = useState(Array(9).fill(null));
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);
  const [draw, setDraw] = useState(false);
  const [visited, setVisited] = useState([false,false,false,false,false,false,false,false,false])

  const compute = (gameState) => {
    // if(visited.includes(false)){
    const winningConditions =  [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let flag=true;
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]){
        setGameOver(true);
        setWinner(currentPlayer);
        setDraw(false)
        // flag=false;
      }
    }
  // }
     
  // if(flag==false){
  //   setGameOver(true);
  //   setWinner(currentPlayer);
  //   setDraw(false)
  // }else{
  //     setDraw(true)
  //     setWinner(null)
  // }
    
  }
  
  const reset = () => {
    setGameState(Array(9).fill(null));
    setGameOver(false);
    setWinner(null);
    // setCurrentPlayer("X");
    setDraw(false);
    setVisited([false,false,false,false,false,false,false,false,false])
  }
  

  const play = (i) => {
    if (gameOver==true) 
    return;
    
    if(visited[i]==true)
    return;

    else{
      const tempVisited=[...visited];
      tempVisited[i]=true;
      setVisited(tempVisited);
    }
    const tempGameState = [...gameState];
    tempGameState[i] = currentPlayer;
    setGameState(tempGameState);
    compute(gameState);       
  }

  useEffect(() => {
    if (currentPlayer == 'O'){
      setCurrentPlayer('X');
    } else {
      setCurrentPlayer('O');
    }
    compute(gameState);
    
  }, [gameState])

  return ( 
    <div className="container">
      <Header currentPlayer={currentPlayer}  />
      <Board gameState={gameState} play={play}  currentPlayer={currentPlayer} />
      <Footer winner={winner} draw={draw} reset={reset}  />
    </div>
   );
} 
export default App;