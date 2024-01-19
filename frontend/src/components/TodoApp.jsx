import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { AppBar } from "./AppBar";
import { Signup } from "./Signup";
import { Signin } from "./Signin";
import { Todos } from "./Todos";
export function TodoApp() {
  //   const signedIn = false;
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
