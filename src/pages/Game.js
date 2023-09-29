import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import Board from "../components/Board";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Game() {
  const navigate = useNavigate();

  const { state, dispatch } = useContext(GameContext);

  const handleNewGame = () => {
    dispatch({ type: "RESET_GAME" });
    navigate("/");
  };

  const handleRestartGame = (players) => {
    dispatch({ type: "RESTART_GAME" });
    dispatch({ type: "SET_PLAYERS", payload: players });
    navigate("/game");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div className="status">{}</div>
      <h2>Current Player: "{state.currentPlayer}"</h2>
      <Board />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "60%",
        }}
      >
        <Button
          textContent="Restart Game"
          handleOnClick={() => handleRestartGame({ 1: "X", 2: "O" })}
        />
        <Button textContent="New Game" handleOnClick={handleNewGame} />
      </div>
    </div>
  );
}

export default Game;
