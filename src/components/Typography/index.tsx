import {Text} from "./styled";
import {useUI} from "context";
import {Children} from "types";
import {CSSProperties} from "react";

interface TypographyProps
  extends Children<any>,
    Pick<CSSProperties, "fontWeight" | "color" | "fontSize"> {}

export const Typography: React.FC<TypographyProps> = (props) => {
  const {defaultTheme} = useUI();
  const {children, ...styleProps} = props;
  const {color = defaultTheme === "light" ? "#000" : "#fff"} = styleProps;
  return <Text style={{...styleProps, color}} children={children} />;
};
