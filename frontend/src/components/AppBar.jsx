import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loggingAtom } from "../store/atoms/logging";
export function AppBar() {
  const [logged, setLogged] = useRecoilState(loggingAtom);
  const navigator = useNavigate();
  function logoutHandler() {
    setLogged(false);
    localStorage.removeItem("authorization");
    navigator("/");
  }
  return (
    <div>
      {logged ? (
        <button onClick={logoutHandler}>Logout</button>
      ) : (
        <div>
          <button
            onClick={() => {
              navigator("/signin");
            }}
          >
            Sign in
          </button>{" "}
          &nbsp;
          <button
            onClick={() => {
              navigator("signup");
            }}
          >
            Sign up
          </button>
        </div>
      )}
    </div>
  );
}
