import axios from "axios";
import Instance from "../../utils/config";
import { PostDataTypes } from "../../types/postTypes";

/** 문의글 전체 조회 */
export async function getAllPosts(page: number) {
  try {
    const response = await Instance.get(`/posts?page=${page}`);
    const result = response.data.data;
    return result;
  } catch (error) {
    alert("문의글 전체 조회에 실패하셨습니다.");
    // console.error(error);
  }
}

/** 문의글 조회 */
export async function getPost(id: number, password?: string) {
  try {
    const url = `/posts/${id}${password ? "?password=" + password : ""}`;
    const res = await Instance.get(url);
    const result = res.data.data;
    return result;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data.code === "POST001") {
      alert("비밀번호가 틀렸습니다.");
    } else {
      alert("문의글 조회에 실패하셨습니다.");
    }
    return "error";
  }
}

/** 문의글 생성 */
export async function createPostAPI(data: PostDataTypes) {
  try {
    const res = await Instance.post("/posts/", data);
    return res.status;
  } catch (error) {
    alert("문의 신청에 실패하셨습니다.");
    // console.error(error);
    throw error;
  }
}

/** 문의글 삭제 */
export async function deletePostAPI(id: number, password: string) {
  try {
    const res = await Instance.delete("/posts/" + id + "?password=" + password);
    return res.status;
  } catch (error) {
    alert("문의글 삭제에 실패하셨습니다.");
    // console.error(error);
    throw error;
  }
}

/** 문의글 수정 */
export async function updatePostAPI(
  id: number,
  password: string,
  data: PostDataTypes
) {
  try {
    const res = await Instance.patch(
      "/posts/" + id + "?password=" + password,
      data
    );
    return res.status;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response?.data.code === "POST001") {
      alert("비밀번호를 다시 확인하십시오.");
    } else {
      alert("문의글 수정에 실패하셨습니다.");
    }
  }
}
