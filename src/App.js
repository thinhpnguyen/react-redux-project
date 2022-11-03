import React from "react";
import { hot } from "react-hot-loader/root";
import TodoList from "./todos/TodoList.js";
import "./App.css";

const App = () => (
  <div className="App">
    <TodoList />
  </div>
);

export default hot(App);
