import {PARTS as GUY_PARTS} from "components/Drawing/lib/Guy/helper";
import {PARTS as TREE_PARTS} from "components/Drawing/lib/Tree/helper";

export const INITIAL_GAME_DURATION = 60; // <-- seconds
export const ATTEMPTS_TO_COMPLETE_GUY_DRAWING = GUY_PARTS.length;
export const ATTEMPTS_TO_COMPLETE_TREE_DRAWING = TREE_PARTS.length;
export const ATTEMPTS_TO_COMPLETE_DRAWING =
  ATTEMPTS_TO_COMPLETE_GUY_DRAWING + ATTEMPTS_TO_COMPLETE_TREE_DRAWING;
