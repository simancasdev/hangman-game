import {Container} from "./styled";

interface BackdropProps {
  onClick: () => void;
}

export const Backdrop: React.FC<BackdropProps> = ({onClick}) => {
  return <Container onClick={onClick} />;
};
