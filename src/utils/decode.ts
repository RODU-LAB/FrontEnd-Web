import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  roles: Array<{ authority: string }>;
}

export function useAdminCheck() {
  const accessToken =
    typeof window !== "undefined"
      ? sessionStorage.getItem("accessToken")
      : null;
  const decoded = accessToken
    ? (jwtDecode(accessToken) as CustomJwtPayload)
    : undefined;
  return decoded && decoded.roles[0].authority === "ROLE_ADMIN";
}
