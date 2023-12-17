import { useEffect, useState } from "react";
import { LoginAPI } from "../services/auth";

export function Login() {
  const [account, setAccount] = useState("");
  const [pw, setPW] = useState("");

  const handleLogin = async () => {
    const result = LoginAPI(account, pw);
    // console.log(result.headers.authorization);
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
