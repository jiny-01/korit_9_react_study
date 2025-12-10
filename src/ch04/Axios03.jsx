import { useState } from "react";

function Axios03() {
    //18
  const [inputValue, setInputValue] = useState({
    username: "",
  });

  const [users, setUsers] = useState([]);

  const getUsersApi = async () => {
    const response = await axios.get("", {
      params: { username: inputValue.username },
    });
    setUsers(response.data);
  };

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;   //input?
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleInputOnKeyDow = () => {
    if (e.keyCode === 13) {
      //enter 키
    }
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

export default Axios03;
