import axios from "axios";
import { API_URL } from "src/utils/config";

export async function LoginAPI(account: string, pw: string) {
  try {
    const res = await axios.post(`${API_URL}/login`, {
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
