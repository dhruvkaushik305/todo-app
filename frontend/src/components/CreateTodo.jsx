import { useState } from "react";

export function CreateTodo() {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
  });
  function changeHandler(event) {
    setTodo({ ...todo, [event.target.className]: event.target.value });
  }
  async function createTodo() {
    const response = await fetch("http://localhost:3000/todo/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("authorization"),
      },
      body: JSON.stringify(todo),
    });
    const json = await response.json();
    console.log(json.msg);
  }
  return (
    <div>
      <input
        className="title"
        type="text"
        placeholder="enter some title"
        onChange={changeHandler}
        value={todo.title}
      />
      <br />
      <br />
      <input
        className="description"
        type="text"
        placeholder="enter some description"
        onChange={changeHandler}
        value={todo.description}
      />
      <br />
      <br />
      <button onClick={createTodo}>Create todo</button>
    </div>
  );
}
