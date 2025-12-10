import axios from "axios";
import { useRef, useState } from "react";

function Axios04() {
  //객체나 요소를 선택해야 할 때 querySelector XXXXX
  //무조건 useRef 써라!!!
  // const registerUsernameInputRef = useRef();
  // const registerPasswordInputRef = useRef();

  const registerInputRef = {
    username: useRef(),
    password: useRef(),
    name: useRef(),
    email: useRef(),
    role1: useRef(),
    role2: useRef(),
  };

  const [registerInputValue, setRegisterInputValue] = useState({
    username: "",
    password: "",
    name: "",
    email: "",
    role1: "",
    role2: "",
  });

  const [inputValue, setInputValue] = useState({
    username: "",
    name: "",
  });
  const [users, setUsers] = useState([]);

  const getUsersApi = async () => {
    const response = await axios.get("http://192.168.2.101:8080/users", {
      params: { username: inputValue.username },
    });
    setUsers(response.data);
  };

  const handleRegisterInputOnChange = (e) => {
    const { name, value } = e.target;
    setRegisterInputValue({
      ...registerInputValue,
      [name]: value,
    });
  };

  //다음 녀석을 지정해주기 위해서 nextRef 를 매개변수로 받아옴
  const handleRegisterInputNextFocusOnKeyDown = (e, nextRef) => {
    if (e.key === "Enter") {
      // e.target.nextSiblig.focus();
      // console.log(registerUsernameInputRef);
      // console.log(registerPasswordInputRef);
      // registerInputRef.current.focus();
      nextRef.current.focus();
    }
  };

  const handleRegisterInputSubmitOnKeyDown = (e) => {
    if (e.key === "Enter") {
      console.log(registerInputValue);

      // const data = {
      //   username: registerInputValue.username,
      //   password: registerInputValue.password,
      //   name: registerInputValue.name,
      //   email: registerInputValue.email,
      //   roles: [registerInputValue.role1, registerInputValue.role2],
      // };
      // console.log(data);

      const { role1, role2, ...data } = registerInputValue;
      data["roles"] = [role1, role2];

      axios.post("http://192.168.2.101:8080/users", data);
      // nextRef.current.focus();
    }
  };

  const handleInputOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleInputOnKeyDown = (e) => {
    if (e.key === "Enter") {
    }
    console.log(e);
    if (e.keyCode === "Enter") {
      getUsersApi();
    }
  };

  const handleSearchOnClick = () => {
    getUsersApi();
  };

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            ref={registerInputRef.username}
            placeholder="username"
            name="username"
            value={registerInputValue.username}
            onChange={handleRegisterInputOnChange}
            onKeyDown={(e) =>
              handleRegisterInputNextFocusOnKeyDown(
                e,
                registerInputRef.password
              )
            }
          />
        </div>
        <div>
          <input
            type="text"
            ref={registerInputRef.password}
            placeholder="password"
            name="password"
            value={registerInputValue.password}
            onChange={handleRegisterInputOnChange}
            onKeyDown={(e) =>
              handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.name)
            }
          />
        </div>
        <div>
          <input
            type="text"
            ref={registerInputRef.name}
            placeholder="name"
            name="name"
            value={registerInputValue.name}
            onChange={handleRegisterInputOnChange}
            onKeyDown={(e) =>
              handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.email)
            }
          />
        </div>
        <div>
          <input
            type="text"
            ref={registerInputRef.email}
            placeholder="email"
            name="email"
            value={registerInputValue.email}
            onChange={handleRegisterInputOnChange}
            onKeyDown={(e) =>
              handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.role1)
            }
          />
        </div>
        <div>
          <input
            type="text"
            ref={registerInputRef.role1}
            placeholder="role1"
            name="role1"
            value={registerInputValue.role1}
            onChange={handleRegisterInputOnChange}
            onKeyDown={(e) =>
              handleRegisterInputNextFocusOnKeyDown(e, registerInputRef.role2)
            }
          />
        </div>
        <div>
          <input
            type="text"
            ref={registerInputRef.role2}
            placeholder="role2"
            name="role2"
            value={registerInputValue.role2}
            onChange={handleRegisterInputOnChange}
            onKeyDown={(e) => handleRegisterInputSubmitOnKeyDown(e)}
          />
        </div>

        <button>등록</button>
      </div>
      <input
        type="text"
        name="username"
        value={inputValue.username}
        onChange={handleInputOnChange}
        onKeyDown={handleInputOnKeyDown}
      />
      <button onClick={handleSearchOnClick}>검색</button>
      <table>
        <thead>
          <tr>
            <th>username</th>
            <th>password</th>
            <th>name</th>
            <th>email</th>
            <th>role1</th>
            <th>role2</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr>
              <td>{u.username}</td>
              <td>{u.password}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.roles[0]}</td>
              <td>{u.roles[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Axios04;
