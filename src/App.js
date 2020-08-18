import React from "react";
import "./App.css";
import List from "./components/List";
import ListItem from "./components/ListItem";

function TodoList() {
  return (
    <div className="app">
      <header>
        To Dos <input />
      </header>
      <main>To Dos</main>
      <List>
        <ListItem href="Task 1"></ListItem>
        <ListItem href="Task 2"></ListItem>
        <ListItem href="Task 3"></ListItem>
        <ListItem href="Task 4"></ListItem>
        <ListItem href="Task 5"></ListItem>
        <ListItem href="Task 6"></ListItem>
        <ListItem href="Task 7"></ListItem>
        <ListItem href="Task 8"></ListItem>
        <ListItem href="Task 9"></ListItem>
        <ListItem href="Task 10"></ListItem>
      </List>
    </div>
  );
}

export default TodoList;
