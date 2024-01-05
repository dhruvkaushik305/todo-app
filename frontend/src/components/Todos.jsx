export function Todos({ todos }) {
  // console.log({ todos });
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            {todo.completed == false ? (
              <button>Mark as completed</button>
            ) : (
              <div>Completed</div>
            )}
          </div>
        );
      })}
    </div>
  );
}
