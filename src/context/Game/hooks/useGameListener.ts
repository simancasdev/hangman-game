import {Dispatch, useEffect} from "react";
import {ATTEMPTS_TO_COMPLETE_DRAWING} from "../helper";
import {GameMethods, GameReducerActions, GameState} from "types";

/**
 * @name useGameListener
 * @param (state: GameState, {onAlert, dispatch})
 * @description custom hook to handle the game listeners for every
 * action where we need to implement a useEffect
 * @returns void
 */
export const useGameListener = (
  state: GameState,
  {
    onAlert,
    dispatch,
  }: Pick<GameMethods, "onAlert"> & {dispatch: Dispatch<GameReducerActions>}
): void => {
  const {status, displayWord, failAttempts} = state;

  // This listener check the user interactions to
  // determinate if user wins or lose.
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
};
