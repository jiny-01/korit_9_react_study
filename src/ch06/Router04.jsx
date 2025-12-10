import { BrowserRouter, Link, Route, Routes, useSearchParams } from "react-router-dom";

//params - SearchParam(get 요청)
function Router04() {
    return <BrowserRouter>
        <div>
                <Link to={"/p1?name=김준일&age=32"}>p1</Link>
                <div></div>
                <Link to={"/p2?name=김준이&age=33"}>p2</Link>
        </div>
        <Routes>
            <Route path="/p1" element={<Page1 />}/>
            <Route path="/p2" element={<Page2 />}/>
        </Routes>
    </BrowserRouter>
}

function Page1() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("age"));
    return <div>
        <h3>이름: {searchParams.get("name")}</h3>
        <h3>나이: {searchParams.get("age")}</h3>
    </div>
}

function Page2() {
    const [ searchParams, setSearchParams ] = useSearchParams();
    console.log(searchParams.get("name"));
    console.log(searchParams.get("age"));
    return <div>

    </div>
}

export default Router04;