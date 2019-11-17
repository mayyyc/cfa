import React from "react";
import { Question, Content, Option } from "./styles";
interface IProps {
  onFalseAnswer: () => void;
  onCompleted: () => void;
}
const Bathtub: React.FC<IProps> = ({ onCompleted, onFalseAnswer }) => {
  const handleFalseAnswer = () => {
    onFalseAnswer();
    onCompleted();
  };
  return (
    <Content>
      <Question>
        Why is it recomended that you fill your bathtub and sinks with water
        during fire?
      </Question>
      <Option onClick={handleFalseAnswer}>A. To sit in and chill</Option>
      <Option onClick={handleFalseAnswer}>
        B. To drink when dehydrated from the heat
      </Option>
      <Option onClick={onCompleted}>
        C. To put out small spot fires aound the home
      </Option>
    </Content>
  );
};
export default Bathtub;
