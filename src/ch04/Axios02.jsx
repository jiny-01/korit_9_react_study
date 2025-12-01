import { useState } from "react";

function Axios02() {
  //사용자가 <input> 창에 입력하는 검색어저장하는 상태
  //초기값 username: ""
  const [inputValue, setInputValue] = useState({
    username: "",
  });

  const [users, setUsers] = useState([]);

  const getUsersApi = async () => {
    //params 객체를 사용해 inputValue.username 에 담긴 값 서버로 보냄
    const response = await axios.get("http://192.168.2.101:8080/users", {
      params: { username: inputValue.username },
    });
    setUsers(response.data);
  };

  // input 창에 글자 입력할 때마다 실행
  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleInputOnKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 13) {
      //enter 키
    }
  };

  const handleSearchOnClick = () => {

  };

  return (
    <>
      <input
        type="text"
        name="username"
        value={inputValue.username}
        onChange={handleInputOnChange}
        onKeyDown={handleInputOnKeyDown}
      />
      <button onClick={handleSearchOnClick}>검색</button>
    </>
  );
}

export default Axios02;
