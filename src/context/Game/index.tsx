import {reducer} from "./reducer";
import {IContext, Key} from "types";
import {defaultState} from "./default-state";
import {ATTEMPTS_TO_COMPLETE_DRAWING} from "./helper";
import {
  useMemo,
  useEffect,
  useContext,
  useReducer,
  useCallback,
  createContext,
} from "react";

export const Context = createContext<IContext>(defaultState);

export const useGame = (): IContext => useContext(Context);

interface GameProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const Provider: React.FC<GameProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, {
    word: undefined,
    displayWord: [],
    failAttempts: 0,
    status: "initial",
    showConfetti: false,
    confettiConfig: {...defaultState.confettiConfig},
  });
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
    [word, displayWord, status]
  );

  const onConfetti = useCallback((payload: boolean) => {
    dispatch({type: "confetti", payload});
  }, []);

  useEffect(() => {
    if (status !== "playing") return;

    // handling when user wins
    let wins: boolean = true;
    for (const letter of displayWord) {
      if (!letter) wins = false;
    }
    if (wins) {
      dispatch({type: "wins"});
    }

    // handling when user lose
    if (failAttempts === ATTEMPTS_TO_COMPLETE_DRAWING) {
      dispatch({type: "lose"});
    }
  }, [state]);

  const values = useMemo(
    () => ({...state, onStart, onChange, onConfetti}),
    [state]
  );
  return <Context.Provider value={values}>{children}</Context.Provider>;
};
