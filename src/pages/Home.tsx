import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import bannerVideo from "../images/home-banner.mp4";

import robot from "../images/icon_robot.png";
import software from "../images/icon_ros2.png";
import printer from "../images/icon_embedded.png";
import ai from "../images/icon_ai.png";

import leftButton from "../images/left-button.png";
import rightButton from "../images/right-button.png";
import otto from "../images/otto.png";
import hourGlass from "../images/hourGlass.png";
import spider from "../images/spider.png";
import snake from "../images/snake.png";
import mood from "../images/smallpuppy.png";
import human from "../images/human.png";
import security from "../images/security.png";

import child1 from "../images/main6-1.png";
import child2 from "../images/main6-2.png";
import child3 from "../images/main6-3.png";
import child4 from "../images/main6-4.png";
import child5 from "../images/main6-5.png";
import child6 from "../images/main6-6.png";
import child7 from "../images/main6-7.png";

import roduLogoGray from "../images/roduLogoGray.png";
import process from "../images/process.png";
import main8Logo from "../images/main8Logo.png";
import rodumap from "../images/rodumap.png";

import company from "../images/company.png";
import rodueducation from "../images/rodueducation.png";
import { useScrollFadeIn } from "../hooks/useScrollFadeIn";
// import { useScrollCount } from "../hooks/useScrollCountup";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css/bundle";

import styled from "styled-components";
import MainEduType from "../components/mainEduType";
import RoduInstructor from "../components/RoduInstructor";
import ModalMap from "../components/ModalMap";
import { Title } from "../components/home/Title";
import { ContentsBox } from "../components/home/ContentsBox";

const DialogButton = styled.button`
  height: 3.222rem;
  flex-grow: 0;
  cursor: pointer;
  font-family: Pretendard;
  font-size: 2.667rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.21;
  letter-spacing: normal;
  text-align: center;

  &:hover {
    width: 10.833rem;
    height: 3.222rem;
    font-size: 2.767rem;
    align-items: center;
  }
`;

