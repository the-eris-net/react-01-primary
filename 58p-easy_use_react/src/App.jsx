import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  let [text, setText] = useState('');

  const addTodo = () => {
    if (text.trim()) {
      setTodos([...todos, text]);
      setText('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="할 일 입력"
      />
      <button onClick={addTodo}>추가</button>

      <ul>
        {todos.map((todo, i) => (
          <li key={i}>
            {todo} <button onClick={() => removeTodo(i)}>삭제</button>
          </li>
        ))}
      </ul>

      <p>총 {todos.length}개</p>
    </div>
  );
}
export default App;
