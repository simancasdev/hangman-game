import {reducer} from "./reducer";
import {ATTEMPTS_TO_COMPLETE_DRAWING} from "./helper";
import {Alert, AlertConfig, Context, Key} from "types";
import {
  defaultAlertState,
  defaultContextState,
  defaultReducerState,
} from "./default-states";
import {
  useMemo,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

export const GameContext = createContext<Context>(defaultContextState);

export const useGame = (): Context => useContext(GameContext);

interface GameProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const Provider: React.FC<GameProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultReducerState);
  const {word, displayWord, status, failAttempts} = state;

  const onStart = useCallback((): void => {
    let word: string, temp: string[], displayWord: string[];
    word = "zarza";
    temp = word.split("");
    displayWord = temp.map((hint, i) => {
      if (i === 0 || i + 1 === temp.length) return hint;
      return "";
    });
    dispatch({
      type: "start",
      payload: {
        word,
        displayWord,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = useCallback(
    (key: Key): void => {
      if (status !== "playing") return;

      let tempDisplay = [...displayWord];
      tempDisplay.pop();
      tempDisplay.shift();
      if (!word || tempDisplay.includes(key)) return;

      if (word.includes(key)) {
        let indexes: number[], temp: string[];
        indexes = [];
        temp = word.split("");
        for (let i = 0; i < temp.length; i++) {
          if (temp[i] === key) {
            indexes.push(i);
          }
        }
        dispatch({type: "right-try", payload: {indexes, key}});
      } else {
        dispatch({type: "wrong-try"});
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [word, displayWord, status]
  );

  const onAlert = useCallback(
    (
      show: boolean,
      message?: string,
      type?: Alert["type"],
      config?: AlertConfig
    ) => {
      dispatch({
        type: "alert",
        payload: {
          show,
          type,
          message,
          config: {...defaultAlertState["config"], ...config},
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const onTimeIsOver = useCallback((): void => {
    dispatch({type: "time-over"});
    onAlert(true, "Time is over", "error");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onConfetti = useCallback(
    (payload: boolean): void => dispatch({type: "confetti", payload}),
    []
  );

  useEffect(() => {
    if (status !== "playing") return;

    // handling when user wins
    let wins: boolean = true;
    for (const letter of displayWord) {
      if (!letter) wins = false;
    }
    if (wins) {
      dispatch({type: "wins"});
      onAlert(true, "You won! Congratulations", "success");
    }

    // handling when user lose
    if (failAttempts === ATTEMPTS_TO_COMPLETE_DRAWING) {
      dispatch({type: "lose"});
      onAlert(true, "Oh no. You did it well, try again", "error");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const values = useMemo(
    () => ({...state, onStart, onAlert, onChange, onConfetti, onTimeIsOver}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
