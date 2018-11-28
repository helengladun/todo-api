import {
  ADD_TODO,
  CHANGE_INPUT,
  UPDATE_TODO,
  REMOVE_TODO
} from '../constants/Todos';

export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: text
});

export const changeInput = (text) => ({
  type: CHANGE_INPUT,
  todo: text
});

export const updateTodo = (index, value) => ({
  type: UPDATE_TODO,
  index: index,
  value: value
});

export const removeTodo = (index) => ({
  type: REMOVE_TODO,
  index: index
});
