"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PostsTypes } from "src/types/postTypes";
// import { Helmet } from "react-helmet-async";
// import Modal from "react-modal";

import { getAllPosts } from "src/api/post/postAPI";

import Banner from "src/components/BackgroundBanner";
import backgroundImg from "/public/images/instructor3.jpg";
import lock from "/public/images/lock.png";

export default function Community() {
  const [page, setPage] = useState(0);
  const [posts, setPosts] = useState<PostsTypes[]>([]);
  const [postCounts, setPostCounts] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      const result = await getAllPosts(page);
      if (result) {
        setPosts(result.posts);
        setPostCounts(result.total);
      } else {
        alert("문의글 전체 조회에 실패하셨습니다.");
      }
    };

    fetchPosts();
  }, [page]);

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
      <Link href={"/community/" + id} className={containerClass}>
        <div className="flex items-center">
          <p className="w-[78px] text-center button text-rodu-grey mr-[20px]">
            {idx! + 1 + page * 10}
          </p>
          <p className="body1 mr-[14px]">{title}</p>
          {isLocked && (
            <Image src={lock.src} alt="lock" height={16} width={16} />
          )}
        </div>
        <div className="flex items-center">
          {answered && (
            <p className="bg-rodu-medium py-[6px] px-[14px] rounded-[20px] text-white">
              답변완료
            </p>
          )}
          <p className="w-[146px] text-center text-rodu-grey body2">
            {ownerName}
          </p>
          <p className="text-rodu-grey body2">{date}</p>
        </div>
      </Link>
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
              href="/community/create"
            >
              글 쓰기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
