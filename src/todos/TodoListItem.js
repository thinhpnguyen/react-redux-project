import React from "react";
import "./TodoListItem.css";

const TodoListItem = ({ todo, onRemovePressed, onMarkCompletePressed }) => {
  return (
    <div className="todo-item-container">
      <h3>{todo.text}</h3>
      <div className="buttons-container">
        {todo.isCompleted ? (
          <button className="completed-button">Completed</button>
        ) : (
          <button
            className="completed-button"
            onClick={() => onMarkCompletePressed(todo.id)}
          >
            Mark As Completed
          </button>
        )}
        <button
          className="remove-button"
          onClick={() => onRemovePressed(todo.id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
