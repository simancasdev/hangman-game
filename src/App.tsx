import {useGame} from "context";
import styled from "styled-components";
import {Start, Challenge, Keyboard} from "components";

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
      <Start />
      <Challenge />
      <Keyboard onKeyPressed={(key) => onChange(key)} />
    </Layout>
  );
}

export default App;
