import { useContext, useEffect, useState } from "react";
import {
  GameContext,
  calculateWinner,
  isValidSquare,
} from "../context/GameContext";
import Square from "./Square";
import styled from "styled-components";

export default function Board() {
  const BoardWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-gap: 0;
  `;

  const {
    state: { board, winner },
    dispatch,
  } = useContext(GameContext);

  const [xIsNext, setXIsNext] = useState(true);

  const [squares, setSquares] = useState(board);
  const [buttonDisable, setButtonDisable] = useState(false);

  useEffect(() => {
    let winner = calculateWinner(squares);
    if (winner) {
      setButtonDisable(true);
      dispatch({ type: "STOP_GAME", payload: winner });
    }
  }, [xIsNext]);

  function handleClickSquare(index) {
    if (squares[index]) {
      console.log("Alege alta pozitie");
      return;
    }

    dispatch({ type: "TOGGLE_PLAYER" });
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[index] = "X";
    } else {
      nextSquares[index] = "O";
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
    </div>
  );
}
