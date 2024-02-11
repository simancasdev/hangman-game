import {GameReducerActions, GameState} from "types";
import {defaultReducerState} from "./default-states";

export const reducer = (
  state: GameState,
  action: GameReducerActions
): GameState => {
  switch (action.type) {
    case "start":
      const {word, displayWord, stages} = action.payload;
      return {
        ...defaultReducerState,
        word,
        stages,
        displayWord,
        status: "playing",
        showConfetti: false,
      };
    case "right-try":
      const temp = state.displayWord;
      const {indexes, key} = action.payload;
      for (const i of indexes) {
        temp[i] = key;
      }
      return {
        ...state,
        displayWord: temp,
        showConfetti: true,
      };
    case "wrong-try":
      return {
        ...state,
        failAttempts: state.failAttempts + 1,
      };
    case "confetti":
      return {
        ...state,
        showConfetti: action.payload,
      };
    case "alert":
      return {
        ...state,
        alert: {...action.payload},
      };
    case "wins":
      return {
        ...state,
        victory: true,
        status: "finished",
        showConfetti: true,
        confettiConfig: {
          recycle: true,
          gravity: 0.1,
          numberOfPieces: 500,
        },
      };
    case "lose":
    case "time-over":
      return {
        ...state,
        status: "finished",
      };
    default:
      return state;
  }
};
