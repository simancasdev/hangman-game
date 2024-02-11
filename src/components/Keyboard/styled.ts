import styled from "styled-components";

export const Key = styled.button`
  width: 40px;
  color: #fff;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.5rem;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  transition: all ease 0.2s;
  text-transform: capitalize;
  border: 2px solid rgba(255, 255, 255, 0.5);
  box-shadow: -1px 2px 1px 1px rgba(255, 255, 255, 0.2);
  &:hover {
    transform: translateY(-5px);
    box-shadow: -2px 3px 1px 1px rgba(255, 255, 255, 0.4);
  }
  &:active {
    color: #000;
    transform: scale(0.8);
    background-color: #fff;
  }
  @media (min-width: 500px) {
    width: 55px;
    height: 55px;
    font-size: 2.2rem;
  }
`;

export const Container = styled.div`
  gap: 1rem;
  padding: 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 520px;
  justify-content: center;
`;
