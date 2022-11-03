import React from "react";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm.js";
import TodoListItem from "./TodoListItem.js";

const TodoList = ({ todos = [{ text: "Hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
