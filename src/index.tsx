import "./index.css";
import App from "./App";
import {Provider} from "context";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Provider children={<App />} />);
