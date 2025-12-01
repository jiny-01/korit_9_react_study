import axios from "axios";
import { useEffect, useState } from "react";
import "./style.css";

function Axios01() {
  const [users, setUsers] = useState([]);
  const [refetch, setRefetch] = useState(true);

  //   const response = axios.get("http://192.168.2.101:8080/users");
  //   console.log(response); // 결과: promise
  //모든 요청은 비동기임
  // #1) refetch 로 한 번만 실행되도록 막음

  //async-await 로 변경 -> 동기적으로 동작
  const getUsersApi = async () => {
    console.log("콘솔!!");
    if (refetch) {
      const response = await axios.get("http://192.168.2.101:8080/users");
      console.log(response.data);
      setUsers(response.data);
      setRefetch(false);   
    }
  };

  //   getUsersApi();


  useEffect(() => {
    console.log("useEffect!!!!");
  });
  //=> useEffect 보다 then 이 먼저 일어남을 확인할 수 있음
  //의존성 배열 없으므로 컴포넌트 재렌더링될때마다 실행

  // #2) useEffect 로 최초 1번만 실행
  useEffect(() => {
    axios
      .get("http://192.168.2.101:8080/users")
      .then((response) => setUsers(response.data));
  }, []);

  // useEffect 에 refetch 상태변수 의존하는 방법
  // useEFfect 안에 then 을 넣어두면 then 이 먼저 일어날 것
  //한 번 그려서 다 띄우고 동작(요청날라감)
  
  useEffect(() => {
    if (refetch) {
      axios.get("http://192.168.2.101:8080/users").then((a) => {
        console.log(a.headers["content-type"]); //키 값으로 참조
        // console.log(a.data[0].username);
        setUsers(a.data);
        setRefetch(false);
      });
    }
  }, [refetch]);

  //연쇄적으로 요청을 보내야한다면 useEffect 안에서 요청을 보내면 됨
  //상태가 바뀔때마다 요청보내도록
  //return 전에 요청이 필요한지, 아닌지에 따라 useEffect 를 주는 조건이 달라짐

  return (
    <>
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
          {/* u: users 배열 안에 user 객체 하나 */}
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

export default Axios01;
