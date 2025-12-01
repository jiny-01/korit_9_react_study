import Swal from "sweetalert2";

function Promise01() {
  //get 요청 - promise 등록
  //2초 뒤 resolve 호출 - then 안의 함수 실행
  //axios 안에 이렇게 정의되어있음
  //get 리턴 promise 객체 - 무조건 .then 찍어야함
  //=> ****리턴이 promise 면 무조건 .then 찍어라****

  const axios = {
    get: (url) => {
      return new Promise((rs, rj) => {
        console.log(url + "로 요청");
        setTimeout(() => {
          console.log("응답");
          rs({
            status: 200,
            data: [10, 20, 30, 40],
          });
        }, 2000);
      });
    },
  };


  axios.get("http://192.1168.2.101:8080/nums").then((r) => {
    console.log(r);
    console.log(r.status);
    console.log(r.data);
  });

  axios.get("http://192.1168.2.101:8080/users").then((r) => {
    console.log(r);
    console.log(r.status);
    console.log(r.data);
  });

  //async - await 로 바꾸기
  const getRequest = async (url) => {
    const r = await axios.get(url);
    console.log(r);
    console.log(r.status);
    console.log(r.data);
    return r; //async 안에선 return 이 resolve 호출, 즉 resolve 안의 값
  };


  getRequest("http://192.1168.2.101:8080/users");

  const requests = async () => {
    const r1 = await getRequest("http://192.1168.2.101:8080/users");
    const r2 = await getRequest("http://192.1168.2.101:8080/names");
    const r3 = await getRequest("http://192.1168.2.101:8080/nums");
    const r4 = await getRequest("http://192.1168.2.101:8080/products");
  };

  //클릭 이벤트는 호출만 되면 되므로 async 달 수 있음
  const handleOnclick = async () => {
    //async - await 하기 전
    // Swal.fire({
    //   title: "알림 내용",
    //   showCancelButton: true,
    //   input: "text",
    // }).then((r) => {
    //   console.log(r);
    //   console.log("콘솔");
    // });
    // alert("알림 내용");

    await Swal.fire({
      title: "알림 내용",
      showCancelButton: true,
      input: "text",
    });
  };

  //- useEffect 는 async-await 불가능
  //- promise 와 .then 만 가능
  //- 굳이 하겠다면 함수 안에
  //const a = async () => {
  //    await getRequest();
  //}


  

  return (
    <>
      <button onClick={handleOnclick}>클릭</button>
    </>
  );
}

export default Promise01;
