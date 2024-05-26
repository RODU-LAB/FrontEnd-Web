import { atom } from "recoil";
import { CreatePostTypes } from "src/types/postTypes";

export const detailPostState = atom<CreatePostTypes>({
  key: "detailPostState",
  default: {
    visited: true,
    id: 0,
    title: "",
    content: "",
    ownerName: "",
    isAnswered: false,
    isLocked: false,
    phoneNumber: "",
    answer: "",
  },
});
