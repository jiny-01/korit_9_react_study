import React from "react";
import JSXStudy from "./JSXStudy";

function App01() {
  const currentComponent = 1;
  const componentObj = {
    1: <JSXStudy />,
  };
  return componentObj[currentComponent];    //currentComponent : 키 값 / [1]로 해도됨
}

export default App01;
