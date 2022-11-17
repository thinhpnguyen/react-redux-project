import React from "react";
import { hot } from "react-hot-loader/root";
import TodoList from "./todos/TodoList.js";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 1rem;
  font-family: Arial, Helvetica, sans-serif;
  color: #222222;
  width: 100vw;
  height: 100vh;
`;
const App = () => (
  <AppWrapper>
    <TodoList />
  </AppWrapper>
);

export default hot(App);
