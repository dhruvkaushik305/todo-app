// import './App.css'

import { useState } from "react";
import { Signin } from "./components/Signin";
import { Signup } from "./components/signup";
import { Todos } from "./components/Todos";

function App() {
  const [signed, setSigned] = useState(false);
  return (
    <>
      {signed ? <Todos /> : <Signin setter={setSigned} />}
      {/* <Signup /> */}
    </>
  );
}

export default App;
