import { URL } from "../utils/config";
import axios from "axios";

export async function LoginAPI(account: string, pw: string) {
  try {
    const res = await axios.post(`${URL}/login`, {
      account: account,
      password: pw,
    });
    if (res.status === 200) {
      const accessToken = res.headers["authorization"]; // 응답헤더에서 토큰 받기
      localStorage.setItem("accessToken", accessToken);
      return true;
    }
    return false;
  } catch (error) {
    alert("로그인에 실패하셨습니다.");
    return false;
  }
}
