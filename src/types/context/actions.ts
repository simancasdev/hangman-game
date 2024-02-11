export type Start = {
  type: "start";
  payload: {
    word: string;
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

export type AppActions = Start | RightTry | WrongTry | Wins | Lose | Cofetti;
