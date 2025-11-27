import { createRoot } from "react-dom/client";
import Hello from "./Hello";
import { Fragment } from "react";
import App01 from "./ch01/App01";

const currentApp = "ch01_2";

const appObj = {
  ch01: <App01 />, //컴포넌트 렌더링
  ch01_1: <h1>ch01_1 렌더링</h1>,
  // ch01_2: BoxComponent(),     //이건 그냥 함수호출
  ch01_3: <BoxComponent />,
  ch01_4: <BoxComponent></BoxComponent>,
  // "ch02": <App02 />,
};

const root = document.getElementById("root"); //id 가 root 인 요소 dom 으로 가져옴 -> root 객체 생성
createRoot(root).render(appObj[currentApp]);

function BoxComponent() {
  return (
    <div>
      <TitleComponent title="타이틀" title2="타이틀2"/>
    </div>
    // return <div>{TitleComponent()}</div>
    // return <div><TitleComponent title="타이틀" title2="타이틀2" /></div>
    // return <div>{TitleComponent({title: "타이틀", title2: "타이틀2"})}</div> //-> 그냥 함수호출?
  );
}

// function TitleComponent(a) {
//   console.log(a)
//   return <h1></h1>;
// }

function TitleComponent({title, title2}) {
  console.log(title);
  console.log(title);
  return <h1>{title}</h1>

}
// createRoot(root).render(<Hello />);            //컴포넌트 렌더링
// createRoot(root).render(<div>안녕하세요.</div>);
// createRoot(root).render(
//   <div>
//     <div>
//       <Hello />
//       <Hello />
//     </div>
//     <div>
//       <Hello />
//       <Hello />
//     </div>
//   </div>
// ); //어떻게든 컴포넌트는 감싸져야함
