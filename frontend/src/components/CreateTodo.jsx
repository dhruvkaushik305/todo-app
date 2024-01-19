import { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { todoAtom } from "../store/atoms/todo";
import { todosAtom } from "../store/atoms/todos";

export function CreateTodo() {
  const setTodos = useSetRecoilState(todosAtom);
  const [todo, setTodo] = useRecoilState(todoAtom);
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
    const newTodo = {
      title: todo.title,
      description: todo.description,
      completed: false,
    };
    setTodos((old) => {
      return [...old, newTodo];
    });
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
