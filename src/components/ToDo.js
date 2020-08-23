import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  background-color: ${(props) => (props.complete ? "#06D6A0" : "#EF476F")};
`;

export default function Todo({ todo }) {
  return <Container key={todo.id}>{todo.title}</Container>;
}

// export default function Todo({ todo }) {
//     const [complete, setComplete] = useState(todo.complete);

//     function completeTodo() {
//         setComplete(true);
//     }

// function resetTodo() {
//     setComplete(false);
// }

// return (
// <Container complete={complete}>
//     <h2>{todo.title}</h2>
//     <Button onClick={completeTodo}>Complete</Button>
//     <ResetButton onClick={resetTodo}>Reset</ResetButton>
// </Container>
// );
// }

// const Container = styled.div`
// background-color: ${(props) => (props.complete ? "#06d6a0" : "#ef476f")};
// padding: 10px;
// border-radius: 15px;
// margin: 5px;
// `;

// const Button = styled.button`
// margin: 3px;
// font-size: 1rem;
// background-color: #06d6a0;
// border-radius: 5px;
// border: solid 2px #010203;
// `;

// const RestButton = styled(Button)`
// background-color: #ef476f;
// `;
