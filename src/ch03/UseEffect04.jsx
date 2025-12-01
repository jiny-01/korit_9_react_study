import { useEffect, useState } from "react";

function UseEffect04() {
  // num 상태
  // num 상태의 제곱 값을 화면에 출력하시오.
  // 단, 처음 num 이 0일 때에는
  // '숫자를 증가시켜 결과를 확인하세요.'
  // 라는 안내 메세지를 alert 으로 출력하기
  // 최소값 0 밑으로는 내려갈 수 없음.

  const [num, setNum] = useState(0);
  const [min, setMin] = useState(0);

  console.log("컴포넌트 실행됨");

  useEffect(() => {
    if (num === 0) {
      alert("숫자를 증가시켜 결과를 확인하세요.");
    }
  }, [num]);

  //   useEffect(() => {
  //     console.log("숫자를 증가시켜 결과를 확인하세요.");
  //   }, [num]);

  const handleUpOnClick = (e) => {
    console.log("버튼 클릭됨");

    setNum((prev) => prev + 1);
  };

  const handleDownOnClick = () => {
  setNum((prev) => {
    if (prev === 0) {
      alert("최소값 0 밑으로는 내려갈 수 없음.");
      return 0;      
    }
    return prev - 1; 
  });
};

  return (
    <>
      <h2>{num}</h2>
      <h3>제곱값 : {num * num}</h3>
      <button onClick={handleUpOnClick}>1증가</button>
      <button onClick={handleDownOnClick}>1감소</button>
    </>
  );
}

export default UseEffect04;
