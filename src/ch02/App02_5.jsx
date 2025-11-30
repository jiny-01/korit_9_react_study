function App02_5() {
  // todo 배열 상태
  const [todos, setTodos] = useState([]);

  // input 상태
  const [inputValue, setInputValue] = useState("");
  const [writer, setWriter] = useState("");

  // 입력 값 변경 핸들러
  const handleOnChange = (e) => {
    const { name, value } = e.target;
  };

  // 추가 버튼 클릭
  const handleOnClick = () => {
    const newTodo = {
      content: inputValue,
      writeDate: new Date().toLocaleDateString(),
      writer: writer,
    };

    setTodos([...todos, newTodo]);

    // input 입력창 초기화
    setInputValue("");
    setWriter("");
  };

  return (
    <div>
      <div>
        <h2>TODO 리스트</h2>
      </div>
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
}

export default App02_5;
