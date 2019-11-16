import React, { useState } from "react";
import Name from "./Name";
import Bathtub from "./Bathtub";
import Dog from "./Dog";
import Fire from "./Fire";
import Clothing from "./Clothing";
import Congrats from "./Congrats";
import TryAgain from "./TryAgain";

const App: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [name, setName] = useState();
  const [failed, setFailed] = useState(false);
  const handleCompletedName = (name: string) => {
    setName(name);
    goToNextPage();
  };
  const goToNextPage = () => {
    setIndex(index + 1);
  };
  const goHome = () => {
    setIndex(0);
  };
  const handleFail = () => {
    setFailed(true);
  };
  switch (index) {
    case 6:
      return failed ? (
        <TryAgain name={name} onCompleted={goHome} />
      ) : (
        <Congrats name={name} />
      );
    case 5:
      return <Fire onCompleted={goToNextPage} />;
    case 4:
      return <Clothing onCompleted={goToNextPage} onFalseAnswer={handleFail} />;
    case 3:
      return <Dog onCompleted={goToNextPage} />;
    case 2:
      return <Bathtub onCompleted={goToNextPage} onFalseAnswer={handleFail} />;
    case 1:
      return <Name onCompleted={handleCompletedName} />;
    case 0:
    default:
      return (
        <div className="App">
          <img src="/images/logo.svg" />
          <div>CFA - Level I</div>
          <div>A.K.A. Country Fire Authority</div>
          <button onClick={goToNextPage}>Start Exam</button>
        </div>
      );
  }
};

export default App;
