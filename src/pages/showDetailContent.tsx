import { Banner } from "../components/banner";
import EduDetailContents from "../components/EduDetailContents";

import "../styles/eduContentStyles.css";

export function ShowDetailContent() {
  return (
    <>
      <Banner
        routeName1="교육 콘텐츠"
        routeDot1="•"
        route1="/contents"
        route1Opacity={1}
        title="교육 콘텐츠"
        subtitle="Education Contents"
        content="미래의 선구자들과 전문가들을 위한 RODU의 교육 콘텐츠를 소개합니다. 대학생과 직업인을 대상으로 한 우리의 프로그램은"
        contentBottom="로봇공학의 심도 있는 지식과 실용적인 적용법을 전달하여, 4차 산업혁명 시대에 필요한 핵심 기술을 체험하게 합니다."
        contentClass="Subtitle-smallFont"
        rightImg="none"
      />

      <EduDetailContents />
    </>
  );
}
