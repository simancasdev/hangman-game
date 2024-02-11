import {Text} from "./styled";
import {Children} from "types";
import {CSSProperties} from "react";

interface TypographyProps
  extends Children<any>,
    Pick<CSSProperties, "fontWeight" | "color" | "fontSize"> {}

export const Typography: React.FC<TypographyProps> = (props) => {
  const {children, ...propStyles} = props;
  return <Text style={propStyles} children={children} />;
};
