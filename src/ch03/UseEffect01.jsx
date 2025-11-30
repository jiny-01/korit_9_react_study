import { useState } from "react";

function UseEffect01() {
  const [num1, setNum1] = useState(0);  
  /**
   * const num1 = useState(0)[0]  //여기서 이미 num1 = 0으로 초기화, const 이므로 재할당 불가
   * setNum1(num1 + 1);  //num1 = 0
   * setResult(num1 + num2)  //여기서 num1 도 const num1 의 값인 0
   * 
   */


  
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  console.log(num1);
  console.log(num2);

  const handleNum1OnClick = () => {
    // num1 += 1;
    setNum1(num1 + 1);       //num1 + 1 = 1 -> 업데이트 예약 (아직 반영 X)

    setResult(num1 + num2);  // num1은 여전히 0, num2는 0 → result = 0+0 = 0
  };

  const handleNum2OnClick = () => {
    setNum2(num2 + 1);
  };

  //   setResult(num1 + num2);
  return (
    <>
      <button onClick={handleNum1OnClick}>num1 = {num1}</button>
      <button onClick={handleNum2OnClick}>num2 = {num2}</button>
      <h1>
        {num1} + {num2} = {result}
      </h1>
    </>
  );
}

export default UseEffect01;
