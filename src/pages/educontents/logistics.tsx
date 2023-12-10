import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
import { KitPicture } from "../../components/eduDetailContents/KitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import logisticsImg from "../../images/detailContents/slide/edu_detail_logistics/upperBannerImageLogistics.png";
import logisticsKitImg1 from "../../images/detailContents/slide/edu_detail_logistics/logisticsImage1.png";
import logisticsKitImg2 from "../../images/detailContents/slide/edu_detail_logistics/logisticsImage2.png";
import logisticsClass1 from "../../images/detailContents/slide/edu_detail_logistics/logo.png";
import logisticsClass2 from "../../images/detailContents/slide/edu_detail_logistics/logo.png";
import logisticsClass3 from "../../images/detailContents/slide/edu_detail_logistics/logo.png";
import logisticsClass4 from "../../images/detailContents/slide/edu_detail_logistics/logo.png";
import logisticsClass5 from "../../images/detailContents/slide/edu_detail_logistics/logo.png";

export const Logistics: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="물류 로봇"
        route2="/logistics"
        route2Opacity={1}
        title="물류 로봇"
        subtitle="Logistics Robot"
        content="자동화된 창고를 위한 물류 로봇 제작, 물류 혁신의 시작점"
        contentClass="Subtitle-smallFont"
        contentsImg={logisticsImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 기업 종사자, 물류 관련 기업, 로봇 전공 대학생"
        contents2_1=" • 물류 및 공급망 자동화에 필요한 로봇 제어 및 프로그래밍 기술을 습득하여, 업무 효율성과 생산성을 높혀 자동화 역량을 향상시킨다."
        contents2_2=" • 물류 및 자동화 분야의 전문 지식을 통해 경쟁력 있는 진로 및 취업 기회를 확보한다."
        contents3_1="로봇 교육, RODU 챌린지"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"
        contents1_1="1. 로봇의 기본 원리 및 구조 학습, 센서 및 액추에이터의 역할 이해"
        contents1_2="2. 로봇 제어 시스템 학습, 로봇 제어 시스템 개요 이해"
        contents1_3="3. 로봇 제어 시스템의 구성 및 동작 원리 학습, 로봇 제어용 소프트웨어 및 하드웨어 툴 사용법 학습"
        contents2_1="1. 다양한 센서 (예: 거리 센서, 비전 카메라) 및 액추에이터 (예: 모터)의 제어 방법 학습"
        contents2_2="2. 센서 데이터 수집 및 활용 방법 습득, 로봇 경로 및 이동 제어"
        contents2_3="3. 주행 경로 최적화 알고리즘 습득, 로봇의 이동 경로 계획 및 제어 기술 학습"
        contents3_1="1. 로봇을 물류 시스템에 통합하는 방법 학습, 실전 프로젝트 수행"
        contents3_2="2. 로봇 물류 작업의 효율성을 최적화하는 방법 습득, 물류 로봇의 성능 향상 및 문제 해결"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="로봇의 동작 원리와 제어 방법을 이해하고, 물류 자동화 시스템에 적용하는 방법을 배운다."
        contents2="DC 모터, 센서 등의 부품을 활용하여 로봇을 제작하고 프로그래밍하는 능력을 향상시킨다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={logisticsKitImg1}
        imgSrc2={logisticsKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={logisticsClass1}
        imgSrc2={logisticsClass2}
        imgSrc3={logisticsClass3}
        imgSrc4={logisticsClass4}
        imgSrc5={logisticsClass5}
      />

      <Notice
        title="공지사항"
        titleMarginTop={12.222}
        contentsText1="- 로봇 교육 콘텐츠는 로봇 공학 분야의 전문 지식과 경험이 풍부한 대학생 강사님께서 진행하십니다."
        contentsText2="- 로봇 교육 콘텐츠는 우수한 강사진과 함께 제공되며, 강사님의 다양한 경험과 전문 지식을 콘텐츠에 반영하여 학습 품질을 높였습니다."
        contentsText3="- 교육 과정 중 원할한 시청을 위해 시청각 장비가 필요하며, 스크린, 빔 프로젝트 등을 사용하시는 것을 권장합니다."
        contentsText4="- 교육 수강을 위해 1인용 책상 정도의 공간이 필요하므로, 강의를 수강할 환경을 마련해주세요."
        contentsText5="- 교육 콘텐츠의 구체적인 일정과 수강 신청 방법에 대해 안내 문의는 언제나 가능합니다."
        contentsText6="- 문의 : 010-5140-3477"
      />
    </>
  );
};
