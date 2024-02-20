import { atom } from "recoil";

export const sessionIdAtom = atom({
  key: "sessionIdAtom",
  default: { id: "", time: new Date(), phoneNumber: "" },
});
