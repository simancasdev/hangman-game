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

export type Winner = {
  type: "winner";
};

export type AppActions = Start | RightTry | Winner;
