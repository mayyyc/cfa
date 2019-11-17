import React, { useState } from "react";
import { Question, Content, Option, Error } from "./styles";
interface IProps {
  onCompleted: () => void;
}
const Fire: React.FC<IProps> = ({ onCompleted }) => {
  const [why, setWhy] = useState(false);
  const [serious, setSerious] = useState(false);
  return (
    <Content>
      <Question>Who would you set on fire?</Question>
      {serious && <Error>Are you serious?!</Error>}
      {why && <Error>Why would you do that?!</Error>}
      <Option onClick={() => setSerious(true)}>A. Pro china trolls</Option>
      <Option onClick={() => setWhy(true)}>B. Hong Kong protestors</Option>
      <Option onClick={onCompleted}>C. No one</Option>
    </Content>
  );
};
export default Fire;
