import { CreateTodo } from "./CreateTodo";
import { Display } from "./Display";

export function Todos() {
  return (
    <div>
      <Display />
      <br></br>
      <br></br>
      <CreateTodo />
    </div>
  );
}
