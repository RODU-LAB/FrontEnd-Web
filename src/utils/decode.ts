import { jwtDecode, JwtPayload } from "jwt-decode";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "./state";

interface CustomJwtPayload extends JwtPayload {
  roles: Array<{ authority: string }>;
}

export function useAdminCheck() {
  const token = useRecoilValue(accessTokenState);
  const decoded = token ? (jwtDecode(token) as CustomJwtPayload) : undefined;
  return decoded && decoded.roles[0].authority === "ROLE_ADMIN";
}
