import { BrowserRouter, Route, Routes } from "react-router-dom";
import Css01 from "./Css01";
import Css02 from "./Css02";

function Css() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/css1" element={<Css01 />}></Route>
        <Route path="/css2" element={<Css02 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Css;
