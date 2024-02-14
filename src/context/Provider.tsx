import {Children} from "types";
import {UIProvider, GameProvider} from ".";

interface ProviderProps extends Children<JSX.Element | JSX.Element[]> {}

const Provider: React.FC<ProviderProps> = ({children}) => {
  return (
    <UIProvider>
      <GameProvider>{children}</GameProvider>
    </UIProvider>
  );
};

export default Provider;
