import styled from "styled-components";

export const Container = styled.div`
  cursor: pointer;
  background-color: #fff;
  width: 60px;
  height: 35px;
  border-radius: 2rem;
  position: relative;
`;

export const Switch = styled.div`
  background-color: blue;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  position: absolute;
  top: 50%;
  transition: all ease 0.3s;
  transform: translateY(-50%);
`;
