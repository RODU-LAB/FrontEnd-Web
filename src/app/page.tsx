"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import HomeBanner from "src/components/home/HomeBanner";
import Title from "src/components/home/Title";
import ContentsBox from "src/components/home/ContentsBox";

import useFadeInOnScroll from "../hooks/useFadeInOnScroll";
import { eduDetailContents } from "src/data/eduDetailContents";

import robot from "public/images/icon_robot.png";
import software from "public/images/icon_ros2.png";
import printer from "public/images/icon_embedded.png";
import ai from "public/images/icon_ai.png";

import school from "public/images/icon_people1.png";
import teach from "public/images/icon_people2.png";
import challenge from "public/images/icon_people3.png";
import videoConference from "public/images/icon_people4.png";

import leftButton from "public/images/left-button.png";
import rightButton from "public/images/right-button.png";

import instructor1 from "public/images/instructor1.jpg";
import instructor2 from "public/images/instructor2.jpg";
import instructor3 from "public/images/instructor3.jpg";
import instructor4 from "public/images/instructor4.jpg";

import instructor1_box from "public/images/instructor1_box.png";
import instructor2_box from "public/images/instructor2_box.png";
import instructor3_box from "public/images/instructor3_box.png";
import instructor4_box from "public/images/instructor4_box.png";

import roduEducation from "public/images/rodueducation.png";
import roduLogoGray from "public/images/roduLogoGray.png";
import roduMap from "public/images/rodumap.png";
import company from "public/images/company.png";
import process from "public/images/process.png";
import logoWhite from "public/images/logo/logo-white.png";

import child1 from "public/images/main6-1.png";
import child2 from "public/images/main6-2.png";
import child3 from "public/images/main6-3.png";
import child4 from "public/images/main6-4.png";
import child5 from "public/images/main6-5.png";
import child6 from "public/images/main6-6.png";
import child7 from "public/images/main6-7.png";

const mainContentsData = [
  {
    img: robot,
    name: "ROBOT",
    firstText: "로봇의 기본 원리부터 설계 및 제작에 대해 학습하고 ",
    secondText: "로봇의 기계적 구조, 제어로직을 사용해 실제 로봇을 구축",
    LastText: "하는 프로젝트를 수행합니다.",
  },
  {
    img: software,
    name: "ROS2",
    firstText: "로봇의 기본 원리부터 설계 및 제작에 대해 학습하고 ",
    secondText: "로봇의 기계적 구조, 제어로직을 사용해 실제 로봇을 구축",
    LastText: "하는 프로젝트를 수행합니다.",
  },
  {
    img: printer,
    name: "Embedded",
    firstText: "로봇의 기본 원리부터 설계 및 제작에 대해 학습하고 ",
    secondText: "로봇의 기계적 구조, 제어로직을 사용해 실제 로봇을 구축",
    LastText: "하는 프로젝트를 수행합니다.",
  },
  {
    img: ai,
    name: "AI",
    firstText: "로봇의 기본 원리부터 설계 및 제작에 대해 학습하고 ",
    secondText: "로봇의 기계적 구조, 제어로직을 사용해 실제 로봇을 구축",
    LastText: "하는 프로젝트를 수행합니다.",
  },
];

const trainingPerformanceType = [
  {
    icon: school,
    subTitle: "양질의 교육 공간에서 진행하는",
    title: "집합 교육",
    firstText: "대면 형식으로 진행하며, ",
    boldText:
      "RODU가 보유한 교육 공간과 장비를 통한 실습 중심의 학습과 직접적인 강사와의 상호작용",
    lastText: "으로 실시간 피드백과 질의응답을 가능하게 합니다.",
  },
  {
    icon: teach,
    subTitle: "찾아가는 맞춤형 교육 서비스",
    title: "방문 교육",
    firstText:
      "RODU의 전문 강사가 직접 고객이나 기관의 위치로 방문하여 교육을 진행합니다. ",
    boldText: "기관이나 기업의 실제 환경에서 직접 로봇 기술을 적용하는 기회",
    lastText: "를 제공합니다.",
  },
  {
    icon: challenge,
    subTitle: "창의성과 기술적 능력 향상",
    title: "RODU 챌린지",
    firstText:
      "특정 주제나 프로젝트에 대한 대회를 통해 참가자들이 경쟁하고 기술을 익힙니다. ",
    boldText:
      "창의적인 문제 해결, 팀워크를 기를 수 있으며 실무적인 경험과 경쟁을 통한 성장",
    lastText: "을 이루어냅니다.",
  },
  {
    icon: videoConference,
    subTitle: "언제 어디서나 함께하는",
    title: "온라인 교육",
    firstText: "웹 기반 플랫폼을 통해 로봇 교육 코스를 제공합니다. ",
    boldText:
      "동영상 강의, 언터랙티브 콘텐츠, 온라인 퀴즈를 통해 자기주도적 학습",
    lastText: "이 가능합니다.",
  },
];

