import React from "react";
import styled from "styled-components";
import { Header, Logo } from "./styles";

const Caption = styled.div`
  font-size: 10px;
  font-weight: 300;
`;
const Start = styled.button`
  color: #00c8ff;
  border: 3px solid #00c8ff;
  font-size: 24px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px 16px;
  background-color: transparent;
  transition: all 0.25s;
  &:hover,
  &:focus {
    background-color: #efefef;
    position: relative;
    bottom: -4px;
    left: -4px;
  }
`;
const StartContainer = styled.div`
  display: inline-block;
  position: relative;
  margin: 16px 0 32px;
`;
const Border = styled.div`
  position: absolute;
  width: 96%;
  height: 84%;
  border-left: 3px solid #00c8ff;
  border-bottom: 3px solid #00c8ff;
  bottom: -4px;
  left: -4px;
  z-index: -1;
`;
interface IProps {
  onCompleted: () => void;
}
const Home = ({ onCompleted }: IProps) => {
  return (
    <div className="App">
      <Logo src="/images/logo.svg" />
      <Header>CFA - Level I</Header>
      <Caption>A.K.A. Country Fire Authority</Caption>
      <StartContainer>
        <Start onClick={onCompleted}>Start Exam</Start>
        <Border />
      </StartContainer>
    </div>
  );
};
export default Home;
