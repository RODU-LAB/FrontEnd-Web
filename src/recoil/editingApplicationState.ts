import { atom } from "recoil";
import { ApplicationDataTypes } from "src/types/eduApplicationTypes";

export const editingApplicationState = atom<ApplicationDataTypes>({
  key: "editingApplicationState",
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
