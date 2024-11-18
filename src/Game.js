import React, { useState } from "react";
import GameGrid from "./GameGrid.js";

function Game() {
   // State for moves and turn
   const [moves, setMoves] = useState(new Array(9).fill(""));  // Initialize moves with empty strings
   const [turn, setTurn] = useState("X");  // Initialize turn with "X"

   // Function to handle grid clicks
   function gridClick(whichSquare) {
      // Only update if the square is empty
      if (moves[whichSquare] === "") {
         const movesCopy = [...moves];  // Create a copy of moves
         movesCopy[whichSquare] = turn;  // Place the current player's mark
         setMoves(movesCopy);  // Update the state with the new moves array
         
         // Alternate turns: if it's X's turn, make it O's; if it's O's, make it X's
         setTurn(turn === "X" ? "O" : "X");  
      }
   }

   // Function to reset the game
   function newGame() {
      setMoves(new Array(9).fill(""));  // Reset the game board to empty strings
      setTurn("X");  // Reset the turn to X
   }

   return (
      <>
         <h1>Tic-Tac-Toe</h1>        
         <GameGrid moves={moves} click={gridClick} />
         <p>
            Turn: <strong className={turn}>{turn}</strong>
         </p>
         <p>
            <button onClick={newGame}>New Game</button>
         </p>
      </>
   );
}

export default Game;