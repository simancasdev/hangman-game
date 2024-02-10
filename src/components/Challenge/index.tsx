import {Fragment} from "react";
import {useGame} from "context";
import {Container, Hint} from "./styled";

interface ChallengeProps {}

export const Challenge: React.FC<ChallengeProps> = () => {
  const {word, displayWord} = useGame();
  return word ? (
    <Container style={{gridTemplateColumns: `repeat(${word.length}, 90px)`}}>
      {displayWord.map((letter, key) => (
        <Hint key={key} children={letter} />
      ))}
    </Container>
  ) : (
    <Fragment />
  );
};
