import React, { useContext, useState } from "react";
import { GameContext } from "../context/GameContext";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";

function Home() {
  const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  const context = useContext(GameContext);
  const navigate = useNavigate();

  const [players, setPlayers] = useState({ 1: "", 2: "" });

  console.log(players);

  const handleChoosePlayer = (e) => {
    const playerName = e.target.name;
    const value = e.target.value.toUpperCase();

    if (
      playerName === "player1" &&
      (value === "O" || value === "X" || value === "")
    ) {
      setPlayers({ ...players, 1: value });
    } else if (
      playerName === "player2" &&
      (value === "O" || value === "X" || value === "")
    ) {
      setPlayers({ ...players, 2: value });
    } else {
      alert("Introduceti doar X sau O");
    }
  };

  const handleStartGame = () => {
    if (players[1] === players[2]) {
      alert("Introduceti valori diferite");
      return;
    }
    context.handleSetPlayers(players);

    navigate("/game");
  };

  return (
    <HomeWrapper>
      <h2>Start New game</h2>
      <Input
        nameInput="player1"
        player={players[1]}
        inputContent="Chose Player 1 name: "
        handleChoosePlayer={handleChoosePlayer}
      />

      <br />
      <Input
        nameInput="player2"
        player={players[2]}
        inputContent="Chose Player 2 name: "
        handleChoosePlayer={handleChoosePlayer}
      />

      <Button handleOnClick={handleStartGame} textContent="Start New Game" />
    </HomeWrapper>
  );
}

export default Home;
