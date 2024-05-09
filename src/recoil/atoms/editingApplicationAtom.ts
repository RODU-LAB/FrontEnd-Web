import { atom } from "recoil";
import { EditingApplicationTypes } from "src/types/editingApplicationTypes";

export const editingApplicationAtom = atom<EditingApplicationTypes>({
  key: "editingApplicationAtom",
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