const swiperData = [
  "otto",
  "hourglass",
  "spider",
  "snake",
  "small-puppy",
  "human",
  "security",
];

const instructorsData = [
  { imgURL: instructor1.src, boxURL: instructor1_box.src },
  { imgURL: instructor2.src, boxURL: instructor2_box.src },
  { imgURL: instructor3.src, boxURL: instructor3_box.src },
  { imgURL: instructor4.src, boxURL: instructor4_box.src },
];

const roduData = [
  { left: "강의 누적 교육생", right: "60명" },
  { left: "누적 키트 판매수", right: "130개" },
  { left: "강의 누적 시간", right: "320시간" },
  { left: "강의 출강", right: "6회" },
  { left: "강의 출강 지도", right: "지도 보기" },
];

const teachingItemData = [
  child1,
  child2,
  child3,
  child4,
  child5,
  child6,
  child7,
];

export default function Home() {
  const [isOpenMap, setIsOpenMap] = useState(false);

  const fadeInProps1 = useFadeInOnScroll();
  const fadeInProps2 = useFadeInOnScroll();
  const fadeInProps3 = useFadeInOnScroll();
  const fadeInProps4 = useFadeInOnScroll();
  const fadeInProps5 = useFadeInOnScroll();
  const fadeInProps6 = useFadeInOnScroll();
  const fadeInProps7 = useFadeInOnScroll();
  const fadeInProps8 = useFadeInOnScroll();
  const fadeInProps9 = useFadeInOnScroll();
  const fadeInProps10 = useFadeInOnScroll();

  return (
    <>
      <main>
        <div className="w-full flex flex-col items-center overflow-hidden">
          <HomeBanner />

          {/* RODU 대표 교육 콘텐츠 */}
          <div
            className="md-home:h-[100vh] lg-home:w-[1090px] px-[20px] tablet:px-[44px]
                  py-[40px] tablet:py-[15vh] max-md-home:flex max-md-home:flex-col max-md-home:item-center"
            {...fadeInProps1}
          >
            <Title
              text="RODU의 대표 콘텐츠"
              subText="고객들에게 최적의 교육과정을 제공합니다."
            />
            <div className="h-full grid grid-cols-1 tablet:grid-cols-2 md-home:grid-cols-4 gap-6 justify-items-center">
              {mainContentsData.map((item, i) => {
                return (
                  <ContentsBox
                    key={item.name}
                    img={item.img.src}
                    name={item.name}
                    firstText={item.firstText}
                    secondText={item.secondText}
                    LastText={item.LastText}
                    routerIndex={i + 11}
                  />
                );
              })}
            </div>
          </div>

          {/* RODU 교육 수행 유형 */}
          <div
            className="md-home:h-[100vh] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col items-center justify-center"
            {...fadeInProps2}
          >
            <Title text="RODU 교육 수행 유형" textCenter />
            <div className="grid grid-cols-1 md-home:grid-cols-2 gap-[18px]">
              {trainingPerformanceType.map((item) => {
                return (
                  <Link
                    className="py-[20px] w-full tablet:w-[427px] border border-[#eaeaea] rounded-md px-[35px] transition-all duration-500 hover:shadow-[0_0_15px_rgba(0,0,0,0.15)]"
                    href="/contents"
                    key={item.title}
                  >
                    <Image
                      src={item.icon.src}
                      alt="icon"
                      height={60}
                      width={56}
                      className="mb-[20px]"
                    />
                    <p className="text-[14px] text-rodu-medium font-medium">
                      {item.subTitle}
                    </p>
                    <p className="text-[30px] font-semibold leading-[34px] mb-4">
                      {item.title}
                    </p>
                    <p className="text-[14px] text-rodu-grey">
                      {item.firstText}
                      <strong>{item.boldText}</strong>
                      {item.lastText}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* RODU의 고유 로봇 */}
          <div
            className="md-home:h-[100vh] w-full lg-home:w-[1090px] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col justify-center"
            {...fadeInProps3}
          >
            <div>
              <div className="flex justify-center md-home:justify-between md-home:items-end mb-[46px]">
                <Title
                  text="RODU의 고유 로봇"
                  subText="RODU의 모든 로봇은 자체 개발 및 생산 과정을 통해 탄생합니다."
                  noMarginBottom
                />
                <div className="flex gap-[18px] max-md-home:hidden">
                  <button className="move-left-robot">
                    <Image
                      src={leftButton.src}
                      alt="Left"
                      height={36}
                      width={36}
                    />
                  </button>
                  <button className="move-right-robot">
                    <Image
                      src={rightButton.src}
                      alt="Right"
                      height={36}
                      width={36}
                    />
                  </button>
                </div>
              </div>

              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".move-left-robot",
                  nextEl: ".move-right-robot",
                }}
                className="flex !overflow-visible gap-[18px] transform transition duration-1000 !w-auto"
              >
                {swiperData.map((item) => {
                  const content = eduDetailContents[item];
                  return (
                    <SwiperSlide key={item}>
                      <Link href={"/contents/" + item} key={item}>
                        <div className="h-[337px] w-[70vw] mobile:w-[337px] rounded-[20px] p-3 px-5 bg-rodu-medium flex flex-col justify-between text-white">
                          <div>
                            <div className="flex justify-center items-center w-full h-[196px]">
                              <Image
                                src={content.img.src}
                                alt="program"
                                height={130}
                                width={171.7}
                                className="h-[130px] object-contain"
                              />
                            </div>
                            <p className="text-[22px] font-bold">
                              {content.korName}
                            </p>
                            <p className="text-[12px] font-medium">
                              {content.tag}
                            </p>
                          </div>
                          <div className="flex w-full justify-between">
                            <p className="text-[14px]">자세히 보기</p>
                            <p className="text-[20px]">&rsaquo;</p>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* 전문 강사에게 배우는 직무 맞춤형 교육 */}
          <div
            className="md-home:h-[100vh] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col items-center justify-center"
            {...fadeInProps4}
          >
            <Title
              text="전문 장비를 갖춘 다양한 시설"
              subText="RODU는 고객들에게 높은 수준의 교육을 제공하기 위해 자동화,
                      기계가공, 산업용 로봇과 같은 다양한 장비와 공간을 갖추고 있습니다."
              textCenter
            />
            <div className="grid grid-cols-1 md-home:grid-cols-2 gap-[18px] w-full justify-items-center">
              {instructorsData.map((item, i) => {
                return (
                  <div
                    className="group w-full tablet:w-[420px] max-tablet:max-w-[360px] h-[200px] tablet:h-[230px] rounded-[10px] overflow-hidden bg-cover relative"
                    style={{ backgroundImage: `url(${item.imgURL})` }}
                    key={i}
                  >
                    <div className="absolute inset-0 transition-transform duration-[700ms] tablet:group-hover:translate-y-[-290px] rounded-[10px]">
                      <Image
                        fill
                        src={item.boxURL}
                        alt="instructor"
                        className="tablet:translate-y-[290px] bg-black bg-opacity-45"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 전문 강사에게 배우는 직무 맞춤형 교육 */}
          <div
            className="md-home:h-[100vh] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col items-center justify-center"
            {...fadeInProps5}
          >
            <Title
              text="전문 강사에게 배우는 직무 맞춤형 교육"
              subText="RODU의 직무역량 강화를 위한 맞춤 교육을 제공합니다."
              textCenter
              smallTitle
            />
            <div className="relative w-[702px]">
              <Image
                src={roduEducation.src}
                alt="rodu-education"
                width={702}
                height={316.6}
                className="object-contain"
              />
            </div>
          </div>

          {/* RODU를 신뢰할 수 있는 이유! */}
          <div
            className="md-home:h-[100vh] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col items-center justify-center w-full"
            {...fadeInProps6}
          >
            <p className="text-[26px] tablet:text-[42px] font-bold text-[#212121] mb-[46px]">
              RODU를 신뢰할 수 있는 이유!
            </p>
            <div className="w-full max-w-[696px] border-y-[3px] border-[#d9d9d9] mb-2">
              {roduData.map((item, i) => {
                return (
                  <div
                    className={`${
                      i === 4 ? "cursor-pointer" : "border-b"
                    } border-[#d9d9d9] flex justify-between items-center h-[76px]`}
                    onClick={() => i === 4 && setIsOpenMap(true)}
                    key={i}
                  >
                    <p className="text-[21px] font-medium">{item.left}</p>
                    <p className="text-[38px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ffd857] to-rodu-medium">
                      {item.right}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end w-full max-w-[696px]">
              <Image
                src={roduLogoGray.src}
                alt="logo-gray"
                height={34}
                width={34}
              />
            </div>
          </div>

          {/* 지도 */}
          {isOpenMap && (
            <button
              className="h-full w-full fixed cursor-pointer flex justify-center items-center z-10"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              onClick={() => setIsOpenMap(false)}
            >
              <Image
                src={roduMap.src}
                alt="rodu-map"
                height={626}
                width={1112}
                className="object-contain"
              />
            </button>
          )}

          {/* RODU는 다양한 기업과 협력합니다. */}
          <div
            className=" px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col items-center justify-center w-full"
            {...fadeInProps7}
          >
            <Title
              text="RODU는 다양한 기업과 협력합니다."
              subText={`RODU는 다양한 기업과의 협력을 통해 양질의 제품을 합리적인 가격에 제공합니다.\n예상 지원 정부사업 : 국민내일 배움카드, 디지털새싹 취업성공패키지, 늘봄학교`}
              smallTitle
            />
            <Image
              src={company.src}
              alt="Company x RODU"
              className="Main4-image"
              height={380}
              width={657}
            />
          </div>

          {/* RODU에서 이런것들로 배워요. */}
          <div
            className="md-home:h-[100vh] w-full lg-home:w-[1090px] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col justify-center"
            {...fadeInProps8}
          >
            <div>
              <div className="flex justify-center md-home:justify-between md-home:items-end mb-[46px]">
                <Title
                  text="RODU에서 이런것들로 배워요."
                  subText="로봇의 원리를 이해하고 직접 조작할 수 있는 최상의 H/W와 S/W, 교재를 지원합니다."
                  noMarginBottom
                  smallTitle
                />
                <div className="flex gap-[18px] max-md-home:hidden">
                  <button className="move-left-teach">
                    <Image
                      src={leftButton.src}
                      alt="Left"
                      className="object-contain"
                      height={36}
                      width={36}
                    />
                  </button>
                  <button className="move-right-teach">
                    <Image
                      src={rightButton.src}
                      alt="Right"
                      className="object-contain"
                      height={36}
                      width={36}
                    />
                  </button>
                </div>
              </div>

              <Swiper
                slidesPerView="auto"
                spaceBetween={20}
                modules={[Navigation]}
                navigation={{
                  prevEl: ".move-left-teach",
                  nextEl: ".move-right-teach",
                }}
                className="flex !overflow-visible gap-[18px] transform transition duration-1000 !w-auto"
              >
                {teachingItemData.map((item, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <div className="rounded-[10px] border border-[#e4e4e4] overflow-hidden shadow-lg p-5 w-[262px] tablet:w-[406px]">
                        <Image
                          src={item.src}
                          alt="program"
                          className="h-[150px] target:h-[240px] w-[242px] tablet:w-[386px] object-contain"
                          height={240}
                          width={386}
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>

          {/* RODU 교육 프로세스 */}
          <div
            className="md-home:h-[100vh] px-[20px] tablet:px-[44px]
                  py-[40px] flex flex-col items-center justify-center"
            {...fadeInProps9}
          >
            <Title text="RODU 교육 프로세스" textCenter />
            <Image
              src={process.src}
              alt="process"
              height={232.33}
              width={1048}
              className="max-w-[1048px] w-full object-contain"
            />
          </div>
        </div>

        <div className="h-[100vh] w-full bg-rodu-medium flex justify-center items-center px-[20px] tablet:px-[44px]">
          <div
            className="flex flex-col max-tablet:items-center gap-28"
            {...fadeInProps10}
          >
            <div className="w-full lg-home:w-[1090px]">
              <Image
                src={logoWhite.src}
                alt="logo-white"
                height={60}
                width={85}
                className="mb-10 object-contain"
              />
              <p className="text-[24px] tablet:text-[42px] font-bold text-white">
                산업현장에 필요한 수준 높은
                <br />
                AI 로보틱스 교육을 제공합니다.
              </p>
            </div>
            <Link href="/post/updatepost">
              <button className="h-[44px] w-[136px] text-[14px] font-medium bg-white rounded-[22px] hover:bg-[#ffe2c8]">
                교육 문의하기
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
