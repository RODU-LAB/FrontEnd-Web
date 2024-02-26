import { atom } from "recoil";
import { ApplyFormType } from "../../types/applyFormTypes";

export const applyFormAtom = atom<ApplyFormType>({
  key: "applyFormAtom",
  default: {
    name: "",
    institutionName: "",
    numberOfStudents: "",
    overallRemark: "",
    phoneNumber: "",
    position: "",
    studentRank: "",
    budget: "",
    email: "",
    classGroups: [
      {
        className: "",
        educationConcept: "",
        numberOfStudents: "",
        remark: "",
        unfixed: false,
        educationDates: [],
      },
    ],
  },
});
