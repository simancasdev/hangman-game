import {Guy, Tree} from "./lib";
import styled from "styled-components";

interface DrawingProps {}

const Container = styled.div`
  display: flex;
  gap: 5rem;
  align-items: flex-end;
`;

export const Drawing: React.FC<DrawingProps> = () => {
  return (
    <Container>
      <Guy />
      <Tree />
    </Container>
  );
};
