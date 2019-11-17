import React from "react";
import { Question, Content } from "./styles";
import styled from "styled-components";
const ClothOption = styled.img`
  width: 140px;
  height: 210px;
  display: block;
  margin: 8px;
`;
const Options = styled.div`
  display: flex;
`;
interface IProps {
  onFalseAnswer: () => void;
  onCompleted: () => void;
}
const Clothing: React.FC<IProps> = ({ onCompleted, onFalseAnswer }) => {
  const handleFalseAnswer = () => {
    onFalseAnswer();
    onCompleted();
  };
  return (
    <Content>
      <Question>What would you wear when defending your property?</Question>
      <Options>
        <ClothOption onClick={onCompleted} src="/images/clothing_light.jpg" />
        <ClothOption
          onClick={handleFalseAnswer}
          src="/images/clothing_protective.png"
        />
      </Options>
    </Content>
  );
};
export default Clothing;
