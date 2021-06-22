import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';

const PLAYER_1 = 'X';
const PLAYER_2 = 'O';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_1);
  const [numSquaresClicked, setNumSquaresClicked] = useState(0);
  const [winner, setWinner] = useState(null);

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const updateGameState = (id) => {
    if (winner !== null) return;

    const clickedSquares = [...squares];
      let row = 0;
      let col = 0;
      let clicked = false;

      while (row <3 && !clicked) {
        while (col <3 && !clicked) {
          let currentSquare = clickedSquares[row][col];
          if (currentSquare.id === id) {
            console.log(currentSquare);
            if (currentSquare.value !== '') return;
        
            clicked = true;
            currentSquare.value = currentPlayer;
            setNumSquaresClicked(numSquaresClicked + 1);
            if (currentPlayer === PLAYER_1) {
              setCurrentPlayer(PLAYER_2)
            } else {
                setCurrentPlayer(PLAYER_1);
            }
          }
          col += 1;
        }
      row += 1;
      col = 0;
      }
      setSquares(clickedSquares);
  }


  const checkForWinner = () => {
    // Complete in Wave 3
    // You will need to:
    // 1. Go accross each row to see if 
    //    3 squares in the same row match
    //    i.e. same value
    // 2. Go down each column to see if
    //    3 squares in each column match
    // 3. Go across each diagonal to see if 
    //    all three squares have the same value.

  }

  const resetGame = () => {
    // Complete in Wave 4
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is ... -- Fill in for wave 3 </h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={updateGameState} />
      </main>
    </div>
  );
}

export default App;
