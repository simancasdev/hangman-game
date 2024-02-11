import {AlertConfig, GameStatus, Key} from "types";
import {IConfettiOptions} from "react-confetti/dist/types/Confetti";

export type Alert = {
  show: boolean;
  config: AlertConfig;
  message: string | undefined;
  type: "success" | "error" | undefined;
};

export type GameState = {
  alert: Alert;
  victory: boolean;
  status: GameStatus;
  failAttempts: number;
  showConfetti: boolean;
  displayWord: string[];
  word: string | undefined;
  confettiConfig: Partial<IConfettiOptions>;
};

export type GameMethods = {
  onStart: () => void;
  onTimeIsOver: () => void;
  onChange: (key: Key) => void;
  onConfetti: (payload: boolean) => void;
  onAlert: (
    show: boolean,
    message?: string,
    type?: Alert["type"],
    config?: AlertConfig
  ) => void;
};

export type Context = GameState & GameMethods;
