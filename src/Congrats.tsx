import React from "react";
import { Header, Content } from "./styles";
import styled, { keyframes } from "styled-components";
const heartBeatEffect = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;
export const Logo = styled.img`
  width: 200px;
  animation: ${heartBeatEffect} 2s ease-in-out infinite;
`;

interface IProps {
  name: string;
}
const Congrats = ({ name }: IProps) => {
  return (
    <Content>
      <Logo src="/images/logo_with_fire.svg" />
      <Header>Congrats, {name}!</Header>
      <p>
        You have successfully passed the CFA exam. Now go set the world on fire!
        <br />
        🔥🔥🔥
      </p>
    </Content>
  );
};

export default Congrats;
