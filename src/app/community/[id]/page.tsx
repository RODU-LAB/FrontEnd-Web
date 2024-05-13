"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useRecoilState, useResetRecoilState } from "recoil";
import { detailPostState } from "src/recoil/detailPostState";
import { DetailPostTypes } from "src/types/postTypes";
// import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { getPostAPI, deletePostAPI, getAllPosts } from "src/api/post/postAPI";
import {
  answerPostAdmin,
  getPostAdmin,
  deletePostAdmin,
  editPostAnswerAPI,
} from "src/api/post/postAdminAPI";
import { useAdminCheck } from "src/utils/decode";

import YesNoModal from "src/components/modal/YesNoModal";
import PwInputModal from "src/components/modal/PwInputModal";
import Banner from "src/components/BackgroundBanner";
import backgroundImg from "/public/images/instructor3.jpg";
import Delete from "/public/images/delete.png";

export default function DetailPost({ params }: { params: { id: string } }) {
  const router = useRouter();
  const postId = Number(params.id);
  const isAdmin = useAdminCheck();
  const [post, setPost] = useRecoilState(detailPostState);
  const resetPost = useResetRecoilState(detailPostState);

  const [data, setData] = useState<DetailPostTypes>({
    id: 0,
    title: "",
    content: "",
    ownerName: "",
    isAnswered: false,
    answer: "",
  });

  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);

  const [pwStatus, setPwStatus] = useState("");
  const [answer, setAnswer] = useState("");
  const [pw, setPw] = useState("");

  const [isAdminEditMode, setIsAdminEditMode] = useState(false);

  useEffect(() => {
    if (post.visited) {
      if (isAdmin) {
        const getPost = async () => {
          const result = await getPostAdmin(postId);
          if (result) {
            setData(result);
            setPost(result);
          }
        };
        getPost();
      } else {
        const isPassword = async () => {
          const result = await getPostAPI(postId);
          resetPost();
          if (result) {
            setData({ ...result, isLocked: false });
          } else {
            setPwStatus("load");
          }
        };
        isPassword();
      }
    } else {
      setData(post);
    }

    // if (post.visited) {
    // } else {
    //   if (!post.isAnswered && isAdmin) {
    //     const getPost = async () => {
    //       const result = await getPostAdmin(post.id);
    //       setData(result);
    //     };
    //     getPost();
    //   }
    // }
    // eslint-disable-next-line
  }, []);

  /** 게시글 로드 (비밀번호 입력 후) */
  const handleLoadPost = async () => {
    const result = await getPostAPI(postId, pw);
    if (result) {
      setData({ ...result, isLocked: true });
      setPost({ ...result, isLocked: true, visited: true });
      setPw("");
      setPwStatus("");
    }
  };

  /** 문의 답변하기 */
  const handleAnswer = async () => {
    if (!isAdminEditMode) {
      const result = await answerPostAdmin(postId, answer);
      if (result === 200) {
        setData((prev) => ({ ...prev, answer: answer, isAnswered: true }));
        setPost((prev) => ({ ...prev, answer: answer, isAnswered: true }));
      }
    } else {
      const result = await editPostAnswerAPI(postId, answer);
      if (result === 200) {
        setData((prev) => ({ ...prev, answer: answer }));
        setPost((prev) => ({ ...prev, answer: answer }));
        setIsAdminEditMode(false);
      }
    }
  };

  const handleDeletePost = async () => {
    const result = await deletePostAPI(postId, pw);
    if (result === 200) {
      alert("문의글 삭제가 완료되었습니다.");
      // setData({
      //   title: "",
      //   content: "",
      //   ownerName: "",
      //   id: 0,
      //   isAnswered: false,
      //   answer: "",
      // });
      // setDeleteModal(false);
      // setPwStatus("");
      // setPw("");
      router.push("/community");
    }
  };

  const handleEditPost = () => router.push("/community/" + postId + "/edit");
  const handlePassword = () => {
    switch (pwStatus) {
      case "delete":
        handleDeletePost();
        break;
      case "edit":
        handleEditPost();
        break;
      case "load":
        handleLoadPost();
        break;
    }
  };

  //** 문의 수정 삭제 시 관리자인지 확인 */
  const handleCheckStatus = async (status: string) => {
    setDeleteModal(false);
    setEditModal(false);
    if (status === "delete") {
      // 관리자 계정
      if (isAdmin) {
        const result = await deletePostAdmin(data.id);
        if (result === 200) router.push("/community");
      } else {
        setPwStatus("delete");
      }
    }
    if (status === "edit") {
      // 관리자 계정
      if (isAdmin) {
        router.push("/community/" + postId + "/edit");
      } else {
        setPwStatus("edit");
      }
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>커뮤니티 게시판 | RODU</title>
      </Helmet> */}
      <Banner
        title="커뮤니티 게시판"
        subTitle="Community bulletin board"
        content="로봇지식을 공유하는 커뮤니티 입니다."
        backgroundImg={backgroundImg.src}
      />
      <div className="w-full py-[90px] flex items-center flex-col">
        <div className="max-w-[65.571rem] w-full">
          <div className="w-full flex justify-between items-end pr-2 pb-[12px]">
            <p className="font-medium text-[34px]">{data.title}</p>
            <p className="body2 text-rodu-grey">{data.ownerName}</p>
          </div>
          <p className="whitespace-pre-line py-[34px] border-y-[1.5px] border-y-rodu-black">
            {data.content}
          </p>

          <div className="flex justify-end gap-[20px] mt-[24px]">
            {!isAdmin && !data.isAnswered && data.isLocked && (
              // 게시물 수정 버튼
              <button
                className="h-[28px] w-[80px] rounded-[15px] bg-[#0072B9]"
                onClick={() => setEditModal(true)}
              >
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  size="lg"
                  className="text-white"
                />
              </button>
            )}

            {!data.isAnswered && data.isLocked && (
              // 게시물 삭제 버튼
              <button
                className="h-[28px] w-[80px] rounded-[15px] bg-rodu-medium flex justify-center items-center"
                onClick={() => setDeleteModal(true)}
              >
                <img src={Delete.src} alt="delete" className="h-[20px]" />
              </button>
            )}
          </div>

          {/* 답변이 있다면 답변 내용 보여주기
          아닐 때 관리자 로그인이 되어 있다면 문의 답변 창 띄우기 */}
          <div className="mt-[100px]">
            {data.isAnswered && !isAdminEditMode ? (
              <>
                <div className="w-full flex justify-between items-end pr-2 pb-[12px]">
                  <p className="font-bold text-[34px] text-rodu-medium">답변</p>
                </div>
                <p className="whitespace-pre-line py-[34px] border-y-[1.5px] border-y-rodu-black">
                  {data.answer}
                </p>
                <div className="flex justify-end gap-[20px] mt-[24px]">
                  <button
                    className="h-[28px] w-[80px] rounded-[15px] bg-[#0072B9] text-white font-semibold"
                    onClick={() => {
                      setAnswer(data.answer);
                      setIsAdminEditMode(true);
                    }}
                  >
                    답변 수정
                  </button>
                </div>
              </>
            ) : isAdmin ? (
              <div className="px-2">
                <div className="border p-3 bg-[#fafafa] rounded mt-6">
                  <div>
                    <p className="font-bold text-[18px] text-rodu-black ml-2 mb-1">
                      답변 하기
                    </p>
                  </div>
                  <textarea
                    className="w-full h-[10rem] border p-2 mt-2 rounded outline-[#949494]"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      setAnswer(target.value);
                    }}
                    {...(isAdminEditMode ? { value: answer } : {})}
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-rodu-medium rounded-[5px] text-white px-[10px] py-2 mr-3 mt-3 font-medium"
                      onClick={handleAnswer}
                    >
                      답변 작성
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <YesNoModal
        isOpen={deleteModal || editModal}
        title={`게시물을 ${deleteModal ? "삭제" : "수정"}하겠습니까?`}
        yesHandler={() =>
          deleteModal ? handleCheckStatus("delete") : handleCheckStatus("edit")
        }
        noHandler={() => {
          setDeleteModal(false);
          setEditModal(false);
        }}
      />
      <PwInputModal
        isOpen={pwStatus !== ""}
        enterPress={handlePassword}
        onInput={setPw}
        onClickXmark={() => {
          setDeleteModal(false);
          setEditModal(false);
          setPwStatus("");
          setPw("");
        }}
      />
    </>
  );
}
