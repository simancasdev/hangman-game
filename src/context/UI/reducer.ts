import {UIReducerActions, UIState} from "types";

export const reducer = (state: UIState, action: UIReducerActions): UIState => {
  switch (action.type) {
    case "menu":
      return {
        ...state,
        menuOpened: action.payload,
      };
    case "theme":
      return {
        ...state,
        defaultTheme: action.payload,
      };
    default:
      return state;
  }
};
