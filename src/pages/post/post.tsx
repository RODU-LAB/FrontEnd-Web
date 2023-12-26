import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { deletePostAPI } from "../../services/post/postAPI";
import {
  answerPost,
  getPostAdmin,
  deletePostAdmin,
} from "../../services/post/postAdminAPI";
import { handleAdminCheck } from "../../utils/decode";

import { YesNoModal } from "../../components/modal/YesNoModal";
import { PwInputModal } from "../../components/modal/PwInputModal";
import { Banner } from "../../components/banner";
import Delete from "../../images/delete.png";

export function Post() {
  const navigator = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  // location.state => 전 페이지에서 넘겨 받은 state 값

  const [data, setData] = useState({
    title: "",
    content: "",
    ownerName: "",
    id: 0,
    isAnswered: false,
    answer: "",
  });
  const [deleteModal, setDeleteModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [pwStatus, setPwStatus] = useState("");
  const [answer, setAnswer] = useState("");
  const [pw, setPw] = useState("");
  // const [pwModal, setPwModal] = useState(false);

  useEffect(() => {
    if (!locationData) {
      alert("잘못된 경로입니다.");
      navigator("/posts");
    } else {
      if (!locationData.isAnswered && handleAdminCheck()) {
        const getPost = async () => {
          const result = await getPostAdmin(locationData.id);
          setData(result);
        };
        getPost();
      } else {
        setData(locationData);
      }
    }
    // eslint-disable-next-line
  }, []);

  /** 문의 답변하기 */
  const handleAnswer = async () => {
    const result = await answerPost(data.id, answer);
    if (result === 200) {
      setData((prev) => {
        return { ...prev, answer: answer, isAnswered: true };
      });
    }
  };

  const handleDeletePost = async () => {
    const result = await deletePostAPI(data.id, pw);
    if (result === 200) {
      alert("문의글 삭제가 완료되었습니다.");
      setData({
        title: "",
        content: "",
        ownerName: "",
        id: 0,
        isAnswered: false,
        answer: "",
      });
      setDeleteModal(false);
      setPwStatus("");
      setPw("");
      navigator("/posts");
    }
  };

  const handleEditPost = () => {
    navigator("updatepost", { state: data });
  };

  //** 문의 수정 삭제 시 관리자인지 확인 */
  const handleCheckStatus = async (status: string) => {
    setDeleteModal(false);
    setEditModal(false);
    if (status === "delete") {
      // 관리자 계정
      if (handleAdminCheck()) {
        const result = await deletePostAdmin(data.id);
        if (result === 200) {
          alert("문의글을 삭제하였습니다.");
          navigator("/posts");
        }
      } else {
        setPwStatus("delete");
      }
    }
    if (status === "edit") {
      // 관리자 계정
      if (handleAdminCheck()) {
        navigator("updatepost", { state: data });
      } else {
        setPwStatus("edit");
      }
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>문의게시판 | RODU</title>
      </Helmet> */}
      <Banner
        routeDot1="•"
        routeName1="커뮤니티"
        route1=""
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="문의게시판"
        route2="/posts"
        route2Opacity={1}
        title="교육 신청"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다"
        contentClass="Subtitle-smallFont"
        rightImg="none"
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
            {handleAdminCheck() || data.isAnswered ? (
              ""
            ) : (
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

            {data.isAnswered && !handleAdminCheck() ? (
              ""
            ) : (
              // 게시물 삭제 버튼
              <button
                className="h-[28px] w-[80px] rounded-[15px] bg-rodu-medium flex justify-center items-center"
                onClick={() => setDeleteModal(true)}
              >
                <img src={Delete} alt="delete" className="h-[20px]" />
              </button>
            )}
          </div>

          {/* 답변이 있다면 답변 내용 보여주기
          아닐 때 관리자 로그인이 되어 있다면 문의 답변 창 띄우기 */}
          <div className="mt-[100px]">
            {data.isAnswered ? (
              <>
                <div className="w-full flex justify-between items-end pr-2 pb-[12px]">
                  <p className="font-bold text-[34px] text-rodu-medium">
                    문의 답변
                  </p>
                </div>
                <p className="whitespace-pre-line py-[34px] border-y-[1.5px] border-y-rodu-black">
                  {data.answer}
                </p>
              </>
            ) : handleAdminCheck() ? (
              <div className="px-2">
                <div className="border p-3 bg-[#fafafa] rounded mt-6">
                  <div>
                    <p className="font-bold text-[18px] text-rodu-black ml-2 mb-1">
                      문의 답변
                    </p>
                  </div>
                  <textarea
                    className="w-full h-[10rem] border p-2 mt-2 rounded outline-[#949494]"
                    onInput={(e) => {
                      const target = e.target as HTMLInputElement;
                      setAnswer(target.value);
                    }}
                  />
                  <div className="flex justify-end">
                    <button
                      className="bg-rodu-medium rounded-[5px] text-white px-[10px] py-2 mr-3 mt-3 font-medium"
                      onClick={() => handleAnswer()}
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
      {/* <YesNoModal
        isOpen={editModal}
        title="게시물을 수정하겠습니까?"
        yesHandler={() => editHandler()}
        noHandler={() => setEditModal(false)}
      /> */}
      <PwInputModal
        isOpen={pwStatus !== ""}
        enterPress={() => {
          pwStatus === "delete" ? handleDeletePost() : handleEditPost();
        }}
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
