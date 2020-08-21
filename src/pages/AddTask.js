import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postTodo } from "../api/getTodos";

function AddTask() {
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");
  const [priority, setPriority] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  function handleTaskChange(event) {
    setTask(event.target.value);
  }
  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }
  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setLoading(true);
    setError(false);
    const todo = {
      task,
      author,
      priority,
    };

    try {
      await postTodo(todo);
      setTask("");
      setAuthor("");
      setPriority("");
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Task:
          <input value={task} onChange={handleTaskChange} />
        </label>
        <label>
          Author:
          <input value={author} onChange={handleAuthorChange} />
        </label>
        <label>
          Priority:
          <input value={priority} onChange={handlePriorityChange} />
        </label>

        <input
          type="submit"
          value="Add task"
          disabled={!task || !author || !priority || loading}
        />
        {error && <p>Oh no! Something went wrong! Please try again.</p>}
      </form>
      <Link to="/">Tasks</Link>
    </>
  );
}
export default AddTask;
