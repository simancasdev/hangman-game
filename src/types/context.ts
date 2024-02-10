import {GameStatus, Key} from ".";

export type AppActions = Start;

export type Start = {type: "start"; payload: string};

export type AppState = {
  answer: string;
  status: GameStatus;
  word: string | undefined;
};

export type IContext = {
  onStart: () => void;
  onChange: (key: Key) => void;
} & AppState;
