import {GameLanguage, GameTheme} from ".";

export type UIMethods = {
  onMenu: (show: boolean) => void;
  toggleTheme: (theme: GameTheme) => void;
  toggleLanguage: (language: GameLanguage) => void;
};
