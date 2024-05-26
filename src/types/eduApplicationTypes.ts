export interface ClassGroupsDataTypes {
  id?: number;
  className: string;
  educationConcept: string;
  numberOfStudents: string;
  educationDates?: string[];
  remark: string;
  unfixed: boolean;
}

export interface ApplicationDataTypes {
  id?: number;
  name: string;
  institutionName: string;
  position: string;
  phoneNumber: string;
  email: string;
  numberOfStudents: string;
  studentRank: string;
  budget: string;
  overallRemark: string;
  classGroups: ClassGroupsDataTypes[];
}
