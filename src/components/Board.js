import { useContext, useEffect, useState } from "react";
import {
  GameContext,
  calculateWinner,
} from "../context/GameContext";
import Square from "./Square";

export default function Board() {
  const {
    state: { board, winner, currentPlayer },
    dispatch,
  } = useContext(GameContext);

  console.log(board);
  const [xIsNext, setXIsNext] = useState(true);

  const [squares, setSquares] = useState(board);
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    let equal = squares.every((element) => element !== null);
    let winner = calculateWinner(squares);
    if (winner) {
      setButtonDisable(true);
      dispatch({ type: "STOP_GAME", payload: winner });
    }

    if (equal) {
      setButtonDisable(true);
      dispatch({ type: "STOP_GAME", payload: false });
    }
  }, [xIsNext]);

  function handleClickSquare(index) {
    if (squares[index]) {
      alert("Alege alta pozitie");
      return;
    }

    dispatch({ type: "TOGGLE_PLAYER" });
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = currentPlayer;
    } else {
      nextSquares[index] = currentPlayer;
    }

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 100px)",
          gridGap: "0",
        }}
      >
        {squares.map((item, index) => (
          <Square
            isButtonDisable={buttonDisable}
            key={index}
            value={item}
            onSquareClick={() => handleClickSquare(index)}
          />
        ))}
      </div>
      {winner && <h2>{winner} a Castigat</h2>}
      {winner === false && <h2>Jucatorii au egalitate</h2>}
    </div>
  );
}
