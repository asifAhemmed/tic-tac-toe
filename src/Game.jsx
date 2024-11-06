import Board from "./Board";
import { useState } from "react";

const Game = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [currentMove, setCurrentMove] = useState(0);

  const handlePlay = (nextSquares) => {
    setXIsNext(!xIsNext);
    const nextHistory = [...history.slice(0, currentMove+1),nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);
  };

  const jumpTo = (move) =>{
    setCurrentMove(move);
    setXIsNext(move % 2 === 0);
  }

  const currentSquares = history[currentMove];
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = `Go to the move # ${move}`;
    } else {
      description = "Go to start the game";
    }
    return (
      <li key={move} className="bg-gray-600 text-white text-2xl p-2 m-2">
         <button onClick={()=>jumpTo(move)}>{description}</button>
      </li>
    );
  });
  return (
    <div className="flex justify-center items-center gap-10">
      <div>
        <Board
          squares={currentSquares}
          xIsNext={xIsNext}
          onPlay={handlePlay}
        ></Board>
      </div>
      <div className="border border-2 border-gray-400 p-4">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
