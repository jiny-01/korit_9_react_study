import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

//서브라우트
function Router02() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/name " element={<Name />} />
        <Route path="/age" element={<Age />} />
        <Route
          path="/sub/*"
          element={
            <Routes>
              <Route path="/address1" element={<h1>주소1</h1>} />
              <Route path="/address2" element={<h1>주소2</h1>} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          }
        />
        <Route path="/sub2/*" element={<Phone />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Phone() {
    return <div>
        <h1>연락처</h1>
        <Link to={"/sub2/p1"}>p1</Link>
        <Link to={"/sub2/p2"}>p2</Link>
        <Link to={"/sub2/p3"}>p3</Link>
        <Routes>
            <Route path="/p1" element={<h3>010-1234-5678</h3>}></Route>
            <Route path="/p2" element={<h3>010-5678-5678</h3>}></Route>
            <Route path="/p3" element={<h3>010-1111-2222</h3>}></Route>
            <Route path="/*" element={<NotFound />}></Route>
        </Routes>
    </div>
}
function Home() {
  return (
    <div>
      <h1>홈</h1>
      <Link to={"/name"}>이름 페이지</Link>
      <Link to={"/age"}>나이 페이지</Link>
    </div>
  );
}

// <a href> 대신 <Link> 사용
function Name() {
  return (
    <h1>
      이름이 나오는 페이지{" "}
      <h1>
        <Link to={"/"}>홈으로</Link>
      </h1>
    </h1>
  );
}

function Age() {
  return (
    <h1>
      나이가 나오는 페이지{" "}
      <h1>
        <Link to={"/"}>홈으로</Link>
      </h1>
    </h1>
  );
}

function NotFound() {
  return (
    <h1>
      페이지를 찾을 수 없습니다. <Link></Link>
    </h1>
  );
}

export default Router02;
