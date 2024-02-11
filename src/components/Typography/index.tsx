import {Text} from "./styled";
import {Children} from "types";

interface TypographyProps extends Children<string | undefined> {}

export const Typography: React.FC<TypographyProps> = ({children}) => {
  return <Text children={children} />;
};
