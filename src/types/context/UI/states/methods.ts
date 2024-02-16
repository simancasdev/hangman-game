import {GameTheme} from "./theme";

export type UIMethods = {
  onMenu: (show: boolean) => void;
  toggleTheme: (theme: GameTheme) => void;
};
