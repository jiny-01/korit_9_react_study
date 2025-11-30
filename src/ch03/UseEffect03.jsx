import { useEffect, useState } from "react";

function UseEffect03() {
  // 1. 컴포넌트 함수가 호출될 때마다 실행 (렌더링 시작)
  console.log(
    "------------------- 1. [렌더링 시작] Component 함수 호출됨 -------------------"
  );
  console.log("Component 함수 호출됨");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);
  const [refresh, setRefresh] = useState(false); //첫 마운트 시 실행안하고싶다면
  //외부 API 무한으로 날리는 것 방지가능?

  

  useEffect(() => {
    if (refresh) {
      console.log("마운트");
    }
  });

  useEffect(() => {
    console.log("마운트");
  });

  //useEffect - 순차적으로 상태의 변화를 줄 때, 의존관계
  //useEffect: 컴포넌트가 마운트되거나
  //특정 상태가 변경될 때 코드 실행할 수 있게,
  //상태를 감지해서 장착이 될 때 정의한 함수를 실행할지 말지 결정해줌
  // useEffect(() => {}, [])
  //useEffect(() => {실행될 함수}, [의존관계인 변수(상태변수)])
  //1. 최초 렌더링 시 무조건 안에 함수 1번 실행
  //2. 상태변화 값이 [] 빈 배열이면 최초 마운트 시 한 번만 실행
  //3. [] 조차 없으면 undefined -> 무조건 실행
  useEffect(() => {
    console.log("마운트");
    console.log("num 변화");
    setResult(num1 + num2);
  }, [num1, num2]);

  //   setResult(num1 + num2);

  const handleNum1OnClick = () => {
    setNum1(num1 + 1);
    //리액트한테 요청을 보내니까 리액트는 페이지를 다시 그려준다
    //-> useEffect03 콜백함 -> 처음부터 코드를 읽는다 -> 페인팅
    // set 함수는 즉시 반영되지 X => 렌더링 후에 반영

    //각각 set 으로 상태바꿔놓고 바뀐 거 있으면 재호출일어남
    //const num1, num2 로 바뀐 상태값 다시 들고옴
    //2개 요청을 모아서 state 업데이트 -> 렌더 1번만 실행
  };

  const handleNum2OnClick = () => {
    setNum2(num2 + 1);
  };

  console.log("JSX 리턴 직전");

  // return 안에 있는 내용 - JSX
  // React 가 이해할 수 있는 가상 DOM 설계도 - 렌더링 함수가 실행되는 동안 만들어지는 객체
  return (
    <>
      <button onClick={handleNum1OnClick}>num1 = {num1}</button>
      <button onClick={handleNum2OnClick}>num2 = {num2}</button>
      <h2>
        {num1} + {num2} = {result}
      </h2>
    </>
  );

  // setTimeout(() => {
  //     setNum1(num1 + 1);
  // }, num1 * 1000);
  // return <>
  // <h2>{num1}</h2></>
}

export default UseEffect03;

/**
//리액트는 일괄 처리
//상태 업데이트 요청이 들어오면 모아서 한번에 처리
//만약 set 함수를 즉시 실행한다면 작은 변화에도 컴포넌트를 다시 렌더링하기 때문에 느려진다.
//set 함수는 이 함수들이 끝난 다음 실행되기 때문에 출력한다고 바로 나오지 않음
// ->  바로 쓰기 위해서 useEffect

//useEffect(콜백함수,상태ㅐ 의존성 배열)
//이때, 콜백함수 - 마운트 시 실행되는 함수
*/

/**
 * 컴포넌트가 실행될 때마다 콘솔 출력과 useEffect 실행 시점을 구분하여 설명

A. 최초 렌더링

console.log("Component 함수 호출됨") 실행.
useState 실행: num1=0, num2=0, result=0.
console.log("JSX 리턴 직전") 실행.
JSX 반환: 화면에 0 + 0 = 0이 표시.
useEffect 실행: 최초 마운트 시 한 번 실행. 
setResult(0 + 0)이 실행되어 result는 0으로 유지.

B. num1 버튼 클릭 (예: 0 $\rightarrow$ 1)

handleNum1OnClick 실행: setNum1(1) 호출. (React에게 상태 업데이트 요청)
재렌더링 요청: React는 요청을 받아 UseEffect03 함수를 다시 호출.

재렌더링 과정 (함수 재실행)

console.log("Component 함수 호출됨") 실행.
useState 실행: num1이 React 저장소에서 최신 값 1을 가져옴. (num2는 0)
console.log("JSX 리턴 직전") 실행.
JSX 반환: 화면에 1 + 0 = 0 (result는 아직 이전 값)이 잠시 표시되도록 업데이트.

useEffect 실행 (최신 값으로 계산)

useEffect 실행: num1이 변경되었으므로 콜백 함수가 실행.
setResult(1 + 0) 호출. result를 1로 업데이트하도록 요청.
두 번째 재렌더링: result 상태가 변경되었으므로 컴포넌트가 다시 한번 재렌더링.

두 번째 재렌더링 과정

console.log("Component 함수 호출됨") 실행.
useState 실행: num1=1, num2=0, result가 최신 값 1을 가져옴.
console.log("JSX 리턴 직전") 실행.
최종 JSX 반환: 화면에 1 + 0 = 1이 표시.
 * 
 */

//버튼 클릭 시 setState 호출 → React가 재렌더링 예약
//재렌더링 시 컴포넌트 함수 재실행 → JSX 새로 생성
//commit 단계 → 화면이 최신 JSX 값으로 업데이트
