import { useState } from "react";

function Inputs() {
  const [ fullName, setFullName ] = useState("");
  const [ age, setAge ] = useState("");

  const handleNameOnChange = (e) => {
    console.log(e.target.value);
    setFullName(e.target.value);
  };

  const handleAgeOnChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  return (
    <>
      <input type="text" placeholder="이름" value={fullName} onChange={handleNameOnChange} />
      <input type="text" placeholder="나이" value={age} onChange={handleAgeOnChange}/>
      <h2>이름: { fullName } </h2>
      <h2>나이: { age } </h2>
    </>
  );
}

/**
 * 최종 목표 : return 으로 출력하는 것
 * return 에 뭐가 출력되어야하는지부터 적어줌 {name}
 * 키보드에 입력이 되었을 때 상태값이 바뀜 -> onChange
 * 입력될때마다 이름: {fullName} 으로 보여주려면 상태변수로 써야함
 * input 의 값을 저장하기 위한 상태이면서
 * 동시에 출력을 위한 상태
 * 
 * -> 입/출력 각각 상태를 나눠야함
 * 입력: inputValue / 출력: displayValue 처럼 나눔
 * 
 */

export default Inputs;
