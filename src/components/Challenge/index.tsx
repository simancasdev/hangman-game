import {Fragment} from "react";
import {useGame} from "context";
import {Container, Hint} from "./styled";

interface ChallengeProps {}

export const Challenge: React.FC<ChallengeProps> = () => {
  const {word, displayWord} = useGame();
  return word ? (
    <Container
      style={{
        gridTemplateColumns: `repeat(${word.length}, 1fr)`,
      }}
    >
      {displayWord.map((letter, key) => (
        <Hint key={key} children={letter} />
      ))}
    </Container>
  ) : (
    <Fragment />
  );
};
