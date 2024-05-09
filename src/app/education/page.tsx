"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import Banner from "src/components/BackgroundBanner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faFileCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

import backgroundImg from "public/images/instructor2.jpg";

interface OptionBoxTypes {
  text: string;
  subText: string;
  icon: IconDefinition;
  onClick: () => void;
}

export default function EduServiceOptions() {
  const router = useRouter();
  const [modal, setModal] = useState(false);

  const handleNavigate = (url: string) => {
    setModal(false);
    router.push(url);
  };

  const OptionBox = ({ text, subText, icon, onClick }: OptionBoxTypes) => (
    <button
      className="flex flex-col justify-center items-center h-[412px] w-[364px] border-2 border-[#EAEAEA] rounded-[30px] font-bold text-[36px] bg-white hover:bg-orange-300"
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} className="text-black text-[80px] mb-7" />
      {text}
      <p className="text-[16px] font-normal">{subText}</p>
    </button>
  );

  return (
    <>
      <Banner
        backgroundImg={backgroundImg.src}
        title="교육 서비스"
        subTitle="Education Service"
        content={
          "희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
        }
      />
      <div className="h-screen w-full flex lg:justify-center justify-around items-center lg:gap-[110px] gap-4 px-6">
        <OptionBox
          text="교육 신청"
          subText="Education Registration"
          icon={faPenToSquare}
          onClick={() => setModal(true)}
        />
        <OptionBox
          text="교육 신청내역 조회"
          subText="View Education Registration"
          icon={faFileCircleCheck}
          onClick={() => handleNavigate("/education/history")}
        />
      </div>
      {/* 모달창 */}
      {modal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-10"
          onClick={() => setModal(false)} // 검은 영역 클릭 시 모달 닫기
        >
          <div
            className="w-[27.944rem] h-[13.368rem] border border-gray-400 rounded-lg shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // 내부 영역에 클릭 이벤트가 버블링되지 않도록 함
          >
            <div className="flex justify-center items-center h-[3.116rem] bg-rodu-medium text-white text-base">
              알려드립니다!
            </div>
            <div className="flex flex-col justify-center items-center h-[10.278rem] p-4 bg-white">
              <p className="text-center text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {
                  "RODU 교육 매니저가 예산과 컨셉에 맞는 최적의 교육 커리큘럼을\n제안해드릴 예정이니 편안하게 작성해주세요!"
                }
              </p>
              <button
                className="flex justify-center items-center mt-6 w-24 h-9 rounded-md bg-rodu-medium text-white text-xs"
                onClick={() => handleNavigate("/education/register")}
              >
                교육 신청 하기
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
