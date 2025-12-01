import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";
import App02_3 from "./ch02/App02_3";
import App02_4 from "./ch02/App02_4";
import Inputs from "./ch02/Inputs";
import SearchName from "./ch02/SearchName";
import UseEffect01 from "./ch03/UseEffect01";
import UseEffect03 from "./ch03/UseEffect03";
import InputSample from "./ch02/InputSample";
import UseEffect04 from "./ch03/UseEffect04";
import Axios01 from "./ch04/Axios01";
import Promise01 from "./ch04/Promise01";
import Axios02 from "./ch04/Axios02";

const currentApp = "axios02";

const appObj = {
  // ch01: <App01 />, //컴포넌트 렌더링
  // ch02: <App02 />,
  // ch02_2: <App02_2 />,
  // ch02_3: <App02_3 />,
  // counter: <Counter />,
  // test: <구조분해 />,
  // ch02_4: <App02_4 />,
  // inputs: <Inputs />,
  // searchName: <SearchName />,
  // useEffect01: <UseEffect01 />,
  // useEffect03: <UseEffect03 />,
  // input: <InputSample />,
  // useEffect04: <UseEffect04 />,
  axios01: <Axios01 />,
  // promise01: <Promise01 />,
  // axios02: <Axios02 />,
};

// createRoot(document.getElementById("root")).render(appObj.ch02_3);
// createRoot(document.getElementById("root")).render(appObj.counter);/
// createRoot(document.getElementById("root")).render(appObj.test);
// createRoot(document.getElementById("root")).render(appObj.ch02_4);
// createRoot(document.getElementById("root")).render(appObj.useEffect03);
// createRoot(document.getElementById("root")).render(appObj.input);
// createRoot(document.getElementById("root")).render(appObj.useEffect04);
createRoot(document.getElementById("root")).render(appObj.axios01);
