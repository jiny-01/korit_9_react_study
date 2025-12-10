import axios from "axios";

function Axios05() {
  const api = axios.create({
    baseURL: "http://localhost:8080",
  });

  const reqGetOnClick1 = () => {
    console.log("클릭됨");
    api.get("/req/data1?a=aaaaa&b=10");
  };

  const reqGetOnClick2 = () => {
    console.log("클릭됨");
    api.get("/req/data2", {
      params: {
        a: "abc",
        b: 1000,
      },
    });
    //   const options = {
    //       params: {
    //       a:"abc",
    //       b: 10000,
    //   }}
    //   api.get("/req/data2", options);
  };

  const reqGetOnClick3 = () => {
    api.get("/req/data3", {
      params: {
        name: "name",
        age: 100,
      },
    });
  };

  //......

  const reqGetOnClick7 = () => {
    api.get("/req/abc/data7/20", {
      //path/data7/id
      params: {
        name: "김준일",
        age: 32,
      },
    });
  };

  //==============POST 요청====================================
  //백엔드에서 Map 으로 받음
  const reqPostOnClick1 = () => {
    console.log("post1 버튼 클릭됨");
    const data = {
      name: "test",
      age: 32,
      address: "test address",
    };


    // Object -> JSON
    const jsonData = JSON.stringify(data); //데이터 객체를 문자열 json 으로 변환 (object 객체 -> JSON)
    // JSON -> Object
    const obj = JSON.parse(jsonData);
    api.post("/req/data1", data); //post -> 1. url 2. data 3. config
  };


  const reqPostOnClick2 = () => {
    api.post("/req/data2", {
      name: "김준일",
      age: 32,
    });
  };


  const reqPostOnClick3 = () => {
    const inputElement = document.createElement("input"); //버튼 이벤트로 강제 input 요소 만들기
    inputElement.setAttribute("type", "file"); //input 요소의 type 이란 속성을 file로
    // <input type="file" />
    inputElement.onchange = (e) => {
      console.log(e.target.files); //e.target -> input 요소
      //files-input 의 타입 file 안에만 있는 속성
      const { files } = e.target;
      const [file] = files; //files[0] - 첫번째 파일 가져옴

      //Form 태그 - input 들 담을 수 있음
      //Form 데이터 직접 만들기
      const formData = new FormData();
      formData.append("file", file);
      api.post("/req/data3", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    };
    inputElement.click(); //클릭한 것과 동일한 동작
  };


  const reqPostOnClick4 = () => {
    const inputElement = document.createElement("input"); //버튼 이벤트로 강제 input 요소 만들기
    inputElement.setAttribute("type", "file"); //input 요소의 type 이란 속성을 file로
    // <input type="file" />
    inputElement.onchange = (e) => {
      console.log(e.target.files); //e.target -> input 요소

      const { files } = e.target;
      const [file] = files;

      const formData = new FormData();
      //form 데이터 객체로 보내는 것
      formData.append("file", file);
      formData.append("name", "김준일");
      formData.append("age", 32);

      api.post("/req/data4", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    };
    inputElement.click(); //클릭한 것과 동일한 동작
  };
  //프로필, 자기소개..등 수정


  const reqPostOnClick5 = () => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", "file");
    inputElement.setAttribute("multiple", true); //multiple 활성화

    inputElement.onchange = (e) => {
      const { files } = e.target;
      const fileList = Array.from(files); // ** 일반 배열에다가 files 리스트를 옮기는 행위

      const formData = new FormData();
      fileList.forEach((file) => formData.append("files", files)); // ** 이걸로 해야함 - append 를 계속해줌

      // /formData.append("files", files);   // ** 이대로 하먄 400 에러 - list 타입이기 때문

      api.post("/req/data5", formData);
    };
    inputElement.click();
    console.log();
  };
  //일반 Array 가 아니면 강제로 Array 로 바꿔서 forEach

  //=====================PUT 요청================================
  const reqPutOnClick = () => {
    //PUT - 전체 수정
    console.log("Put 요청");
    api.put("/req/data1/30", {
      name: "김준이",
      age: 33,
    });
  };

  //======================PATCH 요청==================================
  const reqPatchOnClick = () => {
    //PATCH - 부분수정
    console.log("Patch 요청");
    api.patch("/req/data1/30", {
      name: "김준이",
    });
  };

  //=======================DELETE 요청==================================
  const reqDeleteOnClick = () => {
    //json 객체로 받음 - 백엔드에 requestbody, 객체(MAP, DTO)로 받아야함
    //POST 랑 다르게 data 를 config 에 넣어야함
    //delete => api - 1. url 2. data 3. config
    //delete => api - 1. url 2. config
    api.delete("/req/data1/20", {
      data: {
        name: "김준일"
      },
    });
  };

  return (
    <>
      <button onClick={reqGetOnClick1}>reqGet1</button>
      <button onClick={reqGetOnClick2}>reqGet2</button>
      <button onClick={reqGetOnClick3}>reqGet3</button>
      <button onClick={reqGetOnClick7}>regGet7</button>
      <button onClick={reqPostOnClick1}>reqPost1</button>
      <button onClick={reqPostOnClick2}>reqPost2</button>
      <button onClick={reqPostOnClick3}>reqPost3</button>
      <button onClick={reqPostOnClick4}>reqPost4</button>
      <button onClick={reqPostOnClick5}>reqPost5</button>
      <button onClick={reqPutOnClick}>reqPut</button>
      <button onClick={reqPatchOnClick}>reqPatch</button>
      <button onClick={reqDeleteOnClick}>reqDelete</button>
    </>
  );
}

export default Axios05;
