import {Children} from "types";
import {Button} from "./styled";

interface IconButtonProps extends Children<JSX.Element> {
  onClick: () => void;
}

export const IconButton: React.FC<IconButtonProps> = ({children, onClick}) => {
  return <Button children={children} onClick={onClick} />;
};
