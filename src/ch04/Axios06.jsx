import axios from "axios";
import { useState } from "react";

function Axios06() {
  const [resp1Data, setResp1Data] = useState("");
  const [resp2Data, setResp2Data] = useState({});
  const [resp3Data, setResp3Data] = useState([]);
  const [resp4Data, setResp4Data] = useState({
    resepJsonDto2: {
      address1: "",
      address2: "",
      strs: [],
      resepJsonDto2: {
        address1: "",
        address2: "",
      },
    },
  });

  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const resp1OnClick = () => {
    api
      .get("/resp/data1") //get 요청 자체가 서버로의 request 요청 - 비동기
      .then((axiosResponse) => {
        console.log(axiosResponse);
        console.log(axiosResponse.data);
        const data = axiosResponse.data;

        setResp1Data(data);
      });
  };

  const resp2OnCliCK = () => {
    api.get("/resp/data2").then((axiosResponse) => {
      console.log(axiosResponse);
      setResp2Data(axiosResponse.data);
    });
  };

  const resp3OnCliCK = () => {
    api.get("/resp/data3").then((axiosResponse) => {
      console.log(axiosResponse);
      console.log(axiosResponse.data);
      setResp3Data(axiosResponse.data);
    });
  };

  const resp4OnClick = () => {
    api.get("/resp/data4").then((axiosResponse) => {
      //   console.log(axiosResponse);
      console.log(axiosResponse.data);
      const data4 = axiosResponse.data;
      setResp4Data(data4);
    });
  };
  return (
    <>
      <div>
        <button onClick={resp1OnClick}>resp1</button>
        <span> {resp1Data} </span>
        {/* 인라인 요쇼 - 가로 정렬 */}
      </div>
      <div>
        <button onClick={resp2OnCliCK}>resp2</button>
        <span>
          key1: {resp2Data.key1}, key2: {resp2Data.key2}
        </span>
        <span>
          {Object.entries(resp2Data).map(([key, value]) => {
            return `${key}: ${value}`;
          })}
        </span>
      </div>
      <div>
        <button onClick={resp3OnCliCK}>resp3</button>
        <span>{resp3Data.map((n) => (n * 10) + " ") }</span>
        {
          resp3Data.map((data) => (
            <span>{data * 10} </span>
          ))
          // map 돌려서 개수만큼 span 태그로 나타냄
        }
        <span>{resp3Data}</span>
      </div>
      <div>
        <button onClick={resp4OnClick}>resp4</button>
        <ul>
          <li>이름: {resp4Data.name}</li>
          <li>이메일: {resp4Data.email}</li>
          <li>str: {resp4Data.strs}</li>
          <li>address1: {resp4Data.resepJsonDto2.address1 || "주소없음"}</li>
          <li>address2: {resp4Data.resepJsonDto2.address2 || "주소없음"}</li>
          {/* <li>address1: {resp4Data.resepJsonDto2?.address2 ?? "주소없음"}</li> */}
          {/* null 이라서 참조 못할 때 */}
        </ul>
        <ul>
          {Object.entries(resp4Data).map(([key, value]) => {
            console.log(typeof value);
            // 1) value가 object이면
            if (typeof value === "object") {
              const [key2, value2] = Object.entries(value);
              return <li></li>;
            }
            // 2) value가 일반 값이면
            return (
              <li>
                {key}: {value}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <a href="http://localhost:8008/resp/data5?filename=download_test.txt">
          download_test.txt
        </a>
      </div>
      <div>
        <a href="http://localhost:8008/resp/data6?filename=체스트.txt">
          테스트.txt
        </a>
      </div>
    </>
  );
}

export default Axios06;
