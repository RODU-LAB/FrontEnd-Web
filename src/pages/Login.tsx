import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginAPI } from "../services/auth";

export function Login() {
  const navigator = useNavigate();
  const [account, setAccount] = useState("");
  const [pw, setPW] = useState("");

  const handleLogin = async () => {
    const result = await LoginAPI(account, pw);
    const refreshToken = result.data;
    localStorage.setItem("refreshToken", refreshToken);
    if (result) {
      navigator("/");
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      <p className="body1">관리자 로그인</p>
      <p></p>
      <div className="flex gap-2 my-3">
        <p className="w-[60px]">아이디</p>
        <input
          className="border p-1"
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setAccount(target.value);
          }}
        />
      </div>
      <div className="flex gap-2">
        <p className="w-[60px]">비밀번호</p>
        <input
          type="password"
          className="border p-1"
          onInput={(e) => {
            const target = e.target as HTMLInputElement;
            setPW(target.value);
          }}
        />
      </div>
      <button
        type="button"
        onClick={handleLogin}
        className="my-2 p-2 bg-rodu-medium text-white rounded"
      >
        로그인
      </button>
    </div>
  );
}
