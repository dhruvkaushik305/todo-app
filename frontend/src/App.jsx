import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo";
import { Todos } from "./components/Todos";
// import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      title: "some todo",
      description: "some description",
      completed: false,
    },
    {
      title: "some more todo",
      description: "some more description",
      completed: false,
    },
  ]);
  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const json = await res.json();
  //   console.log(json);
  //   setTodos(json.result);
  // });

  return (
    <div>
      <CreateTodo></CreateTodo>
      <Todos todos={todos}></Todos>
    </div>
  );
}

export default App;
