function UseEffect03_re() {
  // 1. 컴포넌트 함수가 호출될 때마다 실행 (렌더링의 시작)
  console.log(
    "------------------- 1. [렌더링 시작] Component 함수 호출됨 -------------------"
  );

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  // 의존성 배열 없음: 매 렌더링 후 실행
  useEffect(() => {
    console.log("3. [useEffect (의존성 없음)] - 매 렌더링 후 실행");
  });

  // 의존성 배열 []: 최초 마운트 시 한 번만 실행
  useEffect(() => {
    console.log("3. [useEffect (최초 마운트)] - 최초 마운트 시 한 번만 실행");
  }, []);

  // 의존성 배열 [num1, num2]: 최초 마운트 시 + num1 또는 num2 변경 시 실행
  useEffect(() => {
    console.log(
      `3. [useEffect (num1, num2)] - num1: ${num1}, num2: ${num2} 변경 감지.`
    );

    // 이 시점에서 DOM 업데이트(화면 그리기)는 완료됨.
    const newResult = num1 + num2;
    console.log(
      `3. [useEffect 내부] - 결과값 ${num1} + ${num2} = ${newResult} 계산 완료.`
    );

    // 상태를 변경하여 '두 번째' 재렌더링을 예약함.
    setResult(newResult);
    console.log(
      "3. [setState 예약] - setResult 예약됨 (다음 렌더링에 result 업데이트 예정)"
    );
  }, [num1, num2]);

  const handleNum1OnClick = () => {
    // 2. setState 호출: 상태를 업데이트하고 재렌더링을 React에게 예약 요청
    setNum1(num1 + 1);
    console.log(`2. [setState 예약] - setNum1(${num1 + 1}) 예약됨`);
    // set 함수는 즉시 상태를 바꾸지 않으며, 이 함수가 끝난 후 재렌더링이 일어납니다.
  };

  const handleNum2OnClick = () => {
    setNum2(num2 + 1);
    console.log(`2. [setState 예약] - setNum2(${num2 + 1}) 예약됨`);
  };

  // 1. 컴포넌트 함수가 반환하는 값 (가상 DOM 설계도)
  console.log(
    `1. [JSX 리턴 직전] - 현재 상태 num1: ${num1}, num2: ${num2}, result: ${result}`
  );
  //return 문이 JSX 객체 반환 => 가상 DOM
  // return 이후 '2. DOM 업데이트' 단계로 넘어감 (화면 그리기)
  return (
    <>
      <button onClick={handleNum1OnClick}>num1 = {num1}</button>
      <button onClick={handleNum2OnClick}>num2 = {num2}</button>
      <h2>
        {/* 이 내용이 화면에 그려짐 */}
        {num1} + {num2} = {result}
      </h2>
    </>
  );
}

export default UseEffect03_re;

/**
 * ------------------- 1. [렌더링 시작] Component 함수 호출됨 -------------------
1. [JSX 리턴 직전] - 현재 상태 num1: 0, num2: 0, result: 0
//  return 문이 반환한 JSX 객체 => (DOM 업데이트: 화면에 "0 + 0 = 0" 표시)
// 3. [useEffect (최초 마운트)] - 최초 마운트 시 한 번만 실행
// 3. [useEffect (의존성 없음)] - 매 렌더링 후 실행
3. [useEffect (num1, num2)] - num1: 0, num2: 0 변경 감지.
3. [useEffect 내부] - 결과값 0 + 0 = 0 계산 완료.
3. [setState 예약] - setResult 예약됨 (다음 렌더링에 result 업데이트 예정)
 */

/**
 * Num1 버튼 클릭 (0 ->1) : handleNum1OnClick 실행 후, 두 번의 재렌더링이 발생
 * 첫 번째 재렌더링 (Num1 업데이트)
 * 2. [setState 예약] - setNum1(1) 예약됨
------------------- 1. [렌더링 시작] Component 함수 호출됨 -------------------
1. [JSX 리턴 직전] - 현재 상태 num1: 1, num2: 0, result: 0
//  return -> (DOM 업데이트: 화면에 "1 + 0 = 0" 표시)

3. [useEffect (의존성 없음)] - 매 렌더링 후 실행
3. [useEffect (num1, num2)] - num1: 1, num2: 0 변경 감지.
3. [useEffect 내부] - 결과값 1 + 0 = 1 계산 완료.
3. [setState 예약] - setResult 예약됨 (다음 렌더링에 result 업데이트 예정)
 */

/**
 * 두 번째 재렌더링 (Result 업데이트)
 * ------------------- 1. [렌더링 시작] Component 함수 호출됨 -------------------
1. [JSX 리턴 직전] - 현재 상태 num1: 1, num2: 0, result: 1
//  (DOM 업데이트: 화면에 "1 + 0 = 1" 표시)

3. [useEffect (의존성 없음)] - 매 렌더링 후 실행
3. [useEffect (num1, num2)] - num1: 1, num2: 0 변경 감지.
3. [useEffect 내부] - 결과값 1 + 0 = 1 계산 완료.
3. [setState 예약] - setResult 예약됨 (다음 렌더링에 result 업데이트 예정)
 * 
 */
