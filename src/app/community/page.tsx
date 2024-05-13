"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { detailPostState } from "src/recoil/detailPostState";
import { PostsTypes } from "src/types/postTypes";
// import { Helmet } from "react-helmet-async";
// import Modal from "react-modal";

import { getAllPosts, getPostAPI } from "src/api/post/postAPI";
import { getPostAdmin } from "src/api/post/postAdminAPI";
import { useAdminCheck } from "src/utils/decode";
import PwInputModal from "src/components/modal/PwInputModal";

import Banner from "src/components/BackgroundBanner";
import backgroundImg from "/public/images/instructor3.jpg";
import lock from "/public/images/lock.png";

export default function Community() {
  const router = useRouter();
  const isAdmin = useAdminCheck();
  const setDetailPost = useSetRecoilState(detailPostState);

  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostsTypes[]>([]);
  const [postCounts, setPostCounts] = useState(0);

  const [passwordModal, setPasswordModal] = useState(false);
  const [postId, setPostId] = useState<number | null>();
  const [postIdx, setPostIdx] = useState<number | null>();
  const [pw, setPw] = useState<string>("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getAllPosts(page);
      if (result) {
        setPosts(result.posts);
        setPostCounts(result.total);
      }
    };

    fetchPosts();
  }, [page]);

  //** 게시물 불러오기 (관리자 모드) */
  const handleGetPostAdmin = async (id: number) => {
    const result = await getPostAdmin(id);
    if (result) {
      setDetailPost({ ...result, visited: false });
      router.push("/community/" + id);
    }
  };

  /** 게시물 불러오기 (일반 모드) */
  const handleGetPost = async (id: number, isLocked: boolean, pw?: string) => {
    const result = pw ? await getPostAPI(id, pw) : await getPostAPI(id);
    if (result) {
      setPw("");
      setDetailPost({ ...result, visited: false, isLocked: isLocked });
      router.push("/community/" + id);
    }
  };

  /** 게시판 항목 클릭 시 작동. 비밀글이 아니면 게시물 페이지로 넘어감 */
  const handlePasswordModal = async (
    isLocked: boolean,
    id: number,
    idx: number
  ) => {
    if (isAdmin) {
      handleGetPostAdmin(id);
    } else {
      if (isLocked) {
        setPasswordModal(true);
        setPostId(id);
        setPostIdx(idx);
      } else {
        handleGetPost(id, isLocked);
        setPostId(null);
        setPostIdx(null);
        setPasswordModal(false);
      }
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
    const lastPost = posts.length === idx! + 1;
    const containerClass = `w-full h-[80px] flex justify-between pr-[20px] border-b-rodu-grey cursor-pointer ${
      lastPost ? "border-b-[1.5px]" : "border-b"
    }`;

    return (
      <div
        className={containerClass}
        onClick={() => handlePasswordModal(isLocked, id, idx!)}
      >
        <div className="flex items-center">
          <p className="w-[78px] text-center button text-rodu-grey mr-[20px]">
            {idx! + 1 + page * 10}
          </p>
          <p className="body1 mr-[14px]">{title}</p>
          {isLocked ? (
            <img src={lock.src} alt="lock" className="w-[1rem] h-[1rem]" />
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
        backgroundImg={backgroundImg.src}
        title="커뮤니티 게시판"
        subTitle="Community bulletin board"
        content="로봇지식을 공유하는 커뮤니티 입니다."
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
            <Link
              className="w-[180px] h-[52px] bg-rodu-medium text-white flex items-center justify-center rounded-[25px]"
              href="/update-post"
            >
              글 쓰기
            </Link>
          </div>
        </div>
      </div>
      <PwInputModal
        isOpen={passwordModal}
        enterPress={() => handleGetPost(postId!, posts[postIdx!].isLocked, pw)}
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
