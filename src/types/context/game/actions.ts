import {Alert} from "./states";

export type Start = {
  type: "start";
  payload: {
    word: string;
    stages: string[];
    displayWord: string[];
  };
};

export type RightTry = {
  type: "right-try";
  payload: {
    key: string;
    indexes: number[];
  };
};

export type WrongTry = {
  type: "wrong-try";
};

export type Wins = {
  type: "wins";
};

export type Lose = {
  type: "lose";
};

export type Cofetti = {
  type: "confetti";
  payload: boolean;
};

export type TimeOver = {
  type: "time-over";
};

export type GameAlert = {
  type: "alert";
  payload: Alert;
};

export type NextStage = {
  type: "next-stage";
};

export type GameReducerActions =
  | Wins
  | Lose
  | Start
  | Cofetti
  | RightTry
  | WrongTry
  | TimeOver
  | NextStage
  | GameAlert;
