import React, { useState } from "react";
import { Question, Content, Error } from "./styles";
import styled from "styled-components";
const TextField = styled.input`
  border: 2px solid #00c8ff;
  font-size: 16px;
  padding: 8px;
  font-weight: 700;
  text-align: center;
`;
const Okay = styled.button`
  display: block;
  border: none;
  background-color: #00c8ff;
  text-transform: uppercase;
  padding: 8px 16px;
  color: #fafafa;
  font-size: 16px;
  font-weight: 500;
`;
interface IProps {
  onCompleted: (name: string) => void;
}
const Name: React.FC<IProps> = ({ onCompleted }) => {
  const [name, setName] = useState();
  const [error, setError] = useState(false);
  const handleChange = e => {
    if (e) {
      if (error) setError(false);
      setName(e.target.value);
    }
  };
  const handleSubmit = () => {
    if (!name) return setError(true);
    onCompleted(name);
  };
  return (
    <Content>
      <Question>What's your name?</Question>
      {error && <Error>Please fill your name...</Error>}
      <TextField type="text" value={name} onChange={handleChange} />
      <Okay onClick={handleSubmit}>Okay</Okay>
    </Content>
  );
};
export default Name;
