import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import AddTodo from "./components/addTodo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Todo with redux toolkit</h2>
      <AddTodo />
      <Todo />
    </>
  );
}

export default App;
