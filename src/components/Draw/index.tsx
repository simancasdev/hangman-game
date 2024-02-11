import {Fragment} from "react";
import {Guy, Tree} from "./lib";
import styled from "styled-components";

interface DrawProps {}

const Container = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-end;
`;

export const Draw: React.FC<DrawProps> = () => {
  return (
    <Container>
      <Guy />
      <Tree />
    </Container>
  );
};
