import React, { useState } from "react";
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
    <div>
      <label>What would you wear when defending your property?</label>
      <button onClick={handleFalseAnswer}>
        <img src="/images/clothing_light.jpg" />
      </button>
      <button onClick={onCompleted}>
        <img src="/images/clothing_protective.png" />
      </button>
    </div>
  );
};
export default Clothing;
