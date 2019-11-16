import React from "react";
interface IProps {
  name: string;
  onCompleted: () => void;
}
const TryAgain = ({ name, onCompleted }: IProps) => {
  return (
    <div>
      <img src="/images/logo_with_fire.svg" />
      <div>Sorry, {name}!</div>
      <div>You didn't pass the CFA exam.</div>
      <button onClick={onCompleted}>Try Again!</button>
    </div>
  );
};

export default TryAgain;
