interface ClassGroupsDataTypes {
  id: number;
  className: string;
  educationConcept: string;
  numberOfStudents: number;
  educationDates: string[] | null[];
  remark: string;
  unfixed: boolean;
}

export interface ApplicationDataTypes {
  id: number;
  name: string;
  institutionName: string;
  position: string;
  phoneNumber: string;
  email: string;
  numberOfStudents: number;
  studentRank: string;
  budget: number;
  overallRemark: string;
  classGroups: ClassGroupsDataTypes;
}
