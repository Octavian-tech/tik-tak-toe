import React, { createContext, useReducer } from "react";

const actionTypes = {
  SET_PLAYERS: "SET_PLAYERS",
  SET_BOARD: "SET_BOARD",
  TOGGLE_PLAYER: "TOGGLE_PLAYER",
  STOP_GAME: "STOP_GAME",
  RESET_GAME: "RESET_GAME",
  RESTART_GAME: "RESTART_GAME",
};

export const GameContext = createContext();

const initialState = {
  board: Array(9).fill(null),
  currentPlayer: "X",
  players: null,
  winner: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_BOARD:
      return {
        ...state,
        board: action.payload,
      };

    case actionTypes.SET_PLAYERS:
      return {
        ...state,
        players: action.payload,
        currentPlayer: action.payload[1],
      };

    case actionTypes.STOP_GAME:
      return {
        ...state,
        winner: action.payload,
      };

    case actionTypes.RESTART_GAME:
      return {
        ...initialState,
        winner: null,
        players: action.payload,
        currentPlayer:  "X",
      };
    case actionTypes.TOGGLE_PLAYER:
      return {
        ...state,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
      };

    case actionTypes.RESET_GAME:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

export function isValidSquare(board, index) {
  if (board[index] != null) {
    return false;
  }

  return true;
}

export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

export default function GameProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSetPlayers = (players) => {
    dispatch({ type: "SET_PLAYERS", payload: players });
  };

  const handleRestartGame = (players) => {
    console.log(players);
    dispatch({ type: "RESTART_GAME", payload: players });
  };

  return (
    <GameContext.Provider
      value={{ state, dispatch, handleSetPlayers, handleRestartGame }}
    >
      {children}
    </GameContext.Provider>
  );
}
