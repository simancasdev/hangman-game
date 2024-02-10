import {GameStatus, Key} from "types";

export type AppState = {
  status: GameStatus;
  displayWord: string[];
  word: string | undefined;
};

export type IContext = {
  onStart: () => void;
  onChange: (key: Key) => void;
} & AppState;
