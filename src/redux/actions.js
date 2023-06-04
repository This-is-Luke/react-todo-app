// redux/actions.js
// the purpose of this file is to define the action creators for the Redux actions

import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, EDIT_TODO } from "./actionTypes";

// Action creator for adding a new todo item
export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: {
    content,
  },
});

// Action creator for deleting a todo item
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: {
    id,
  },
});

// Action creator for toggling the completed status of a todo item
export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

// Action creator for editing the text of a todo item
export const editTodo = (id, content) => ({
  type: EDIT_TODO,
  payload: {
    id,
    content,
  },
});
