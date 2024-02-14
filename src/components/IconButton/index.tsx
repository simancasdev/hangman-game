import {Children} from "types";
import {Button} from "./styled";

interface IconButtonProps extends Children<JSX.Element> {}

export const IconButton: React.FC<IconButtonProps> = ({children}) => {
  return <Button children={children} />;
};
