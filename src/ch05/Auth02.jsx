import axios from "axios";
import { useEffect, useState } from "react";

function Auth02() {
  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });

  const [inputMessage, setInputMessage] = useState({
    username: "",
    password: "",
  });

  const [signinButtonDisabled, setSigninButtonDisabled] = useState(true);

  const regexs = {
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
  };

  useEffect(() => {
    const isBlank = Object.values(inputValue).includes("");
    const isNotValid = Object.values(inputMessage).map(message => !!message).includes(true);
    setSigninButtonDisabled(isBlank || isNotValid);        //정상적으로 입력되어야만 버튼 활성화
  }, [inputValue]);

  const handleInputOnChange = (e) => {
    // console.log(e.target.value);  //입력값 확인
    setInputValue({
      ...inputValue,
      [e.target.name]: e.target.value,
    });


    // 정규표현식 검사 후 메시지 출력
    if (regexs[e.target.name].regex.test(e.target.value)) {
      // 출력할 메시지
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


    //버튼 비활성화
    setSigninButtonDisabled(
      Object.values(inputMessage)
        .map((message) => !!message)
        .includes(true)
    );
  };


  const handleSigninOnClick = () => {
    if (
      Object.values(inputMessage)
        .map((message) => !!message)
        .includes(true)
    ) {
      alert("입력하신 가입정보를 다시 확인하세요.");
      return;
    }
    signinRequest();
  };


  const signinRequest = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/auth/signin",
        inputValue
      );
      //accessToken 을 localStorage 에 저장하기
      const {accessToken} = response.data;
      localStorage.setItem("AccessToken", accessToken);

      //getPrincipal 요쳥 날리기
      await getPrincipalRequest();
      console.log(response);
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }

  };

  //getPrincipalRequest 요청
  const getPrincipalRequest = async () => {
    try {
        const response = await axios.get("http://localhost:8080/api/auth/principal", {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,    //토큰이 없으면 data 비어있을 것
            }
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <>
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
      <button onClick={handleSigninOnClick} disabled={signinButtonDisabled}>
        로그인
      </button>
    </>
  );
}

export default Auth02;
