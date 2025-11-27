import { useState } from "react";

function App02_2() {
  //상태는 무조건 최상단
  //input 에 입력한 값
  const [name, setName] = useState(""); //
  const [age, setAge] = useState("");
  //버튼 눌렀을 때 띄울 값
  const [displayName, setDisplayName] = useState("");
  const [displayAge, setDisplayAge] = useState("");

  //inputBox - 입력받음
  //ButtonBox - 확인 버튼 눌렀을 때 state 업데이트
  //DisplayBox - 부모(App02_2)로부터 받은 displayName, displayAge => 표시만
  //props 로 전달받음
  return (
    <div>
      <InputBox name={name} setName={setName} age={age} setAge={setAge} />
      <ButtonBox
        setDisplayName={setDisplayName}
        setDisplayAge={setDisplayAge}
        name={name}
        age={age}
      />
      <DisplayBox displayName={displayName} displayAge={displayAge} />
    </div>
  );
}

export default App02_2;

//InputBox
//setName(), setAge()로 입력값 변경해줌 - input 창에 입력한 값으로
function InputBox({ name, setName, age, setAge }) {
  const handleNameInputOnChange = (e) => {
    console.log(e.target.value);
    setName(e.target.value);
  };

  const handleAgeInputOnChange = (e) => {
    console.log(e.target.value);
    setAge(e.target.value);
  };

  return (
    <div className="input-box">
      <input type="text" value={name} onChange={handleNameInputOnChange} />
      <input type="text" value={age} onChange={handleAgeInputOnChange} />
    </div>
  );
}

//ButtonBox 
//버튼 클릭하면 setDisplayName(name), setDisplayAge(age)  
function ButtonBox({ setDisplayName, setDisplayAge, name, age }) {
  const handleOnCliCk = () => {
    setDisplayName(name);
    setDisplayAge(age);
  };

  return (
    <div className="button-box">
      <button onClick={handleOnCliCk}>확인</button>
    </div>
  );
}

//부모(App02_2)가 전달해준 displayName, displayAge 를 받아옴
//입력값(name, age)을 출력값(displayName, displayAge)으로 업데이트 해줌
function DisplayBox({ displayName, displayAge }) {
  return (
    <div className="display-box">
      <ul>
        <li>{displayName}</li>
        <li>{displayAge}</li>
      </ul>
    </div>
  );
}

//구조분해 안쓰고 props 로
// function DisplayBox(props) {
//     return (
//     <div className="display-box">
//       <ul>
//         <li>{props.displayName}</li>
//         <li>{props.displayAge}</li>
//       </ul>
//     </div>
//   );
// }
