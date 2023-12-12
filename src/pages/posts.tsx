import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
// import { Helmet } from "react-helmet-async";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { Banner } from "../components/banner";
import { getAllPosts } from "../services/postAPI";
import lock from "../images/lock.png";
// import postsRoute from "../images/postsRoute.png";
// import { Foot } from "../components/foot";

interface PostsTypes {
  id: number;
  title: string;
  ownerName: string;
  createdAt: string;
  locked: boolean;
  answered: boolean;
  idx: number;
}

export function Posts() {
  const navigate = useNavigate();

  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostsTypes[]>([]);
  const [passwordModal, setPasswordModal] = useState(false);
  // eslint-disable-next-line
  const [postId, setPostId] = useState<number | null>();
  // eslint-disable-next-line
  const [passwordIsWrong, setPasswordIsWrong] = useState(false);
  // eslint-disable-next-line
  const [pw, setPw] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const result = await getAllPosts(page);
        setPosts(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, [page]);

  /** 게시판 항목 클릭 시 작동. 비밀번호가 없으면 게시물 페이지로 넘어감 */
  const passwordModalHandler = (isPassword: boolean, id: number) => {
    if (isPassword) {
      setPasswordModal(true);
      setPostId(id);
    } else {
      setPostId(null);
      setPasswordModal(false);
      navigate("/post", { state: id });
    }
  };

  /** 게시판 항목 UI 컴포넌트 */
  const PostsUI = ({
    id,
    title,
    ownerName,
    createdAt,
    locked,
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
        onClick={() => passwordModalHandler(locked, id)}
      >
        <div className="flex items-center">
          <p className="w-[78px] text-center button text-rodu-grey mr-[20px]">
            {idx + 1 + page * 10}
          </p>
          <p className="body1 mr-[14px]">{title}</p>
          {locked ? (
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
              locked={item.locked}
              answered={item.answered}
              idx={i}
            />
          ))}
          <div className="w-full flex justify-between mt-[54px] items-end">
            <div className="w-[180px]" />
            <div className="Posts-pagination-container">
              <button
                onClick={() => setPage(0)}
                className="Posts-pagination-button-left"
                disabled={page === 0 ? true : false}
              >
                &laquo;
              </button>
              <button
                onClick={() => setPage((prev) => prev - 1)}
                className="Posts-pagination-button-left"
                disabled={page === 0 ? true : false}
              >
                &lsaquo;
              </button>
              <span className="Posts-pagination-button-span">{page + 1}</span>
              <button
                onClick={() => setPage((prev) => prev + 1)}
                className="Posts-pagination-button-right"
                // disabled={page !== data?.findAllPosts.totalPages ? false : true}
              >
                &rsaquo;
              </button>
              <button
                // onClick={onLastPageClick}
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
      <Modal isOpen={passwordModal} className="Posts-modal">
        <>
          <div className="Posts-modal-container">
            <span className="Posts-modal-title flex justify-between items-center px-4">
              <div className="w-[15px]" />
              <p>게시글 비밀번호를 입력해주세요</p>
              <FontAwesomeIcon
                icon={faXmark}
                size="lg"
                className="cursor-pointer"
                onClick={() => {
                  setPostId(null);
                  setPasswordModal(false);
                  setPasswordIsWrong(false);
                  setPw("");
                }}
              />
            </span>
            <div className="flex w-full Posts-modal-form">
              <input
                onInput={(e) => {
                  const target = e.target as HTMLInputElement;
                  setPw(target.value);
                }}
                name="password"
                placeholder="비밀번호를 입력해주세요"
                className="Posts-modal-input"
                type="password"
              />
              {/* {passwordIsWrong ? (
                <input
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="비밀번호가 틀렸습니다"
                  className="Posts-modal-input-error"
                  type="password"
                />
              ) : (
                <input
                  {...register("password", { required: true })}
                  name="password"
                  placeholder="비밀번호를 입력해주세요"
                  className="Posts-modal-input"
                  type="password"
                />
              )} */}
              <button className="Posts-modal-button transition-colors">
                확인
              </button>
            </div>
          </div>
        </>
      </Modal>
    </div>
  );
}
