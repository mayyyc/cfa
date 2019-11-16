import React, { useState } from "react";
interface IProps {
  onCompleted: () => void;
}
const Dog: React.FC<IProps> = ({ onCompleted }) => {
  return (
    <div>
      <img src="/images/dog.png" />
      <label>What would you prepare for this guy during a fire?</label>
      <button>Food and water</button>
      <button>Toy and treats to help reduce stress</button>
      <button>Bed to relax on</button>
      <button onClick={onCompleted}>All of above</button>
    </div>
  );
};
export default Dog;
