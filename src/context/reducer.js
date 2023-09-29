import { actionTypes, initialState } from "./GameContext";

export const reducer = (state, action) => {
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
                currentPlayer: action.payload[1],
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
