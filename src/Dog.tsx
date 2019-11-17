import React, { useState } from "react";
import { Question, Content, Option } from "./styles";
import styled, { keyframes } from "styled-components";
const CalmDog = styled.img`
  height: 100px;
  display: block;
`;
const tremblingEffect = keyframes`
  0% {
    transform: rotate(-5deg) skewX(5deg);
  }
  50% {
    transform: rotate(-10deg) skewX(-5deg);
  }
  100% {
    transform: rotate(-5deg)  skewX(5deg);
  }
`;
const EnragedDog = styled.img`
  height: 100px;
  display: block;
  animation: ${tremblingEffect} 0.1s infinite;
`;

interface IProps {
  onCompleted: () => void;
}
const Dog: React.FC<IProps> = ({ onCompleted }) => {
  const [error, setError] = useState(false);
  const handleWrongAnswer = () => {
    setError(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };
  return (
    <Content>
      {error ? (
        <EnragedDog src="/images/dog_enraged.png" />
      ) : (
        <CalmDog src="/images/dog.png" />
      )}
      <Question>What would you prepare for this guy during a fire?</Question>
      <Option onClick={handleWrongAnswer}>A. Food and water</Option>
      <Option onClick={handleWrongAnswer}>
        B. Toy and treats to reduce stress
      </Option>
      <Option onClick={handleWrongAnswer}>C. Bed to relax on</Option>
      <Option onClick={onCompleted}>D. All of above</Option>
    </Content>
  );
};
export default Dog;
