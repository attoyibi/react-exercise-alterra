import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo } from "./redux/todoSlice";

function App() {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todos.todoList);
  const [inputValue, setInputValue] = useState("");
  const handleAddToDo = () => {
    //login untuk menambahkan data
    // console.log("input value = " + inputValue);
    dispatch(addTodo(inputValue));
  };
  const handleRemoveToDo = () => {
    console.log("ini button hapus");
    dispatch(removeTodo());
  };

  return (
    <>
      <h1>React Redux Toolkit</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          handleAddToDo();
        }}
      >
        Add
      </button>
      <button
        onClick={() => {
          handleRemoveToDo();
        }}
      >
        Remove
      </button>
      {todoList.map((todo) => (
        <li key={todo.id}>
          <>{todo}</>
        </li>
      ))}
    </>
  );
}

export default App;
