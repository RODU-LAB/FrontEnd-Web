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
    throw error;
  }
}
