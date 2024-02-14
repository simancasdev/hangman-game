import {reducer} from "./reducer";
import {useGameListener} from "./hooks";
import {ALL_STAGES} from "./all-stages";
import {createDisplayWord} from "./helper";
import {Alert, AlertConfig, GameContext as IContext, Key} from "types";
import {
  useMemo,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";
import {
  defaultAlertState,
  defaultContextState,
  defaultReducerState,
} from "./default-states";

export const GameContext = createContext<IContext>(defaultContextState);

export const useGame = (): IContext => useContext(GameContext);

interface GameProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const GameProvider: React.FC<GameProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultReducerState);
  const {word, displayWord, status} = state;

  const onStart = useCallback((): void => {
    let word: string, displayWord: string[], stages: string[];
    stages = ALL_STAGES;
    word = stages[0];
    displayWord = createDisplayWord(word);
    dispatch({
      type: "start",
      payload: {
        word,
        stages,
        displayWord,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = useCallback(
    (key: Key): void => {
      if (status !== "playing") return;

      const tempDisplay = [...displayWord];
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

  useGameListener(state, {dispatch, onAlert});

  const values = useMemo(
    () => ({...state, onStart, onAlert, onChange, onConfetti, onTimeIsOver}),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  return <GameContext.Provider value={values}>{children}</GameContext.Provider>;
};
