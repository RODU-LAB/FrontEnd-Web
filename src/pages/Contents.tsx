import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Banner } from "../components/BackgroundBanner";
import backgroundImg from "../images/instructor1.jpg";
import snake from "../images/detailContents/snake.png";
import spider from "../images/detailContents/spider.png";
import logistics from "../images/detailContents/logistics.png";
import smallPuppy from "../images/detailContents/smallPuppy.png";
import hourGlass from "../images/detailContents/hourGlass.png";
import human from "../images/detailContents/human.png";
import deepLearning from "../images/detailContents/deepLearning.png";
import embedded from "../images/detailContents/embedded.png";
import kicad from "../images/detailContents/kicad.png";
import manipulator from "../images/detailContents/manipulator.png";
import otto from "../images/detailContents/otto.png";
import plc from "../images/detailContents/plc.png";
import printer from "../images/detailContents/printer.png";
import reinforcementLearning from "../images/detailContents/reinforcementLearning.png";
import ros2 from "../images/detailContents/ros2.png";
import securityDog from "../images/detailContents/securityDog.png";
import yolo from "../images/detailContents/yolo.png";
import security from "../images/detailContents/security.png";

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

export function Contents() {
  const navigate = useNavigate();

  const [mainCategory, setMainCategory] = useState(0);
  const [subCategory, setSubCategory] = useState(0);

  const categoryNames = {
    main: ["집합 교육", "방문 교육", "RODU 챌린지"],
    sub: ["로봇 교육", "소프트웨어 교육", "AI 교육", "장비 교육", "OS 교육"],
  };

  const contents = {
    hasSub: [
      [
        {
          tag: "#모듈형 #다관절 제어 #생체모방",
          name: "뱀 로봇",
          img: snake,
          nav: "snake",
        },
        {
          tag: "#자율탐색 #다족보행 #고정밀 제어",
          name: "거미 로봇",
          img: spider,
          nav: "spider",
        },
        {
          tag: "#레이더 #자율주행 #보안 솔루션",
          name: "경비 로봇",
          img: security,
          nav: "security",
        },
        {
          tag: "#물류자동화 #로봇배송 #스마트 물류",
          name: "물류 로봇",
          img: logistics,
          nav: "logistics",
        },
        {
          tag: "#사족 보행 #로봇 동역학 #인터렉티브",
          name: "작은 강아지 로봇",
          img: smallPuppy,
          nav: "small-puppy",
        },
      ],
      [
        {
          tag: "#도트 매트릭스 #밸런스 센서 #코딩",
          name: "LED 모래시계",
          img: hourGlass,
          nav: "hourglass",
        },
        {
          tag: "#인체모방 #모션제어 #연구개발",
          name: "인간형 로봇",
          img: human,
          nav: "human",
        },
        {
          tag: "#DIY #이족보행 #보행 알고리즘",
          name: "뚜벅이 로봇",
          img: otto,
          nav: "otto",
        },
        {
          tag: "#스마트경비 #보안로봇 #AI보안",
          name: "경비 로봇 강아지",
          img: securityDog,
          nav: "security-dog",
        },
      ],
      [
        {
          tag: "#객체인식 #실시간객체인식 #YOLO알고리즘",
          name: "YOLO",
          img: yolo,
          nav: "yolo",
        },
        {
          tag: "#인공지능학습 #데이터과학 #AI딥러닝",
          name: "딥러닝",
          img: deepLearning,
          nav: "deep-learning",
        },
        {
          tag: "#지능형알고리즘 #머신러닝강화 #AI",
          name: "강화학습",
          img: reinforcementLearning,
          nav: "reinforcement",
        },
      ],
      [
        {
          tag: "#창작물 #3D모델링 #조형기술",
          name: "3D 프린터",
          img: printer,
          nav: "printer",
        },
        {
          tag: "#제어시스템 #자동화 #컨트롤러",
          name: "PLC",
          img: plc,
          nav: "plc",
        },
        {
          tag: "#PCB디자인 #전자회로 #회로설계",
          name: "KiCad",
          img: kicad,
          nav: "kicad",
        },
      ],
      [
        {
          tag: "#마이크로컨트롤러 #스마트시스템",
          name: "임베디드 시스템",
          img: embedded,
          nav: "embedded",
        },
        {
          tag: "#로봇개발 #프로그래밍 #로봇운영",
          name: "ROS2",
          img: ros2,
          nav: "ros2",
        },
      ],
    ],
    noSub: [
      [
        {
          tag: "#스마트경비 #보안로봇 #AI보안",
          name: "경비 로봇 강아지",
          img: securityDog,
          nav: "security-puppy",
        },
        {
          tag: "#레이더 #자율주행 #보안 솔루션",
          name: "경비 로봇",
          img: security,
          nav: "security",
        },
        {
          tag: "#물류자동화 #로봇배송 #스마트 물류",
          name: "물류 로봇",
          img: logistics,
          nav: "logistics",
        },
        {
          tag: "#6축 #정밀조작 #산업용로봇",
          name: "매니퓰레이터",
          img: manipulator,
          nav: "manipulator",
        },
      ],
      [
        {
          tag: "#물류자동화 #로봇배송 #스마트 물류",
          name: "물류 로봇",
          img: logistics,
          nav: "logistics",
        },
      ],
    ],
  };

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
      <button
        className="group max-w-[336px] pb-6 bg-[#f8f9fd] border border-[#e7e7e7] rounded-md transition-shadow transition-border duration-300 hover:shadow-custom hover:border-[#f8f9fd]"
        onClick={() => navigate(nav)}
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
      </button>
    );
  };

  return (
    <>
      <Banner
        backgroundImg={backgroundImg}
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
              ? contents.hasSub[subCategory].map((el) => (
                  <ContentComponent
                    key={el.name}
                    img={el.img}
                    tag={el.tag}
                    name={el.name}
                    nav={el.nav}
                  />
                ))
              : contents.noSub[mainCategory - 1].map((el) => (
                  <ContentComponent
                    key={el.name}
                    img={el.img}
                    tag={el.tag}
                    name={el.name}
                    nav={el.nav}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}
