import Instance from "../../utils/config";

export async function getPostAdmin(id: number) {
  try {
    const res = await Instance.get(`/posts-admin/${id}`);
    const result = res.data.data;
    return result;
  } catch (error) {
    alert("문의글 조회에 실패하셨습니다.");
    // console.log(error);
    return "error";
  }
}

export async function answerPost(id: number, answer: string) {
  try {
    const res = await Instance.patch(`/posts-admin/${id}/answer`, {
      answer: answer,
    });
    const result = res.status;
    return result;
  } catch (error) {
    alert("문의 답변에 실패하셨습니다.");
    // console.log(error);
    return "error";
  }
}

export async function deletePostAdmin(id: number) {
  try {
    const res = await Instance.delete(`/posts-admin/${id}`);
    const result = res.status;
    return result;
  } catch (error) {
    alert("문의 삭제에 실패하셨습니다.");
    // console.log(error);
    return "error";
  }
}
