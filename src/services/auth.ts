import { URL } from "../utils/config";
import axios from "axios";

export async function LoginAPI(account: string, pw: string) {
  try {
    const res = await axios.post(`${URL}/login`, {
      account: account,
      password: pw,
    });
    const accessToken = res.headers["authorization"];
    sessionStorage.setItem("accessToken", accessToken);
    return res;
  } catch (error) {
    alert("로그인에 실패하셨습니다.");
    throw error;
  }
}
