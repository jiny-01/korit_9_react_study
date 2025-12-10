import { BrowserRouter, Link, Routes } from "react-router-dom";

function Router01() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/name " element={<Name />} />
        <Route path="/age" element={<Age />} />
      </Routes>
    </BrowserRouter>
  );
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
      이름이 나오는 페이지 <h1><Link to={"/"}>홈으로</Link></h1>
    </h1>
  );
}

function Age() {
  return (
    <h1>
      나이가 나오는 페이지 <h1><Link to={"/"}>홈으로</Link></h1>
    </h1>
  );
}

function NotFound() {
    return <h1>페이지를 찾을 수 없습니다. <Link></Link></h1>
}

export default Router01;
