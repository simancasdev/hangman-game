import {AppActions, AppState} from "types";

export const reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "start":
      const {word, displayWord} = action.payload;
      return {
        word,
        displayWord,
        status: "playing",
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
      };
    case "winner":
      return {
        ...state,
        status: "finished",
      };
    default:
      return state;
  }
};
