import {GameTheme} from "./states";

export type Menu = {
  type: "menu";
  payload: boolean;
};

export type Theme = {
  type: "theme";
  payload: GameTheme;
};

export type UIReducerActions = Menu | Theme;
