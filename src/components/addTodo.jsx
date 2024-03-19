import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const submitTodo = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={submitTodo} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-grey-800 rounded border ease-in-out"
        placeholder="Enter todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 hover:bg-indigo-600"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
