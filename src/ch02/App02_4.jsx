import { useState } from "react";

function App02_4() {
  //todo 객체를 저장할 배열 상태 만들기
  const [todos, setTodos] = useState([]);

  //TodoInput : todo 입력하는 부분
  //TodoList : 추가한 todo 리스트 출력해서 보여주는 부분
  //=> 반복되는 출력 나오면 map 돌려야함
  return (
    <div>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
}

function TodoInput({ todos, setTodos }) {
  const [inputValue, setInputValue] = useState(""); //todo 입력창
  const [writer, setWriter] = useState(""); //writer 입력창

  //Input 값 OnChange 핸들러 - todo, 작성자
  //input 에 입력된 값 inputValue 로 저장
  const handleTodoOnChange = (e) => {
    setInputValue(e.target.value); //input
  };

  const handleWriterOnChange = (e) => {
    setWriter(e.target.value);
  };

  //등록 버튼 OnClick 핸들러
  //등록 버튼 눌렀을 때 inputValue -> display 로 표시해줌
  const handleOnClick = (e) => {
    console.log(e.target.value);

    //새로 추가할 todo 객체
    const newTodo = {
      content: inputValue,
      writeDate: new Date().toLocaleDateString(),
      writer: writer,
    };
    setTodos([...todos, newTodo]);
    setInputValue(); //input 입력창 초기화
    setWriter();
  };
  const [todo, setTodo] = useState({
    id: 0,
    content: "",
    writeDate: "",
    writer: "",
  });

  return (
    <div>
      <input
        type="text"
        placeholder="todo"
        value={inputValue}
        onChange={handleTodoOnChange}
      />
      <input
        type="text"
        placeholder="작성자"
        value={writer}
        onChange={handleWriterOnChange}
      />
      <button onClick={handleOnClick}>추가</button>
    </div>
  );

  // const [ todo, setTodo ] = useState({
  //     id: 0,
  //     content: "",
  //     writeDate: new Date().toLocaleDateString(),
  //     writer: "",
  // })
}

function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          내용: {todo.content} 작성일: {todo.writeDate} 작성자: {todo.writer}
        </li>
      ))}
    </ul>
  );
}

export default App02_4;
