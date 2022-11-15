import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./TodoList.css";
import NewTodoForm from "./NewTodoForm.js";
import TodoListItem from "./TodoListItem.js";
import {
  getTodos,
  getIncompleteTodos,
  getCompletedTodos,
  getTodosLoading,
} from "./selectors.js";
import {
  loadTodos,
  removeTodoRequest,
  markCompletedRequest,
} from "./thunks.js";

const TodoList = ({
  incompleteTodos = [],
  completedTodos = [],
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
      <h3>Incomplete Todos:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onRemovePressed={onRemovePressed}
          onMarkCompletePressed={onMarkCompletePressed}
        />
      ))}
      <h3>Completed Todos:</h3>
      {completedTodos.map((todo) => (
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
  incompleteTodos: getIncompleteTodos(state),
  completedTodos: getCompletedTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onMarkCompletePressed: (id) => dispatch(markCompletedRequest(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
