import {GameStatus, Key} from "types";
import {IConfettiOptions} from "react-confetti/dist/types/Confetti";

export type AppState = {
  status: GameStatus;
  failAttempts: number;
  showConfetti: boolean;
  displayWord: string[];
  word: string | undefined;
  confettiConfig: Partial<IConfettiOptions>;
};

export type IContext = {
  onStart: () => void;
  onChange: (key: Key) => void;
  onConfetti: (payload: boolean) => void;
} & AppState;
