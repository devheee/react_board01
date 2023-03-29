import { useRef, useState } from "react";
import { Route, Routes } from "react-router-dom";
import List from "./board/List";
import Modify from "./board/Modify";
import View from "./board/View";
import Write from "./board/Write";
import Layout from "./Layout";

const App = () => {

  const [list, setList] = useState([
    { id: 1, name: "관리자", subject: "첫번째 게시물", content: "01 우리나라 대한민국", date: "2023.03.29" },
    { id: 2, name: "관리자", subject: "두번째 게시물", content: "02 우리나라 대한민국", date: "2023.03.30" },
  ]);

  const idRef = useRef(3);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="list" element={<List list={list} />} />
        <Route path="view/:id" element={<View list={list} setList={setList} />} />
        <Route path="modify/:id" element={<Modify list={list} setList={setList} />} />
        <Route path="write" element={<Write list={list} setList={setList} idRef={idRef} />} />
      </Route>
    </Routes>
  )
}

export default App;
