import Instance from "src/utils/config";

export async function getPostAdmin(id: number) {
  try {
    const res = await Instance.get(`/posts-admin/${id}`);
    const result = res.data.data;
    return result;
  } catch (error) {
    throw new Error("문의글 조회에 실패하셨습니다.");
    // alert("문의글 조회에 실패하셨습니다.");
    // console.log(error);
    // return;
  }
}

export async function answerPostAdmin(id: number, answer: string) {
  try {
    const res = await Instance.patch(`/posts-admin/${id}/answer`, {
      answer: answer,
    });
    const result = res.status;
    return result;
  } catch (error) {
    // alert("문의 답변에 실패하셨습니다.");
    // console.log(error);
    throw new Error("문의 답변에 실패하셨습니다.");
    // throw error;
  }
}

export async function deletePostAdmin(id: number) {
  try {
    const res = await Instance.delete(`/posts-admin/${id}`);
    const result = res.status;
    // alert("문의글을 삭제하였습니다.");
    return result;
  } catch (error) {
    throw new Error("문의 답변에 실패하셨습니다.");
    // alert("문의 삭제에 실패하셨습니다.");
    // console.log(error);
  }
}

/** 게시물 답변 수정 */
export async function editPostAnswerAPI(id: number, answer: string) {
  try {
    const res = await Instance.patch(`/posts-admin/${id}/answer`, {
      answer: answer,
    });
    const result = res.status;
    // alert("답변 수정이 완료되었습니다.");
    return result;
  } catch (error) {
    throw new Error("문의글 답변 수정에 실패하셨습니다.");
    // alert("문의글 답변 수정에 실패하셨습니다.");
    // console.log(error);
  }
}
