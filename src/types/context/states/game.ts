import {Alert} from ".";
import {GameStatus} from "types/game-status";
import {IConfettiOptions} from "react-confetti/dist/types/Confetti";

export type GameState = {
  alert: Alert;
  stages: string[];
  victory: boolean;
  status: GameStatus;
  gameDuration: number;
  failAttempts: number;
  showConfetti: boolean;
  displayWord: string[];
  word: string | undefined;
  currentStage: number | undefined;
  confettiConfig: Partial<IConfettiOptions>;
};
