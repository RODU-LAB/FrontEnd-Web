import axios from "axios";
import Instance from "../../utils/config";

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
    const response = await Instance.get(`/posts?page=${page}`);
    const result = response.data.data;
    return result;
  } catch (error) {
    alert("문의글 전체 조회에 실패하셨습니다.");
    console.error(error);
    throw error;
  }
}

/** 문의글 조회 */
export async function getPost(id: number, password: string) {
  try {
    const res = await Instance.get(`/posts/${id}?password=${password}`);
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
export async function createPostAPI(postData: createPost) {
  try {
    const { name, institution, phoneNumber, pw, title, content, email } =
      postData;

    const res = await Instance.post("/posts/", {
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
    const res = await Instance.delete("/posts/" + id);
    return res.data.code;
  } catch (error) {
    alert("문의글 삭제에 실패하셨습니다.");
    console.error(error);
    throw error;
  }
}
