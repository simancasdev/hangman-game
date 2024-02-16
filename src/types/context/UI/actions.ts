import {GameTheme, GameLanguage} from "./states";

export type Menu = {
  type: "menu";
  payload: boolean;
};

export type Theme = {
  type: "theme";
  payload: GameTheme;
};

export type Language = {
  type: "language";
  payload: GameLanguage;
};

export type UIReducerActions = Menu | Theme | Language;
