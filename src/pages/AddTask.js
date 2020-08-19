import React, { useState } from "react";
import { Link } from "react-router-dom";

function AddTask() {
  const [task, setTask] = useState("");
  const [author, setAuthor] = useState("");
  const [priority, setPriority] = useState("");

  function handleTaskChange(event) {
    setTask(event.target.value);
  }

  function handleAuthorChange(event) {
    setAuthor(event.target.value);
  }

  function handlePriorityChange(event) {
    setPriority(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert("Submitted + task + author + priority");
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
          Priority
          <input value={priority} onChange={handlePriorityChange} />
        </label>
      </form>
      <Link to="/">Tasks</Link>
    </>
  );
}

export default AddTask;
