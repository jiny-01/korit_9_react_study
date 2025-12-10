import { useEffect, useState } from "react";

function UseEffect04_2() {
  const [num, setNum] = useState(0);
  const [square, setSquare] = useState(0);
  const [isZero, setIsZero] = useState(true);

  console.log("컴포넌트 실행됨");

  //마운트될 때 동작하는 것이 useEffect
  useEffect(() => {
    setSquare(num ** 2);
  }, [num]);

  //square 가 바뀌었을 때 setZero 로
  useEffect(() => {
    setIsZero(square === 0);
  }, [square]);

  useEffect(() => {
    if (isZero) {
      setTimeout(() => {      //alert 띄울 때 약간의 딜레이 0.1초라도 줌
        alert("숫자를 증가시켜 결과를 확인하세요.");
      }, 100);
    }
  });

  const handleUpOnClick = (e) => {
    console.log("버튼 클릭됨");
    setNum((prev) => prev + 1);
  };

  const handleOnClick = (value) => {
    if (value < 0 && num < 1) {
      //0이면서 -1감소 눌렀을 때
      return; //밑에 실행안되게 막음 - 감소 안시킴
    }
    setNum(num + value);
  };

  //useEffect 안쓰면 바로 setSquare 하면 됨
  //   const handleOnClick = (value) => {
  //     if (value < 0 && num < 1) {
  //       //0이면서 -1감소 눌렀을 때
  //       return; //밑에 실행안되게 막음 - 감소 안시킴
  //     }
  //     setNum(num + value);
  //     setSquare((num + value) ** 2);
  //   };

  return (
    <>
      <h2>{num}</h2>
      <h3>제곱값 : {square}</h3>
      <button onClick={() => handleOnClick(1)}>1증가</button>
      <button onClick={() => handleOnClick(-1)}>1감소</button>
    </>
  );
}

export default UseEffect04_2;


