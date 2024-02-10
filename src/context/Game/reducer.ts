import {AppActions, AppState} from "types";

export const reducer = (state: AppState, action: AppActions): AppState => {
  switch (action.type) {
    case "start":
      return {word: action.payload, status: "playing", answer: ""};
    default:
      return state;
  }
};
