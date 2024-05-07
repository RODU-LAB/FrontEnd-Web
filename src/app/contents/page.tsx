"use client";

import { useState } from "react";
import Link from "next/link";

import { Banner } from "src/components/BackgroundBanner";
import { eduDetailContents } from "src/data/eduDetailContents";
import backgroundImg from "public/images/instructor1.jpg";

interface CategoryTypes {
  idx: number;
  name: string;
}

interface ContentsType {
  img: string;
  tag: string;
  name: string;
  nav: string;
}

const categoryNames = {
  main: ["집합 교육", "방문 교육", "RODU 챌린지"],
  sub: ["로봇 교육", "소프트웨어 교육", "AI 교육", "장비 교육", "OS 교육"],
};

const contents = {
  hasSub: [
    ["snake", "spider", "security", "logistics", "small-puppy"],
    ["hourglass", "human", "otto", "security-dog"],
    ["yolo", "deep-learning", "reinforcement"],
    ["printer", "plc", "kicad"],
    ["embedded", "ros2"],
  ],
  noSub: [
    ["security-dog", "security", "logistics", "manipulator"],
    ["logistics"],
  ],
};

export default function Contents() {
  const [mainCategory, setMainCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);

  const MainCategory = ({ idx, name }: CategoryTypes) => {
    return (
      <button
        className={`w-full h-10 border rounded text-[18px] ${
          idx === mainCategory
            ? "bg-rodu-medium border-rodu-medium text-white"
            : "bg-white border-[#d9d9d9] text-[#777777]"
        }`}
        onClick={() => {
          setMainCategory(idx);
          idx === 0 && setSubCategory(0);
        }}
      >
        {name}
      </button>
    );
  };

  const SubCategory = ({ idx, name }: CategoryTypes) => {
    return (
      <button
        className={`h-full px-4 rounded text-[14px] ${
          idx === subCategory
            ? "bg-rodu-medium text-white"
            : "bg-[#d9d9d9] text-[#777777]"
        }`}
        onClick={() => setSubCategory(idx)}
      >
        {name}
      </button>
    );
  };

  const ContentComponent = ({ img, tag, name, nav }: ContentsType) => {
    return (
      <Link
        className="group max-w-[336px] pb-6 bg-[#f8f9fd] border border-[#e7e7e7] rounded-md transition-shadow transition-border duration-300 hover:shadow-custom hover:border-[#f8f9fd]"
        href={nav}
      >
        <div className="w-[336px] h-[240px] flex justify-center items-center">
          <img
            src={img}
            alt={name}
            className="h-[75%] object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <div className="px-[18px]">
          <p className="text-[14px]">{tag}</p>
          <p className="text-[30px] font-bold">{name}</p>
        </div>
      </Link>
    );
  };

  return (
    <>
      <Banner
        backgroundImg={backgroundImg.src}
        title="교육 컨텐츠"
        subTitle="Education Contents"
        content={
          "미래의 선구자들과 전문가들을 위한 RODU의 교육 콘텐츠를 소개합니다.\n\n대학생과 직업인을 대상으로 한 RODU의 프로그램은 로봇공학의 심도 있는 지식과\n 실용적인 적용법을 전달하여, 4차 산업혁명 시대에 필요한 핵심 기술을 체험하게 합니다."
        }
      />
      <div className="flex flex-col w-full items-center min-h-screen py-[62px] px-[20px]">
        <div className="w-full max-w-1048px">
          <div className="h-11 flex justify-between gap-4">
            {categoryNames.main.map((name, i) => (
              <MainCategory idx={i} name={name} key={name} />
            ))}
          </div>
          <div className="mt-3 h-10 flex gap-4">
            {mainCategory === 0 &&
              categoryNames.sub.map((name, i) => (
                <SubCategory idx={i} name={name} key={name} />
              ))}
          </div>
          <div className="mt-[74px] grid gap-4 grid-cols-[repeat(auto-fit,minmax(336px,1fr))] justify-items-center">
            {mainCategory === 0
              ? contents.hasSub[subCategory].map((el) => {
                  const content = eduDetailContents[el];
                  return (
                    <ContentComponent
                      key={content.korName}
                      img={content.img.src}
                      tag={content.tag}
                      name={content.korName}
                      nav={"contents/" + el}
                    />
                  );
                })
              : contents.noSub[mainCategory - 1].map((el) => {
                  const content = eduDetailContents[el];
                  return (
                    <ContentComponent
                      key={content.korName}
                      img={content.img.src}
                      tag={content.tag}
                      name={content.korName}
                      nav={"contents/" + el}
                    />
                  );
                })}
          </div>
        </div>
      </div>
    </>
  );
}
