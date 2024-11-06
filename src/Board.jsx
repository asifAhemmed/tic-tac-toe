/* eslint-disable react/prop-types */
import Squares from "./Squares";
import calculateWinner from "./utilities";

const Board = ({ squares, xIsNext, onPlay }) => {
  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const nextSquare = squares.slice();
    if (xIsNext) {
      nextSquare[index] = "X";
    } else {
      nextSquare[index] = "O";
    }
    onPlay(nextSquare);
  };

  let status;
  if (calculateWinner(squares)) {
    status = `Winner: ${calculateWinner(squares)}`;
  }else if(squares.every(square => square !== null)){
    status = 'It is a draw'
  }
   else {
    status = `Next Player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <>
      <h2 className="text-3xl font-bold my-3">{status}</h2>
      <div className="flex">
        <Squares
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
        ></Squares>
        <Squares
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
        ></Squares>
        <Squares
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
        ></Squares>
      </div>
      <div className="flex">
        <Squares
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
        ></Squares>
        <Squares
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
        ></Squares>
        <Squares
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
        ></Squares>
      </div>
      <div className="flex">
        <Squares
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
        ></Squares>
        <Squares
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
        ></Squares>
        <Squares
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
        ></Squares>
      </div>
    </>
  );
};

export default Board;
