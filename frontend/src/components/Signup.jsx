import { useRecoilState } from "recoil";
import { credentialsAtom } from "../store/atoms/credentials";

export function Signup() {
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
    let response = await fetch("http://localhost:3000/setup/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    if (response.status == 401) {
      alert("User already exists, please sign in!");
    }
    response = await response.json();
    console.log(response);
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
      <button onClick={clickHandler}>Sign Up</button>
    </div>
  );
}
