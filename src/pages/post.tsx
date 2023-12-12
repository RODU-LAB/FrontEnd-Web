import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { getPost, deletePostAPI } from "../services/postAPI";
import { YesNoModal } from "../components/YesNoModal";

import { Banner } from "../components/banner";
import Delete from "../images/delete.png";

export function Post() {
  const navigator = useNavigate();
  const location = useLocation();
  const id = location.state;
  // location.state => 전 페이지에서 넘겨 받은 state 값

  const [data, setData] = useState({ title: "", content: "", ownerName: "" });
  const [deleteModal, setDeleteModal] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  useEffect(() => {
    const getPostHandler = async () => {
      const result = await getPost(id);
      console.log(result);
      if (!result || result.name === "AxiosError") {
        navigator("/posts");
      } else {
        setData(result);
      }
    };

    getPostHandler();
    // eslint-disable-next-line
  }, []);

  const deletePostHandler = async () => {
    const result = await deletePostAPI(id);
    if (result === "SUCCESS") {
      setData({ title: "", content: "", ownerName: "" });
      setDeleteModal(false);
      navigator("/posts");
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
            <button className="h-[28px] w-[80px] rounded-[15px] bg-[#0072B9]">
              <FontAwesomeIcon
                icon={faPenToSquare}
                size="lg"
                className="text-white"
              />
            </button>
            <button
              className="h-[28px] w-[80px] rounded-[15px] bg-rodu-medium flex justify-center items-center"
              onClick={() => setDeleteModal(true)}
            >
              <img src={Delete} alt="delete" className="h-[20px]" />
            </button>
          </div>
        </div>
      </div>
      <YesNoModal
        isOpen={deleteModal}
        title="게시물을 삭제하겠습니까?"
        yesHandler={() => deletePostHandler()}
        noHandler={() => setDeleteModal(false)}
      />
      <YesNoModal
        isOpen={updateModal}
        title="게시물을 수정하겠습니까?"
        yesHandler={() => navigator("/updatepost", { state: id })}
        noHandler={() => setUpdateModal(false)}
      />
    </>
  );
}
