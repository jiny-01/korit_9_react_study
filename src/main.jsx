import { createRoot } from "react-dom/client";
import App01 from "./ch01/App01";
import App02 from "./ch02/App02";
import Counter from "./ch02/Counter";
import App02_2 from "./ch02/App02_2";
import App02_3 from "./ch02/App02_3";

const currentApp = "ch02_3";

const appObj = {
  ch01: <App01 />, //컴포넌트 렌더링
  ch02: <App02 />,
  ch02_2: <App02_2 />,
  ch02_3: <App02_3 />,
  counter: <Counter />,
  test: <구조분해 />,
};

// createRoot(document.getElementById("root")).render(appObj.ch02_3);
// createRoot(document.getElementById("root")).render(appObj.counter);/
createRoot(document.getElementById("root")).render(appObj.test);
