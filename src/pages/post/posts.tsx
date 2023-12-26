import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Helmet } from "react-helmet-async";
// import Modal from "react-modal";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { getAllPosts, getPost } from "../../services/post/postAPI";
import { getPostAdmin } from "../../services/post/postAdminAPI";
import { handleAdminCheck } from "../../utils/decode";
import { PwInputModal } from "../../components/modal/PwInputModal";

import { Banner } from "../../components/banner";

import lock from "../../images/lock.png";
// import postsRoute from "../images/postsRoute.png";
// import { Foot } from "../components/foot";

interface PostsTypes {
  id: number;
  title: string;
  ownerName: string;
  createdAt: string;
  isLocked: boolean;
  answered: boolean;
  idx: number;
}

export function Posts() {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostsTypes[]>([]);
  const [postCounts, setPostCounts] = useState(0);

  const [passwordModal, setPasswordModal] = useState(false);
  const [postId, setPostId] = useState<number | null>();
  const [pw, setPw] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getAllPosts(page);
      setPosts(result.posts);
      setPostCounts(result.total);
    };

    fetchPosts();
  }, [page]);

  //** 게시물 로드 (관리자 모드) */
  const handleGetPostAdmin = async (id: number) => {
    const result = await getPostAdmin(id);
    if (result !== "error") {
      navigate("/post", { state: result });
    }
  };

  /** 게시판 항목 클릭 시 작동. 비밀글이 아니면 게시물 페이지로 넘어감 */
  const handlePasswordModal = async (isLocked: boolean, id: number) => {
    if (handleAdminCheck()) {
      handleGetPostAdmin(id);
    } else {
      if (isLocked) {
        setPasswordModal(true);
        setPostId(id);
      } else {
        handleGetPost(id);
        setPostId(null);
        setPasswordModal(false);
      }
    }
  };

  /** 게시물 불러오기 */
  const handleGetPost = async (id: number, pw?: string) => {
    const result = pw ? await getPost(id, pw) : await getPost(id);
    if (result !== "error") {
      navigate("/post", { state: result });
      setPw("");
    }
  };

  /** 게시판 항목 UI 컴포넌트 */
  const PostsUI = ({
    id,
    title,
    ownerName,
    createdAt,
    isLocked,
    answered,
    idx,
  }: PostsTypes) => {
    const date = createdAt.substr(0, 10);
    const lastPost = posts.length === idx + 1;
    const containerClass = `w-full h-[80px] flex justify-between pr-[20px] border-b-rodu-grey cursor-pointer ${
      lastPost ? "border-b-[1.5px]" : "border-b"
    }`;

    return (
      <div
        className={containerClass}
        onClick={() => handlePasswordModal(isLocked, id)}
      >
        <div className="flex items-center">
          <p className="w-[78px] text-center button text-rodu-grey mr-[20px]">
            {idx + 1 + page * 10}
          </p>
          <p className="body1 mr-[14px]">{title}</p>
          {isLocked ? (
            <img src={lock} alt="lock" className="w-[1rem] h-[1rem]" />
          ) : (
            ""
          )}
        </div>
        <div className="flex items-center">
          {answered ? (
            <p className="bg-rodu-medium py-[6px] px-[14px] rounded-[20px] text-white">
              답변완료
            </p>
          ) : (
            ""
          )}
          <p className="w-[146px] text-center text-rodu-grey body2">
            {ownerName}
          </p>
          <p className="text-rodu-grey body2">{date}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="pb-[60px]">
      {/* <Helmet>
        <title>Board | RODU</title>
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
        title="문의 게시판"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다"
        contentClass="Subtitle-bigFont"
        rightImg="none"
      />
      <div className="w-full pt-[90px] flex items-center flex-col">
        <div className="max-w-[65.571rem] w-full">
          {/* <div className="flex mb-[12px]">
            <p className="body2">총&nbsp;</p>
            <p className="text-rodu-medium body2">10</p>
            <p className="body2">건</p>
          </div> */}
          <div className="w-full bg-rodu-black h-[1.5px]" />
          {posts.map((item, i) => (
            <PostsUI
              key={item.id}
              id={item.id}
              title={item.title}
              ownerName={item.ownerName}
              createdAt={item.createdAt}
              isLocked={item.isLocked}
              answered={item.answered}
              idx={i}
            />
          ))}
          <div className="w-full flex justify-between mt-[54px] items-end">
            <div className="w-[180px]" />
            <div className="Posts-pagination-container">
              <button
                onClick={() => {
                  page === 0 ? alert("현재 첫 페이지 입니다.") : setPage(0);
                }}
                className={"Posts-pagination-button-left"}
                // disabled={page === 0 ? true : false}
              >
                &laquo;
              </button>
              <button
                onClick={() => {
                  page === 0
                    ? alert("현재 첫 페이지 입니다.")
                    : setPage((prev) => prev - 1);
                }}
                className="Posts-pagination-button-left"
                // disabled={page === 0 ? true : false}
              >
                &lsaquo;
              </button>
              <span className="Posts-pagination-button-span">{page + 1}</span>
              <button
                onClick={() => {
                  postCounts - (page + 1) * 10 <= 0
                    ? alert("현재 마지막 페이지 입니다.")
                    : setPage((prev) => prev + 1);
                }}
                className="Posts-pagination-button-right"
                // disabled={page !== data?.findAllPosts.totalPages ? false : true}
              >
                &rsaquo;
              </button>
              <button
                onClick={() => {
                  postCounts - (page + 1) * 10 <= 0
                    ? alert("현재 마지막 페이지 입니다.")
                    : setPage(Math.floor(postCounts / 10));
                }}
                className="Posts-pagination-button-right"
                // disabled={page !== data?.findAllPosts.totalPages ? false : true}
              >
                &raquo;
              </button>
            </div>
            <button
              className="w-[180px] h-[52px] bg-rodu-medium text-white flex items-center justify-center rounded-[25px]"
              onClick={() => navigate("/post/updatepost")}
            >
              교육 문의하기
            </button>
          </div>
        </div>
      </div>
      <PwInputModal
        isOpen={passwordModal}
        enterPress={() => handleGetPost(postId as number, pw)}
        onInput={setPw}
        onClickXmark={() => {
          setPostId(null);
          setPasswordModal(false);
          setPw("");
        }}
      />
    </div>
  );
}
