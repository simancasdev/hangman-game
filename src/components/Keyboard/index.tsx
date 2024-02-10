import {Key} from "types";
import {keys} from "./helper";
import {Container, Key as KeyStyled} from "./styled";

interface KeyboardProps {
  onKeyPressed: (key: Key) => void;
}

export const Keyboard: React.FC<KeyboardProps> = ({onKeyPressed}) => {
  return (
    <Container data-testid="keyboard">
      {keys.map((key) => (
        <KeyStyled key={key} children={key} onClick={() => onKeyPressed(key)} />
      ))}
    </Container>
  );
};
