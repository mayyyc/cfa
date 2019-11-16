import React, { useState } from "react";
interface IProps {
  onCompleted: () => void;
}
const Fire: React.FC<IProps> = ({ onCompleted }) => {
  return (
    <div>
      <label>Who would you set on fire?</label>
      <button>Pro china trolls</button>
      <button>Hong Kong protestors</button>
      <button onClick={onCompleted}>No one</button>
    </div>
  );
};
export default Fire;
