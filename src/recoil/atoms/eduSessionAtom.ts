import { atom } from "recoil";

export const eduSessionAtom = atom({
  key: "eduSessionAtom",
  default: { id: "", time: new Date(), phoneNumber: "" },
});
