import React, { useState } from "react";
import styled from "@emotion/styled";

export default function AddToDo({ todo }) {
  const [new, setNew] = useState(todo.new);

  function AddTodo() {
    setNew(true);
  }

  return (
    <Container complete={complete}>
      <h2>{todo.title}</h2>
      <Button onClick={completeTodo}>Add Task</Button>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => (props.complete ? "#06d6a0" : "#ef476f")};
  padding: 10px;
  border-radius: 15px;
  margin: 5px;
`;

const Button = styled.button`
  margin: 3px;
  font-size: 1rem;
  background-color: #06d6a0;
  border-radius: 5px;
  border: solid 2px #010203;
`;

const Label = styled.label`
margin: 5px;
font-size: 3rem;
  background-color: #06d6a0;
  border-radius: 5px;
  border: solid 2px #010203;
`
