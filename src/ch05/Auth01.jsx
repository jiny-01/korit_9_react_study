import axios from "axios";
import { useState } from "react";

function Auth01() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
  });

  const [inputMessage, setInputMessage] = useState({
    username: "",
    password: "",

    name: "",
    email: "",
  });

  const regexs = {
    //백엔드 signupReqDto 에 정의해둔 정규표현식
    username: {
      regex: /^[a-z0-9_-]{5,20}$/,
      message:
        "아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.",
    },
    password: {
      regex:
        /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z0-9^A-Za-z0-9\W]{8,16}$/,
      message:
        "비밀번호: 8~16자의 영문 대/소문자, 숫자, 특수문자를 사용해 주세요.",
    },
    name: {
      regex: /^[가-힣]{2,6}$/,
      message: "이름: 2~6자의 한글을 사용해주세요.",
    },
    email: {
      regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
      message: "이메일 형식을 사용해주세요.",
    },
  };

  // handleInputOnChange - 입력값 onChange
  const handleInputOnChange = (e) => {
    //input 값 바꾸기
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });

    // 정규표현식 검사 후 메시지 출력
    if (regexs[e.target.name].regex.test(e.target.value)) {
      setInputMessage({
        ...inputMessage,
        [e.target.name]: "", //기존 내용 비움
      });
    } else {
      setInputMessage({
        ...inputMessage,
        [e.target.name]: regexs[e.target.name].message,
      });
    }
  };

  const handleSignupOnClick = () => {
    if (
      Object.values(inputMessage)
        .map((message) => !!message)
        .includes(true)
    ) {
      alert("입력하신 가입정보를 다시 확인하세요.");
      return;
    }
    signupRequest();
  };

  const signupRequest = async () => {
    try {
      // input 에 입력한 값들 post 로 signup 요청 보냄 - 백엔드로
      const response = await axios.post(
        "http://localhost:8080/api/auth/signup",
        inputValue
      );
      console.log(response);
      console.log("회원가입완료");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            placeholder="사용자이름"
            name="username"
            value={inputValue.username}
            onChange={handleInputOnChange}
          />
          <span>{inputMessage.username}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="비밀번호"
            name="password"
            value={inputValue.password}
            onChange={handleInputOnChange}
          />
          <span>{inputMessage.password}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="이름"
            name="name"
            value={inputValue.name}
            onChange={handleInputOnChange}
          />
          <span>{inputMessage.name}</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="이메일"
            name="email"
            value={inputValue.email}
            onChange={handleInputOnChange}
          />
          <span>{inputMessage.email}</span>
        </div>

        <button onClick={handleSignupOnClick}>가입하기</button>
      </div>
    </>
  );
}

export default Auth01;
