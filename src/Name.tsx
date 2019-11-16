import React, { useState } from "react";
interface IProps {
  onCompleted: (name: string) => void;
}
const Name: React.FC<IProps> = ({ onCompleted }) => {
  const [name, setName] = useState();
  return (
    <div>
      <label>What's your name</label>
      <input
        type="text"
        value={name}
        onChange={e => e && setName(e.target.value)}
      />
      <button onClick={() => onCompleted(name)}>Okay</button>
    </div>
  );
};
export default Name;
