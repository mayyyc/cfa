import React, { useState } from "react";
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
    <div>
      <label>
        Why is it recomended that you fill your bathtub and sinks with water
        when there's fire?
      </label>
      <button onClick={handleFalseAnswer}>To sit in and chill</button>
      <button onClick={handleFalseAnswer}>
        To drink when dehydrated from the heat
      </button>
      <button onClick={onCompleted}>
        To put out small spot fires aound the home
      </button>
    </div>
  );
};
export default Bathtub;
