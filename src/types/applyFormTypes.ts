export interface ClassGroupTypes {
  className: string;
  educationConcept: string;
  numberOfStudents: string;
  educationDates?: string[];
  remark: string;
  unfixed: boolean;
}

export interface ApplyFormType {
  name: string;
  institutionName: string;
  numberOfStudents: string;
  overallRemark: string;
  phoneNumber: string;
  position: string;
  studentRank: string;
  budget: string;
  email: string;
  classGroups: ClassGroupTypes[];
}
