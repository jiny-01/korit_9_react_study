import { useState } from "react";

function App02_4() {
  // 전체 todo 객체들이 들어 있는 배열을 저장 할 상태 만들기
  //todos: 할일 목록 배열
  //setTodos: todos를 변경하는 함수
  const [todos, setTodos] = useState([]);

  //props로 자식 컴포넌트에게 데이터를 전달
  return (
    <>
      <TodoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}


//TodoInput -> 입력 담당 컴포넌트
function TodoInput({ todos, setTodos }) {
  // content, writer를 하나의 객체로 관리
  // 이 컴포넌트에서만 쓰기 때문에 전역으로 뺄 필요가 없음
  // TodoInput 컴포넌트에서만 쓰기 때문에 객체로 뺌
  //받은 props를 구조분해할당으로

  // input 창 별로 OnChange 를 만들 필요가 없음이 장점
  const [value, setValue] = useState({
    content: "",
    writer: "",
    age: "",
  });
  //   const [inputValue, setInputValue] = useState("");
  //   const [writer, setWriter] = useState("");

  // input 내용 value 상태에 저장
  const handleOnChange = (e) => {
    //e.target.name : 어떤 종류의 input 인지 - name, pw...
    //return 태그에 name 속성을 줌 - [name] 
    //e.target.value : input 에 입력된 값
    const { name, value: inputValue } = e.target;
    setValue({
      ...value,
      [name]: inputValue,  //writer, content, age
    });
  };

  // 등록버튼 누르면 이 함수 동작
  const handleOnClick = () => {
    const newTodo = {
      //새로 추가할 todo 객체
      //   content: value.content,
      //   writer: value.writer,
      ...value, //input 에 입력한 값을 value 로 받음
      writeDate: new Date().toLocaleDateString(),
    };
    setTodos([...todos, newTodo]); // todo 배열에 추가
    // 새로운 배열을 만들어서 기존의 todos에 들어있던 요소들
    // 기존 todos 를 스프레드로 다 복사하고 마지막에 새로만든 todo 객체 추가
    setValue({
      writer: "",
      content: "",
      age: "",
    }); // input 내용 초기화
  };

  return (
    <div>
      <input
        type="text"
        name="content"
        placeholder="todo"
        value={value.content}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="writer"
        placeholder="작성자"
        value={value.writer}
        onChange={handleOnChange}
      />
      <input
        type="text"
        name="age"
        placeholder="작성자 나이"
        value={value.age}
        onChange={handleOnChange}
      />
      <button onClick={handleOnClick}>추가</button>
    </div>
  );
}

//TodoList 컴포넌트 - todos 배열을 화면에 표시 (ul-li 요소 이용)
function TodoList({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          내용: {todo.content} 작성일: {todo.writeDate} 작성자: {todo.writer}{" "}
          작성자나이: {todo.age}
        </li>
      ))}
    </ul>
  );
}

export default App02_4;

/**
 * 입력창에 값 입력 → value 상태 업데이트
 * "추가" 버튼 클릭
 * newTodo 객체 생성
 * setTodos 로 todos 상태 업데이트
 * App02_4 전체 리렌더링
 * TodoList가 새로운 todos 기반으로 리스트 다시 표시
 */
