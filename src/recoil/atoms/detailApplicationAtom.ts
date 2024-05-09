import { atom } from "recoil";
import { ApplicationDataTypes } from "src/types/eduApplicationTypes";

export const detailApplicationAtom = atom<ApplicationDataTypes>({
  key: "detailApplicationState",
  default: {
    name: "",
    institutionName: "",
    position: "",
    phoneNumber: "",
    email: "",
    numberOfStudents: "",
    studentRank: "",
    budget: "",
    overallRemark: "",
    classGroups: [
      {
        className: "",
        educationConcept: "",
        educationDates: [],
        numberOfStudents: "",
        remark: "",
        unfixed: false,
      },
    ],
  },
});
