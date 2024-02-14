import {useGame} from "context";
import ReactConfetti from "react-confetti";
import {Fragment, useEffect, useState} from "react";

interface ConfettiProps {}

type Dimension = {
  width: number;
  height: number;
};

export const Confetti: React.FC<ConfettiProps> = () => {
  const {showConfetti, onConfetti, confettiConfig} = useGame();
  const [{width, height}, setDimension] = useState<Dimension>({
    width: window.innerHeight,
    height: window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", () => {
      const {innerWidth, innerHeight} = window;
      setDimension({width: innerWidth, height: innerHeight});
    });
  }, []);

  return showConfetti ? (
    <ReactConfetti
      {...confettiConfig}
      width={width}
      height={height}
      onConfettiComplete={() => onConfetti(false)}
    />
  ) : (
    <Fragment />
  );
};
