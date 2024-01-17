import { useEffect, useState } from "react";

export function Todos() {
  const [todo, setTodo] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //useEffect to fetch todos
  const todos = useEffect(() => {
    console.log(localStorage.getItem("authorization"));
    fetch("http://localhost:3000/todo/list", {
      method: "GET",
      headers: {
        authorization: localStorage.getItem("authorization"),
      },
    }).then((response) => {
      response.json().then((res) => {
        console.log(res.todos);
      });
    });
  }, [todo]);
  function titleHandler(event) {
    setTitle(event.target.value);
  }
  function descriptionHandler(event) {
    setDescription(event.target.value);
  }
  function clickHandler() {
    const todo = {
      title: title,
      description: description,
    };
    setTodo(async () => {
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
    });
  }
  return (
    <div>
      <input
        className="title"
        type="text"
        placeholder="enter some title"
        onChange={titleHandler}
        value={title}
      />
      <br />
      <br />
      <input
        className="description"
        type="text"
        placeholder="enter some description"
        onChange={descriptionHandler}
        value={description}
      />
      <br />
      <br />
      <button onClick={clickHandler}>Create todo</button>
      <div>{/* {todo} */}</div>
    </div>
  );
}
