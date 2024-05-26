import axios from "axios";

// baseURL 설정
// export const API_URL = "http://localhost:8080";
export const API_URL = process.env.NEXT_PUBLIC_API_URL;

// Axios 인스턴스 생성
const Instance = axios.create({
  baseURL: API_URL,
});

// 인터셉터 설정
Instance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터 설정
Instance.interceptors.response.use(
  (response) => {
    // 정상 응답 처리
    return response;
  },
  async (error) => {
    // 오류 응답 처리
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      // console.log(error);
      try {
        const accessToken = sessionStorage.getItem("accessToken");
        const refreshToken = localStorage.getItem("refreshToken");
        // 새 토큰 요청 로직
        const response = await axios.post(`${API_URL}/reissue`, {
          accessToken: "Bearer " + accessToken,
          refreshToken: refreshToken,
        });
        const newAccessToken = response.headers["authorization"];

        // 로컬 스토리지에 새 토큰 저장
        sessionStorage.setItem("accessToken", newAccessToken);

        // 원래 요청의 토큰을 새 토큰으로 업데이트
        originalRequest.headers["authorization"] = `Bearer ${newAccessToken}`;

        // 원래 요청 재시도
        return axios(originalRequest);
      } catch (refreshError) {
        if (
          axios.isAxiosError(refreshError) &&
          refreshError.response?.data.code === "AUTH004"
        ) {
          throw new Error(
            "관리자 로그인 세션이 만료되었습니다. 다시 로그인 하시길 바랍니다."
          );
          // alert(
          //   "관리자 로그인 세션이 만료되었습니다.\n다시 로그인 하시길 바랍니다."
          // );
        }
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default Instance;
