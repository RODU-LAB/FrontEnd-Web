import { atom } from "recoil";
import { DetailPostTypes } from "src/types/postTypes";

export const detailPostState = atom<DetailPostTypes>({
  key: "detailPostState",
  default: {
    visited: true,
    id: 0,
    title: "",
    content: "",
    ownerName: "",
    isAnswered: false,
    answer: "",
  },
});
