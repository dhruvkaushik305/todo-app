import { useEffect, useState } from "react";

export function Display() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch("http://localhost:3000/todo/list", {
        method: "GET",
        headers: {
          authorization: localStorage.getItem("authorization"),
        },
      }).then(async (response) => {
        const json = await response.json();
        setTodos(json.todos);
      });
    }, 100);
  }, []);
  //   console.log(todos);
  async function markCompleted(event) {
    const response = await fetch("http://localhost:3000/todo/complete", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        authorization: localStorage.getItem("authorization"),
      },
      body: JSON.stringify({ id: event.target.id }),
    });
    const json = await response.json();
    console.log(json.msg);
    // console.log(event.target.id);
  }
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo._id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <div>{todo.completed}</div>
            <div>
              {todo.completed ? (
                <br></br>
              ) : (
                <button id={todo._id} onClick={markCompleted}>
                  Mark as completed
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
