import React from "react";
import { getTodos } from "../api/getTodos";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import Todo from "../components/Todo";

function Home() {
  const { data: todos, error, loading } = useAsync(getTodos);

  return (
    <div>
      <Link to="/add">Add Todo</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <div key={todo.id}>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
}
export default Home;
