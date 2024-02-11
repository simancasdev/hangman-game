import {useGame} from "context";
import styled from "styled-components";
import {Start, Challenge, Keyboard, Confetti, Draw} from "components";

const Layout = styled.main`
  gap: 2rem;
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const {onChange} = useGame();
  return (
    <Layout>
      <Draw />
      <Start />
      <Challenge />
      <Keyboard onKeyPressed={(key) => onChange(key)} />
      <Confetti />
    </Layout>
  );
}

export default App;
