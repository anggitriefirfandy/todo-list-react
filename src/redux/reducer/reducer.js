import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const pushTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    pushTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    deleteTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    editTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
  },
});
export const { pushTodos, deleteTodos, editTodos, completeTodos } =
  pushTodoReducer.actions;
export const reducer = pushTodoReducer.reducer;
