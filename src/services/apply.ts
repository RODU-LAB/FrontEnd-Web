import { URL } from "../utils/config";
import axios from "axios";

/** 교육 신청 - 카카오톡 인증번호 발송 */
export async function sendAuthCodeAPI(phoneNumber: string) {
  try {
    const res = await axios.post(`${URL}/message/send`, {
      phone: phoneNumber,
      messageType: "TEMP",
    });
    return res.status;
  } catch (error) {
    alert("인증번호 발송에 실패하였습니다.");
    console.error(error);
    return false;
    // throw error;
  }
}

/** 교육 신청 - 카카오톡 인증번호 인증하기 */
export async function verifyAuthCodeAPI(authNum: string, phoneNumber: string) {
  try {
    const res = await axios.post(`${URL}/message/verify2`, {
      authNum: authNum,
      phone: phoneNumber,
      messageType: "TEMP",
    });
    return res.headers["session-id"];
  } catch (error) {
    alert("인증번호 인증에 실패하였습니다.");
    console.error(error);
    return false;
    // throw error;
  }
}
