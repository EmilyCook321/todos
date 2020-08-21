import React from "react";
import { getTodos } from "../api/getTodos";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";

function Home() {
  const { data: todos, error, loading } = useAsync(getTodos);

  return (
    <div>
      <Link to="/add">Add Task</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <div key={todo.id}>
          {todo.task} - {todo.author} - {todo.priority}
        </div>
      ))}
    </div>
  );
}
export default Home;
