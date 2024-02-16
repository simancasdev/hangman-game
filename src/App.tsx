import {Fragment} from "react";
import {useGame} from "context";
import styled from "styled-components";
import {
  Nav,
  Menu,
  Alert,
  Start,
  Drawing,
  Keyboard,
  Confetti,
  Challenge,
} from "components";

const Layout = styled.main`
  gap: 2rem;
  display: grid;
  height: 100vh;
  grid-template-rows: 60px auto;
`;

const Content = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

function App() {
  const {onChange} = useGame();
  return (
    <Fragment>
      <Layout>
        <Nav />
        <Content>
          <Drawing />
          <Start />
          <Challenge />
          <Keyboard onKeyPressed={(key) => onChange(key)} />
        </Content>
      </Layout>
      {/* 🌎 global components */}
      <Menu />
      <Alert />
      <Confetti />
    </Fragment>
  );
}

export default App;
