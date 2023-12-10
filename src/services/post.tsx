import { URL } from "../utils/config";
import axios from "axios";

/** 문의글 전체 조회 */
export function getPosts(page: number) {
  try {
    const res = axios.get(`${URL}/posts?page=${page}`);
    console.log(res);
  } catch (error) {
    throw error;
  }
}
