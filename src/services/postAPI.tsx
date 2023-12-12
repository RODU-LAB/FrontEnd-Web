import { URL } from "../utils/config";
import axios from "axios";

interface createPost {
  name: string;
  institution: string;
  phoneNumber: string;
  email: string;
  pw: string;
  title: string;
  content: string;
}

/** 문의글 전체 조회 */
export async function getAllPosts(page: number) {
  try {
    const response = await axios.get(`${URL}/posts?page=${page}`);
    const result = response.data.data;
    return result;
  } catch (error) {
    alert("문의글 전체 조회에 실패하셨습니다.");
    console.error(error);
    throw error;
  }
}

/** 문의글 조회 */
export async function getPost(id: number) {
  try {
    const res = await axios.get(`${URL}/posts/${id}`);
    const result = res.data.data;
    return result;
  } catch (error) {
    alert("문의글 조회에 실패하셨습니다.");
    return error;
    // console.error(error);
  }
}

/** 문의글 생성 */
export async function createPostAPI(postData: createPost) {
  try {
    const { name, institution, phoneNumber, pw, title, content, email } =
      postData;

    const res = await axios.post(URL + "/posts/", {
      ownerName: name,
      institution: institution,
      phoneNumber: phoneNumber,
      password: pw,
      title: title,
      content: content,
      email: email,
    });
    return res.data.code;
  } catch (error) {
    alert("문의 신청에 실패하셨습니다.");
    console.error(error);
    throw error;
  }
}

/** 문의글 삭제 */
export async function deletePostAPI(id: number) {
  try {
    const res = await axios.delete(URL + "/posts/" + id);
    return res.data.code;
  } catch (error) {
    alert("문의글 삭제에 실패하셨습니다.");
    console.error(error);
    throw error;
  }
}
