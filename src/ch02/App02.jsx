import React, { useState } from "react";
import "./style.css";

function App02() {
  // console.log("메인 박스");
  const [name, setName] = useState("기본 이름"); //input 의 value 값이 변하면 변할 상태
  const [addName, setAddName] = useState(""); // 확인 버튼이 눌러지면 변할 상태

  const [age, setAge] = useState(0);
  const [addAge, setAddAge] = useState(0);

  const [email, setEmail] = useState("");
  const [addEmail, setAddEmail] = useState("");

  const data = {
    title: "리액트 기초 시작",
    nameValue: "기본 이름",
    age: "0",
  };

  //onChange 핸들러 - NameInput 이 바뀜 handle타겟OnChange 이런 식으로 변수명
  const handleNameInputOnChange = (event) => {
    console.log(event); //target: input -> input 요소 객체
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleAgeInputOnChange = (event) => {
    // console.log(event);
    const age = event.target.value;
    console.log(age); //입력한 age
    setAge(age);
  };

  const handleEmailInputOnChange = (event) => {
    const email = event.target.value;
    setEmail(email);
  };

  const handleOkOnCliCK = () => {
    console.log("클릭");
  };

  //onClick 핸들러 - target : button
  const handleButtonOnClick = () => {
    console.log("버튼 클릭됨");
    // console.log(e);/
    setAddName(name);
    setAddAge(age);
    setAddEmail(email);
  };

  const handleResetOnCliCk = () => {
    // console.log(e);
    setName("기본 이름");
    setAddName("");
    setAge(0);
    setAddAge("");
    setEmail("");
    setAddEmail("이메일");
  };

  return (
    <div className="main-box">
      <div className="title-box">
        <h1>제목: {data.title}</h1>
      </div>
      <div className="input-box">
        <input type="text" value={name} onChange={handleNameInputOnChange} />
        {/* value 있으면 input 창 입력 막힘 -> defaultValue 쓸 것 */}
        <input type="text" value={age} onChange={handleAgeInputOnChange} />
        <input
          type="text"
          value={email}
          onChange={handleEmailInputOnChange}
        />
      </div>
      <div className="button-box">
        <button onClick={handleButtonOnClick}>확인</button>
        <button onClick={handleResetOnCliCk}>초기화</button>
      </div>
      <div className="display-box">
        <ul>
          <li>이름: {addName}</li>
          <li>나이: {addAge}</li>
          <li>이메일: {addEmail}</li>
        </ul>
      </div>
    </div>
  );
}

export default App02;
