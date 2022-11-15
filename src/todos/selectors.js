import { createSelector } from "reselect";
export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

//These functions don't have to worry about how the state is structured in the store
export const getIncompleteTodos = createSelector(getTodos, (todos) => {
  todos.filter((todo) => !todo.isCompleted);
});

export const getCompleteedTodos = createSelector(getTodos, (todos) => {
  todos.filter((todo) => todo.isCompleted);
});
