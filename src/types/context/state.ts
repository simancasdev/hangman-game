import {GameStatus, Key} from "types";
import {IConfettiOptions} from "react-confetti/dist/types/Confetti";

export type AppState = {
  victory: boolean;
  status: GameStatus;
  failAttempts: number;
  showConfetti: boolean;
  displayWord: string[];
  word: string | undefined;
  confettiConfig: Partial<IConfettiOptions>;
  alert: {
    message: string | undefined;
    type: "success" | "error" | undefined;
  };
};

export type IContext = {
  onStart: () => void;
  onTimeIsOver: () => void;
  onChange: (key: Key) => void;
  onConfetti: (payload: boolean) => void;
} & AppState;
