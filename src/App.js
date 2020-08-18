import React, { useState, useEffect } from "react";
import "./App.css";
import { getTodos } from "./api/getTodos";

function TodoList() {
  const [todos, setTodos] = useState(null);

  useEffect(() => {
    const doFetch = async () => {
      const toDos = await getTodos();
      setTodos(toDos);
    };
    doFetch();
  }, []);

  return (
    <div className="App">
      {todos?.map((todo) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
}

export default TodoList;
