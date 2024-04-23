import { Banner } from "../components/BackgroundBanner";
import backgroundImg from "../images/instructor1.jpg";
import EduDetailContents from "../components/EduDetailContents";

import "../styles/eduContentStyles.css";

export function Contents() {
  return (
    <>
      <Banner
        backgroundImg={backgroundImg}
        title="교육 컨텐츠"
        subTitle="Education inquiry"
        content={
          "미래의 선구자들과 전문가들을 위한 RODU의 교육 콘텐츠를 소개합니다.\n\n대학생과 직업인을 대상으로 한 RODU의 프로그램은 로봇공학의 심도 있는 지식과\n 실용적인 적용법을 전달하여, 4차 산업혁명 시대에 필요한 핵심 기술을 체험하게 합니다."
        }
      />

      <EduDetailContents />
    </>
  );
}
