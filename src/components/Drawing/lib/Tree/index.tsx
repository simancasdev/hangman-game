import {Fragment} from "react";
import {PARTS} from "./helper";
import {Canvas} from "./styled";
import {useGame} from "context";
import {ATTEMPTS_TO_COMPLETE_GUY_DRAWING} from "context/Game/constants";

interface TreeProps {}

export const Tree: React.FC<TreeProps> = () => {
  const {failAttempts} = useGame();
  const progress = failAttempts - ATTEMPTS_TO_COMPLETE_GUY_DRAWING;
  const showTree = progress >= 0;

  return showTree ? (
    <Canvas>
      {PARTS.slice(0, progress).map((element, key) => (
        <Fragment key={key} children={element} />
      ))}
    </Canvas>
  ) : (
    <Fragment />
  );
};
