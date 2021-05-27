import "./App.css";
import { useState, useEffect } from "react";

function TodoItem({ id, description, onDelete }) {
  const [isChecked, setChecked] = useState(false);

  const check = () => {
    setChecked(!isChecked);
  };

  return (
    <li style={{ 'textDecoration': isChecked ? 'line-through' : 'none' }}>
      {id}- {description}
      <input type="checkbox" onClick={check}></input>
      <button onClick={() => onDelete(id)}>Delete</button>
    </li>
  );
}

function TodoList({ todos }) {
  const [Todos, setTodos] = useState(todos);

  const addTodo = () => {
      const newTodo = {
        id: Todos.length > 0 ? Todos[Todos.length-1].id + 1 : 1,
        description: "random text"
      };
      const newTodosArr = Todos.concat(newTodo);
      setTodos(newTodosArr);
  };

  const onDelete = (id) => {
      const filteredTodos = Todos.filter((todo) => todo.id !== id);
      setTodos(filteredTodos);
  };

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
      <ul>
        {Todos.length > 0 ?
        Todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            description={todo.description}
            onDelete={onDelete}
          ></TodoItem>
        ))
          : 'No items left'}
      </ul>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const counter = setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearTimeout(counter);
    };
  });

  return (
    <p>You have used {count} seconds on this website</p>
  );
}

function App() {
  return (
    <>
      <h1>Todos list</h1>
      <Counter></Counter>
      <TodoList todos={todos}></TodoList>
    </>
  );
}

const todos = [
  {
    id: 1,
    description: "Brush teeth",
    deadlineDate: {
      day: 30,
      month: 5,
      year: 2021,
    },
  },
  {
    id: 2,
    description: "Get out of bed",
    deadlineDate: {
      day: 14,
      month: 5,
      year: 2021,
    },
  },
  {
    id: 3,
    description: "Eat breakfast",
    deadlineDate: {
      day: 10,
      month: 6,
      year: 2021,
    },
  }
];

export default App;