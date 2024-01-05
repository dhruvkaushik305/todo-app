import React from "react";
export function CreateTodo() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  return (
    <div>
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(event) => {
          // console.log(event);
          setTitle(event.target.value);
          // console.log(title);
        }}
      />{" "}
      <br></br>
      <input
        type="text"
        placeholder="description"
        value={description}
        onChange={(event) => {
          setDescription(event.target.value);
        }}
      />{" "}
      <br></br>
      <button
        onClick={() => {
          console.log(title);
          console.log(description);
          // fetch("http://localhost:3000/todo", {
          //   method: "POST",
          //   headers: {
          //     "Content-Type": "application/json",
          //     // "Content-Length": 50,
          //   },
          //   body: JSON.stringify({
          //     title: title,
          //     description: description,
          //   }),
          // })
          // .then(() => {
          //   console.log("todo-added");
          //   // alert("Todo added");
          // })
          // .catch((err) => {
          //   console.log(err);
          // });
        }}
      >
        Add todo
      </button>
    </div>
  );
}