export const Home = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  // const horizontalScrollRef = useRef<HTMLInputElement>(null);
  // const main6ScrollRef = useRef<HTMLInputElement>(null);

  // let main3_current_translate = 0;
  // let main6_current_translate = 0;

  // const main1TopAnimation = useScrollFadeIn(1, "25%", "0s");
  // const main1BottomAnimation = useScrollFadeIn(1, "100%", "0.3s");

  // const main2TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main2BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main4TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main4BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main9TopAnimation = useScrollFadeIn(0.7, "50%", "0s");
  const main9BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main5TopAnimation = useScrollFadeIn(0.7, "100%", "0s");
  const main5BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  const main7TopAnimation = useScrollFadeIn(0.7, "100%", "0s");
  const main7BottomAnimation = useScrollFadeIn(0.1, "25%", "0s");

  // const main5Count1Animation = useScrollCount(10834, 10400, 1500, "명");
  // const main5Count2Animation = useScrollCount(3312, 3000, 1500, "개");
  // const main5Count3Animation = useScrollCount(488, 463, 1500, "시간");
  // const main5Count4Animation = useScrollCount(27, 10, 1500, "개교");

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

  return (
    <>
      <Helmet>
        <title>RODU</title>
      </Helmet>
      <>
        <div className="w-full flex flex-col items-center">
          <div className="w-full h-[100vh] relative overflow-hidden">
            <video
              className="w-full h-full object-cover"
              style={{ objectPosition: "center top" }}
              autoPlay
              muted
              loop
            >
              <source src={bannerVideo} type="video/mp4" />
            </video>
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-55">
              <div className="absolute w-full flex flex-col gap-[30px] text-center top-[39vh] tablet:top-[38vh]  px-5">
                <p className="font-bold text-white text-[20px] tablet:text-[24px] md:text-[33px] lg:text-[44px] ">
                  "로봇 기술의 미래를 이끌어가다"
                </p>
                <p className="text-white text-[16px] tablet:text-[20px] md:text-[28px] lg:text-[36px]">
                  전문성을 갖춘 로봇 직무교육의 선두주자 RODU
                </p>
                <p className="text-white text-[12px] tablet:text-[14px] md:text-[18px] lg:text-[22px]">
                  로봇을 전공하는 대학생들과 전문가들에게 맞춤형 커리큘럼과
                  실질적 기술을 제공합니다.
                </p>
              </div>
            </div>
            <Link to="/post/updatepost">
              <button className="absolute border border-white rounded-[26px] text-[12px] tablet:text-[18px] text-white top-[82vh] max-lg:transform max-lg:-translate-x-1/2 max-lg:left-[50%] lg:right-[160px] py-3 px-5 hover:bg-white hover:text-black transition-colors duration-500 opacity-80">
                교육 문의하기
              </button>
            </Link>
          </div>

          {/* RODU 대표 교육 콘텐츠 */}
          <div
            className="md-home:h-[100vh] lg-home:w-[1090px] px-[20px] tablet:px-[44px]
                  py-[15vh] max-md-home:flex max-md-home:flex-col max-md-home:item-center"
          >
            <Title
              text="RODU의 대표 콘텐츠"
              subText="고객들에게 최적의 교육과정을 제공합니다."
            />
            <div className="h-full grid grid-cols-2 md-home:grid-cols-4 gap-6 md-home:gap-4">
              {mainContentsData.map((item, i) => {
                return (
                  <ContentsBox
                    key={item.name}
                    img={item.img}
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
        </div>

        {/* RODU 교육 수행 유형 */}
        <div className="Item-center">
          <MainEduType />
        </div>

        {/* RODU 메이킹 키트 */}
        <div className="Main3">
          <div className="Main3-content-container">
            <div className="Main3-top-container">
              <div className="Main3-top-letter-container">
                <p className="Main3-title">RODU의 고유 로봇</p>
                <p className="Main3-subtitle">
                  RODU의 모든 로봇은 자체 개발 및 생산 과정을 통해 탄생합니다.
                </p>
              </div>

              <div className="Main3-top-button-container">
                <button className="Main3-top-left-button">
                  <img
                    src={leftButton}
                    alt="Left"
                    className="Main3-top-left-image"
                  />
                </button>
                <button className="Main3-top-right-button">
                  <img
                    src={rightButton}
                    alt="Right"
                    className="Main3-top-right-image"
                  />
                </button>
              </div>
            </div>

            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              modules={[Navigation]}
              navigation={{
                prevEl: ".Main3-top-left-button",
                nextEl: ".Main3-top-right-button",
              }}
              className="Main3-bottom-container overflow-visible"
            >
              <SwiperSlide>
                <div className="Main3-bottom-image1-container">
                  <Link to="/otto">
                    <img
                      src={otto}
                      alt="Program"
                      className="Main3-bottom-image1"
                    />
                  </Link>
                  <div className="Main3-bottom-image1-letters">
                    <Link to="/otto">
                      <p className="Main3-bottom-image-title">뚜벅이 로봇</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #DIY #이족보행 #보행 알고리즘
                    </p>

                    <Link to="/otto" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image3-container">
                  <Link to="/hourGlass">
                    <img
                      src={hourGlass}
                      alt="Program"
                      className="Main3-bottom-image3"
                    />
                  </Link>
                  <div className="Main3-bottom-image3-letters">
                    <Link to="/hourGlass">
                      <p className="Main3-bottom-image-title">LED 모래시계</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #도트 매트릭스 #밸런스 센서 #코딩
                    </p>

                    <Link to="/hourGlass" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-spider-container">
                  <Link to="/spider">
                    <img
                      src={spider}
                      alt="Program"
                      className="Main3-bottom-spider"
                    />
                  </Link>
                  <div className="Main3-bottom-spider-letters">
                    <Link to="/spider">
                      <p className="Main3-bottom-image-title">거미 로봇</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #자율탐색 #다족보행 #고정밀 제어
                    </p>

                    <Link to="/spider" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image4-container">
                  <Link to="/snake">
                    <img
                      src={snake}
                      alt="Program"
                      className="Main3-bottom-image4"
                    />
                  </Link>
                  <div className="Main3-bottom-image4-letters">
                    <Link to="/snake">
                      <p className="Main3-bottom-image-title">뱀 로봇</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #모듈형 #다관절 제어 #생체모방
                    </p>

                    <Link to="/snake" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-image2-container">
                  <Link to="/smallPuppy">
                    <img
                      src={mood}
                      alt="Program"
                      className="Main3-bottom-image2"
                    />
                  </Link>
                  <div className="Main3-bottom-image2-letters">
                    <Link to="/smallPuppy">
                      <p className="Main3-bottom-image-title">
                        작은 강아지 로봇
                      </p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #사족보행 #로봇 동역학 #인터랙티브
                    </p>

                    <Link
                      to="/smallPuppy"
                      className="Main3-bottom-image-button"
                    >
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-car-container">
                  <Link to="/human">
                    <img
                      src={human}
                      alt="Program"
                      className="Main3-bottom-car"
                    />
                  </Link>
                  <div className="Main3-bottom-car-letters">
                    <Link to="/human">
                      <p className="Main3-bottom-image-title">인간형 로봇</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #인체모방 #모션제어 #연구개발
                    </p>

                    <Link to="/human" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main3-bottom-security-container">
                  <Link to="/security">
                    <img
                      src={security}
                      alt="Program"
                      className="Main3-bottom-security"
                    />
                  </Link>
                  <div className="Main3-bottom-security-letters">
                    <Link to="/security">
                      <p className="Main3-bottom-image-title">경비 로봇</p>
                    </Link>
                    <p className="Main3-bottom-image-subtitle">
                      #레이더 #자율주행 #보안 솔루션
                    </p>

                    <Link to="/security" className="Main3-bottom-image-button">
                      <button className="Main3-bottom-image-button">
                        <span className="Main3-bottom-image-inquiry">
                          자세히 보기
                        </span>
                        <span className="Main3-bottom-image-arrow">
                          &rsaquo;
                        </span>
                      </button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        {/* 전문 강사에게 배우는 직무 맞춤형 교육 */}
        <div className="Main2">
          <div className="Main2-content-container">
            <div className="Item-center" {...main2BottomAnimation}>
              <RoduInstructor />
            </div>
          </div>
        </div>

        <div className="Main9">
          <div className="Main9-content-container">
            <div className="Main9-letter-container" {...main9TopAnimation}>
              <p className="Main9-title">
                전문 강사에게 배우는 직무 맞춤형 교육
              </p>
              <p className="Main9-subtitle">
                RODU의 직무역량 강화를 위한 맞춤 교육을 제공합니다.
              </p>
            </div>
            <div className="Main9-image-container" {...main9BottomAnimation}>
              <img
                src={rodueducation}
                alt="rodueducation"
                className="Main9-image"
              ></img>
            </div>
          </div>
        </div>

        <div className="Main5">
          <div className="Main5-content-container">
            <div className="Main5-letter-container" {...main5TopAnimation}>
              <p className="Main5-title">RODU를 신뢰할 수 있는 이유!</p>
            </div>
            <div {...main5BottomAnimation}>
              <div className="Main5-datas-container">
                <div className="Main5-data1-container">
                  <span className="Main5-data1-letter">강의 누적 교육생</span>
                  <span
                    className="Main5-data1-number"
                    // {...main5Count1Animation}
                  >
                    60명
                  </span>
                </div>
                <div className="Main5-data2-container">
                  <span className="Main5-data2-letter">누적 키트 판매수</span>
                  <span
                    className="Main5-data2-number"
                    // {...main5Count2Animation}
                  >
                    130개
                  </span>
                </div>
                <div className="Main5-data3-container">
                  <span className="Main5-data3-letter">강의 누적 시간</span>
                  <span
                    className="Main5-data3-number"
                    // {...main5Count3Animation}
                  >
                    320시간
                  </span>
                </div>
                <div className="Main5-data4-container">
                  <span className="Main5-data4-letter">강의 출강</span>
                  <span
                    className="Main5-data4-number"
                    // {...main5Count4Animation}
                  >
                    6회
                  </span>
                </div>
                <div className="Main5-data5-container">
                  <span className="Main5-data5-letter">강의 출강 지도</span>
                  <span
                    className="Main5-data5-number"
                    // {...main5Count4Animation}
                  >
                    <DialogButton onClick={onClickToggleModal}>
                      지도 보기
                    </DialogButton>
                  </span>
                </div>
              </div>
              <div className="Main5-rodu-logo-gray-container">
                <img
                  src={roduLogoGray}
                  alt="roduLogoGray"
                  className="Main5-rodu-logo-gray"
                ></img>
              </div>
            </div>
          </div>
        </div>
        {isOpenModal && (
          <ModalMap onClickToggleModal={onClickToggleModal}>
            <img src={rodumap} alt="rodu-map" />
          </ModalMap>
        )}

        <div className="Main4">
          <div className="Main4-content-container">
            <div className="Main4-letter-container" {...main4TopAnimation}>
              <p className="Main4-title">RODU는 다양한 기업과 협력합니다.</p>
              <p className="Main4-subtitle">
                RODU는 다양한 기업과의 협력을 통해 양질의 제품을 합리적인 가격에
                제공합니다.
                <br /> 예상 지원 정부사업 : 국민내일 배움카드, 디지털새싹
                취업성공패키지, 늘봄학교
              </p>
            </div>
            <div className="Main4-image-container" {...main4BottomAnimation}>
              <img src={company} alt="Company x RODU" className="Main4-image" />
            </div>
          </div>
        </div>

        <div className="Main6">
          <div className="Main6-content-container">
            <div className="Main6-top-container">
              <div className="Main6-top-letter-container">
                <p className="Main6-title">RODU에서 이런것들로 배워요</p>
                <p className="Main6-subtitle">
                  로봇의 원리를 이해하고 직접 조작할 수 있는 최상의 H/W와 S/W,
                  교재를 지원합니다.
                </p>
              </div>
              <div className="Main6-top-button-container">
                <button className="Main6-top-left-button">
                  <img
                    src={leftButton}
                    alt="Left"
                    className="Main6-top-left-image"
                  ></img>
                </button>
                <button className="Main6-top-right-button">
                  <img
                    src={rightButton}
                    alt="Right"
                    className="Main6-top-right-image"
                  ></img>
                </button>
              </div>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={20}
              navigation={{
                prevEl: ".Main6-top-left-button",
                nextEl: ".Main6-top-right-button",
              }}
              modules={[Navigation]}
              className="Main6-bottom-container overflow-auto"
            >
              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child1}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child2}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child3}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child4}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child5}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child6}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="Main6-bottom-image-container">
                  <img
                    src={child7}
                    alt="Program"
                    className="Main6-bottom-image"
                  ></img>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <div className="Main7">
          <div className="Main7-content-container">
            <div className="Main7-title-container" {...main7TopAnimation}>
              <p className="Main7-title">RODU 교육 프로세스</p>
            </div>

            <div
              className="Main7-process-images-container"
              {...main7BottomAnimation}
            >
              <img
                src={process}
                alt="ProcessImage"
                className="Main7-image"
              ></img>
            </div>
          </div>
        </div>

        <div className="Main8">
          <div className="Main8-content-container">
            <img
              src={main8Logo}
              alt="rodulogo"
              className="Main8-rodulogo"
            ></img>
            <p className="Main8-title">
              산업현장에 필요한 수준 높은
              <br />
              AI 로보틱스 교육을 제공합니다.
            </p>
            <Link
              to="/post/updatepost"
              className="Main8-button-frame bg-white rounded-[25px]"
            >
              <button className="Main8-button Main8-button:hover">
                교육 문의하기
              </button>
            </Link>
          </div>
        </div>
      </>
    </>
  );
};
