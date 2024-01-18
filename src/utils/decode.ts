import { jwtDecode, JwtPayload } from "jwt-decode";

interface CustomJwtPayload extends JwtPayload {
  roles: Array<{ authority: string }>;
}

export function useAdminCheck() {
  const token = localStorage.getItem("accessToken");
  const decoded = token ? (jwtDecode(token) as CustomJwtPayload) : undefined;
  return decoded && decoded.roles[0].authority === "ROLE_ADMIN";
}
