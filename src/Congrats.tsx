import React from "react";
interface IProps {
  name: string;
}
const Congrats = ({ name }: IProps) => {
  return (
    <div>
      <img src="/images/logo_with_fire.svg" />
      <div>Congrats, {name}!</div>
      <div>You have successfully passed the CFA exam.</div>
      <div>Now go set the world on fire!</div>
    </div>
  );
};

export default Congrats;
