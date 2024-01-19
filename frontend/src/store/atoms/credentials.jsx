import { atom } from "recoil";
export const credentialsAtom = atom({
  key: "credentials",
  default: {
    email: "",
    password: "",
  },
});
