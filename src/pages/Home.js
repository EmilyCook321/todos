import React from "react";
import { getTodos } from "../api/getTodos";
import { Link } from "react-router-dom";
import useAsync from "../hooks/useAsync";
import Todo from "../components/ToDo";

function Home() {
  const { data: todos, loading, error } = useAsync(getTodos);

  return (
    <div>
      <Link to="/add">Add Todo</Link>
      {error && <div>ERROR!</div>}
      {loading && <div>Loading...</div>}
      {todos?.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
export default Home;
