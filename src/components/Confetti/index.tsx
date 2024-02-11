import {Fragment} from "react";
import {useGame} from "context";
import ReactConfetti from "react-confetti";

interface ConfettiProps {}

export const Confetti: React.FC<ConfettiProps> = () => {
  const {showConfetti, onConfetti, confettiConfig} = useGame();

  return showConfetti ? (
    <ReactConfetti
      {...confettiConfig}
      onConfettiComplete={() => onConfetti(false)}
    />
  ) : (
    <Fragment />
  );
};
