import { URL } from "../utils/config";
import axios from "axios";

interface ApplyTypes {
  sessionId: string;
  name: string;
  institutionName: string;
  budget: number;
  numberOfStudents: number;
  overallRemark: string;
  phoneNumber: string;
  position: string;
  studentRank: string;
  email: string;
}

interface ClassesDataTypes {
  sessionId: string;
  applicationId: number;
  className: string;
  educationConcept: string;
  educationDates: string[] | null[];
  numberOfStudents: number | undefined;
  remark: string;
  unfixed: boolean;
}

/** 교육 신청·조회 - 카카오톡 인증번호 발송 */
export async function sendAuthCodeAPI(phoneNumber: string) {
  try {
    const res = await axios.post(`${URL}/message/send`, {
      phone: phoneNumber,
      messageType: "APPLY",
    });
    return res.status;
  } catch (error) {
    alert("인증번호 발송에 실패하였습니다.");
    // console.error(error);
    return false;
    // throw error;
  }
}

/** 교육 신청·조회 - 카카오톡 인증번호 인증하기 */
export async function verifyAuthCodeAPI(authNum: string, phoneNumber: string) {
  try {
    const res = await axios.post(`${URL}/message/verify2`, {
      authNum: authNum,
      phone: phoneNumber,
      messageType: "APPLY",
    });
    return res.headers["session-id"];
  } catch (error) {
    alert("인증번호 인증에 실패하였습니다.");
    // console.error(error);
    return false;
    // throw error;
  }
}

/** 교육 신청 */
export async function applyAPI(applyData: ApplyTypes) {
  const {
    sessionId,
    name,
    institutionName,
    numberOfStudents,
    overallRemark,
    phoneNumber,
    position,
    studentRank,
    budget,
    email,
  } = applyData;
  try {
    const res = await axios.post(
      `${URL}/education-application`,
      {
        name: name,
        institutionName: institutionName,
        budget: budget,
        email: email,
        numberOfStudents: numberOfStudents,
        overallRemark: overallRemark,
        phoneNumber: phoneNumber,
        position: position,
        studentRank: studentRank,
      },
      {
        headers: {
          "session-id": sessionId,
        },
      }
    );
    return res.data.data.id;
  } catch (error) {
    alert("교육 신청에 실패하였습니다.");
    console.error(error);
    // throw error;
    return false;
  }
}

/** 신청한 교육에 학급정보 추가 */
export async function addClassesDataAPI(classesData: ClassesDataTypes) {
  const {
    sessionId,
    applicationId,
    className,
    educationConcept,
    educationDates,
    numberOfStudents,
    remark,
    unfixed,
  } = classesData;
  try {
    const res = await axios.post(
      `${URL}/education-application/${applicationId}/classGroup`,
      {
        className: className,
        educationConcept: educationConcept,
        educationDates: educationDates,
        numberOfStudents: numberOfStudents,
        remark: remark,
        unfixed: unfixed,
      },
      {
        headers: {
          "session-id": sessionId,
        },
      }
    );
    console.log("학급 추가 단계");
    console.log(res);
    return res.status;
  } catch (error) {
    alert("교육 신청에 실패하였습니다.");
    // console.error(error);
    // throw error;
    return false;
  }
}

/** 신청한 교육 삭제 */
export async function deleteApplicationAPI(
  applicationId: number,
  sessionId: string,
  status: string
) {
  try {
    const res = await axios.delete(
      `${URL}/education-application/${applicationId}`,
      {
        headers: {
          "session-id": sessionId,
        },
      }
    );
    return res.status;
  } catch (error) {
    if (status === "delete") {
      alert("신청 교육 삭제에 실패하였습니다.");
    } else {
      alert("초기화 단계에서 오류가 발생하였습니다.");
    }
    // console.error(error);
    // throw error;
    return false;
  }
}

/** 교육 신청 조회 */
export async function findApplicationAPI(phoneNum: string, sessionId: string) {
  try {
    const response = await axios.get(URL + "/education-application", {
      params: {
        phoneNumber: phoneNum,
      },
      headers: {
        "session-id": sessionId,
      },
    });
    const result = response.data.data;
    return result;
  } catch (error) {
    alert("교육 신청 조회에 실패하셨습니다.");
    console.error(error);
    return false;
  }
}
