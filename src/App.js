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
      <main>
        <List>
          <ListItem>"Task 1"</ListItem>
          <ListItem>"Task 2"</ListItem>
          <ListItem>"Task 3"</ListItem>
          <ListItem>"Task 4"</ListItem>
          <ListItem>"Task 5"</ListItem>
        </List>
      </main>
    </div>
  );
}

export default TodoList;
