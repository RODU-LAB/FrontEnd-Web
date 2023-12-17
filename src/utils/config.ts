import axios from "axios";

// baseURL 설정
export const URL = "http://localhost:8080";
// export const URL = process.env.REACT_APP_API_URL;

// Axios 인스턴스 생성
const Instance = axios.create({
  baseURL: URL,
});

// 인터셉터 설정
Instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Instance;
