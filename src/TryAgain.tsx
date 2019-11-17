import React from "react";
import { Header, Content, Option, Logo } from "./styles";
interface IProps {
  name: string;
  onCompleted: () => void;
}
const TryAgain = ({ name, onCompleted }: IProps) => {
  return (
    <Content>
      <Logo src="/images/logo.svg" />
      <Header>Sorry, {name}!</Header>
      <p>You didn't pass the CFA exam.</p>
      <Option onClick={onCompleted}>TRY AGAIN!</Option>
    </Content>
  );
};

export default TryAgain;
