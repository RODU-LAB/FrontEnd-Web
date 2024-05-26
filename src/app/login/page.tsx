"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LoginAPI } from "src/api/auth";

export default function Login() {
  const router = useRouter();
  const [account, setAccount] = useState("");
  const [pw, setPW] = useState("");

  const handleLogin = async () => {
    const result = await LoginAPI(account, pw);
    if (result) {
      const refreshToken = result.data;
      localStorage.setItem("refreshToken", refreshToken);
      router.push("/");
    } else {
      alert("로그인에 실패하셨습니다.");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
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
