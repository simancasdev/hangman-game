import {Fragment} from "react";
import {PARTS} from "./helper";
import {Canvas} from "./styled";
import {useGame} from "context";

interface GuyProps {}

export const Guy: React.FC<GuyProps> = () => {
  const {failAttempts} = useGame();

  return (
    <Canvas>
      {PARTS.slice(0, failAttempts).map((part, key) => (
        <Fragment key={key} children={part} />
      ))}
    </Canvas>
  );
};
