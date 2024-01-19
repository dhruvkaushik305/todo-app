import { useRecoilState, useSetRecoilState } from "recoil";
import { credentialsAtom } from "../store/atoms/credentials";
import { loggingAtom } from "../store/atoms/logging";
import { useNavigate } from "react-router-dom";

export function Signin() {
  const navigator = useNavigate();
  const setter = useSetRecoilState(loggingAtom);
  const [credentials, setCredentials] = useRecoilState(credentialsAtom);
  function changeHandler(event) {
    setCredentials({
      ...credentials,
      [event.target.className]: event.target.value,
    });
    // setCredentials((prevCredentials) => ({
    //   ...prevCredentials,
    //   [event.target.className]: event.target.value,
    // }));
  }
  async function clickHandler() {
    let response = await fetch("http://localhost:3000/auth/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (response.status == 401) {
      alert("user does not exist, please sign up!");
    } else {
      const result = await response.json();
      localStorage.setItem("authorization", "bearer " + result.token);
      setter(true);
      navigator("/");
    }
    // console.log(response);
  }
  return (
    <div>
      <label>
        Email:&nbsp;
        <input
          className={"email"}
          type="text"
          placeholder="please enter a valid email"
          onChange={changeHandler}
          value={credentials.email}
        />
      </label>
      <br />
      <br />
      <label>
        Password:&nbsp;
        <input
          className={"password"}
          type="password"
          placeholder="minimum 4 characters"
          onChange={changeHandler}
          value={credentials.password}
        />
      </label>
      <br />
      <br />
      <button onClick={clickHandler}>Sign In</button>
    </div>
  );
}
