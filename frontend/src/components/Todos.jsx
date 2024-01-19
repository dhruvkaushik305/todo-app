import { CreateTodo } from "./CreateTodo";
import { Display } from "./Display";
import { useRecoilValue } from "recoil";
import { loggingAtom } from "../store/atoms/logging";
export function Todos() {
  const logged = useRecoilValue(loggingAtom);
  console.log(logged);
  return (
    <div>
      {logged ? (
        <div>
          <Display />
          <br></br>
          <br></br>
          <CreateTodo />
        </div>
      ) : (
        <div>This is a landing page. Signin to see your todos</div>
      )}
    </div>
  );
}
