import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: ["belajar redux", "belajar redux toolkit"],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //reducer ini adalah tempat logic dari aplikasi dibuat
    addTodo: (state, action) => {
      console.log(action.payload);
      state.todoList.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoList.pop();
    },
  },
});
export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
