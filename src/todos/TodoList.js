import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm.js";
import TodoListItem from "./TodoListItem.js";
import { getTodos, getTodosLoading } from "./selectors.js";
import {
  loadTodos,
  removeTodoRequest,
  markCompletedRequest,
} from "./thunks.js";

const TodoList = ({
  todos = [],
  onRemovePressed,
  onMarkCompletePressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkCompletePressed={onMarkCompletePressed}
        />
      ))}
    </div>
  );

  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  isLoading: getTodosLoading(state),
  todos: getTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkCompletePressed: (id) => dispatch(markCompletedRequest(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
