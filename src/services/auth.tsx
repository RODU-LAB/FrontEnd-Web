import { URL } from "../utils/config";
import axios from "axios";

export function LoginAPI(account: string, pw: string) {
  axios
    .post(`${URL}/login`, { account: account, password: pw })
    .then((res) => {
      if (res.status === 200) {
        const accessToken = res.headers["authorization"]; // 응답헤더에서 토큰 받기
        localStorage.setItem("accessToken", accessToken);
        console.log("로그인 성공");
        return accessToken;
      }
    })
    .catch((error) => {
      alert("로그인에 실패하셨습니다.");
    });
}
