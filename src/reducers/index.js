import {
  ADD_TODO,
  CHANGE_INPUT,
  UPDATE_TODO,
  REMOVE_TODO
} from '../constants/Todos';

const initialState = {
  todo: '',
  todoList: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.todo]
      };
    case CHANGE_INPUT:
      return {
        ...state,
        todo: action.todo
      };
    case UPDATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.slice(0, action.index),
          action.value,
          ...state.todoList.slice(action.index+1)
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        todoList: [...state.todoList.slice(0, action.index),
          ...state.todoList.slice(action.index+1)
        ]
      };
    default:
      return state;
  }
};

export default todoReducer;