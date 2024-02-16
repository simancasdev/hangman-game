import {GameTheme, GameLanguage} from ".";

export type UIState = {
  menuOpened: boolean;
  language: GameLanguage;
  defaultTheme: GameTheme;
};
