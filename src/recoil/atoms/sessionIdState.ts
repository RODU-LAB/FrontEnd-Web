import { atom } from "recoil";

export const sessionIdState = atom({
  key: "sessionIdState",
  default: { id: "", time: new Date(), phoneNumber: "" },
});
