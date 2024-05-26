"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CreatePostTypes } from "src/types/postTypes";
// import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { getPostAPI, deletePostAPI } from "src/api/post/postAPI";
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

  const [data, setData] = useState<CreatePostTypes>({
    id: 0,
    title: "",
    content: "",
    ownerName: "",
    isAnswered: false,
    answer: "",
  });

  // 비밀번호 입력 창이 떴을 때 모드
  const [loadMode, setLoadMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const [answer, setAnswer] = useState("");
  const [pw, setPw] = useState("");

  // 이미 답변 수정할 때 사용 (답변 등록과 수정 API가 똑같아서 state로 추가 관리)
  const [isAdminEditMode, setIsAdminEditMode] = useState(false);

  useEffect(() => {
    if (isAdmin) {
      const getPost = async () => {
        const result = await getPostAdmin(postId);
        if (result) {
          setData(result);
        }
      };
      getPost();
    } else {
      const getPost = async () => {
        const result = await getPostAPI({ id: postId, isLoadCheck: true });
        if (result) setData(result);
        else setLoadMode(true);
      };
      setLoadMode(true);
      getPost();
    }
  }, [isAdmin, postId]);

  /** 게시글 로드 (비밀번호 입력 후) */
  const handleLoadPost = async () => {
    const result = await getPostAPI({ id: postId, password: pw });
    if (result) {
      setData(result);
      setPw("");
      setLoadMode(false);
    }
  };

  /** 문의 답변하기 */
  const handleAnswer = async () => {
    if (!isAdminEditMode) {
      const result = await answerPostAdmin(postId, answer);
      if (result === 200) {
        setData((prev) => ({ ...prev, answer: answer, isAnswered: true }));
      }
    } else {
      const result = await editPostAnswerAPI(postId, answer);
      if (result === 200) {
        setData((prev) => ({ ...prev, answer: answer }));
        setIsAdminEditMode(false);
      }
    }
  };

  const handleDeletePost = async () => {
    const result = await deletePostAPI(postId, pw);
    if (result === 200) {
      alert("문의글 삭제가 완료되었습니다.");
      router.push("/community");
    }
  };

  const handleEditPost = () => router.push("/community/" + postId + "/edit");
  const handlePassword = () => {
    loadMode && handleLoadPost();
    deleteMode && handleDeletePost();
    editMode && handleEditPost();
  };

  //** 문의 수정 삭제 시 관리자인지 확인 */
  const handleCheckStatus = async (status: string) => {
    setDeleteMode(false);
    setEditMode(false);
    if (status === "delete") {
      // 관리자 계정
      if (isAdmin) {
        const result = await deletePostAdmin(postId);
        if (result === 200) router.push("/community");
      } else {
        setDeleteMode(true);
      }
    }
    if (status === "edit") {
      // 관리자 계정
      if (isAdmin) {
        router.push("/community/" + postId + "/edit");
      } else {
        setEditMode(true);
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
                onClick={() => setEditMode(true)}
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
                onClick={() => setDeleteMode(true)}
              >
                <Image
                  src={Delete.src}
                  alt="delete"
                  height={20}
                  width={20}
                  className="object-contain"
                />
              </button>
            )}
          </div>

          {/* 답변이 있다면 답변 내용 보여주기
          아닐 때 관리자 로그인이 되어 있다면 문의 답변 창 띄우기 */}
          <div className="mt-[100px]">
            {data.isAnswered ? (
              <>
                <div className="w-full flex justify-between items-end pr-2 pb-[12px]">
                  <p className="font-bold text-[34px] text-rodu-medium">답변</p>
                </div>
                <p className="whitespace-pre-line py-[34px] border-y-[1.5px] border-y-rodu-black">
                  {data.answer}
                </p>
                {data.isAnswered && isAdminEditMode && (
                  <div className="flex justify-end gap-[20px] mt-[24px]">
                    <button
                      className="h-[28px] w-[80px] rounded-[15px] bg-[#0072B9] text-white font-semibold"
                      onClick={() => {
                        // setAnswer(data.answer);
                        setIsAdminEditMode(true);
                      }}
                    >
                      답변 수정
                    </button>
                  </div>
                )}
              </>
            ) : (
              isAdmin && (
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
              )
            )}
          </div>
        </div>
      </div>
      <YesNoModal
        isOpen={deleteMode || editMode}
        title={`게시물을 ${deleteMode ? "삭제" : "수정"}하겠습니까?`}
        yesHandler={() =>
          deleteMode ? handleCheckStatus("delete") : handleCheckStatus("edit")
        }
        noHandler={() => {
          setDeleteMode(false);
          setEditMode(false);
        }}
      />
      <PwInputModal
        isOpen={loadMode || deleteMode || editMode}
        enterPress={handlePassword}
        onInput={setPw}
        onClickXmark={() => {
          setLoadMode(false);
          setDeleteMode(false);
          setEditMode(false);
          setPw("");
        }}
      />
    </>
  );
}
