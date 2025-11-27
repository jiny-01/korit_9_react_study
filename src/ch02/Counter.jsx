import { useState } from "react";

function Counter() {
  let num = 0;
  let [number, setNumber] = useState(0);   
  //use___ : 훅 함수
  //대문자 : 일반함수
  //on___ : 이벤트 핸들러 함수
    
  console.log(number);
  //이거랑 같음
  //   let numberState = useState(0);
  //   let number = numberState[0];
  //   let setNumber = numberState[1];

  //useState 의 리턴: 배열
  //(initialState: number | (() => number)): [number, Dispatch<SetStateAction<number>>]
  //number 거나 리턴값이 number 인 함수여야함
  //매개변수: 리턴자료형

  //   console.log(numState);

  const increase = () => {
    num += 1;
    console.log(num);
  };

  const decrease = () => {
    num -= 1;
    console.log(num);
  };

  const increaseNumber = () => {
    setNumber(number + 1);
  };

  const decreaseNumber = () => {
    setNumber(number - 1);
  };

  console.log("카운터 화면 렌더링"); //1번 실행될 것

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>

      <h1>{num}</h1>
      <button onClick={increaseNumber}>+1</button>
      <button onClick={decreaseNumber}>-1</button>
    </div>
  );
}

export default Counter;

//main 에서 render 를 한 번 해줬기 때문에 리턴이 다시 된 것이 아님
