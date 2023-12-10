import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
import { KitPicture } from "../../components/eduDetailContents/KitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import securityDogImg from "../../images/detailContents/slide/edu_detail_securityDog/upperBannerImageSecuritydog.png";
import securityDogKitImg1 from "../../images/detailContents/slide/edu_detail_securityDog/securityDogImage1.png";
import securityDogKitImg2 from "../../images/detailContents/slide/edu_detail_securityDog/securityDogImage2.png";
import securityDogClass1 from "../../images/detailContents/slide/edu_detail_securityDog/logo.png";
import securityDogClass2 from "../../images/detailContents/slide/edu_detail_securityDog/logo.png";
import securityDogClass3 from "../../images/detailContents/slide/edu_detail_securityDog/logo.png";
import securityDogClass4 from "../../images/detailContents/slide/edu_detail_securityDog/logo.png";
import securityDogClass5 from "../../images/detailContents/slide/edu_detail_securityDog/logo.png";

export const SecurityDog: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="경비 로봇 강아지"
        route2="/securityDog"
        route2Opacity={1}
        title="경비 로봇 강아지"
        subtitle="Security Robot Dog"
        content="보안을 위한 네 발 친구, 경비 강아지 로봇 제작하기"
        contentClass="Subtitle-smallFont"
        contentsImg={securityDogImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 기업 종사자, 물류 관련 기업, 로봇 전공 대학생"
        contents2_1=" • 경비 로봇 강아지를 개발하고 경비 및 보안 시스템에 적용하는 능력을 갖추게 된다."
        contents2_2=" • 보안 및 감시 분야에서의 실무 경험을 쌓아 실전에서의 능력을 키울 수 있다."
        contents3_1="소프트웨어 교육, 방문 교육"
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
        contents1_1="1. 센서 및 카메라의 역할 및 활용 방법 이해"
        contents1_2="2. 로봇 제어 시스템 학습, 로봇 제어 시스템의 구성 및 동작 원리 학습"
        contents2_1="1. 경비 장비용 센서 (예: 레이더) 및 카메라 활용 방법 학습"
        contents2_2="2. 침입자 감지 및 주변 환경 모니터링 능력 향상, 안전 및 보안 시스템 통합"
        contents2_3="3. 로봇 강아지의 자율주행 기술 학습, 경로 계획 알고리즘 습득"
        contents3_1="1. 경비 로봇 강아지를 실제 보안 시스템에 적용하는 프로젝트 수행"
        contents3_2="2. 보안 및 경비 임무 수행 능력 향상, 실제 환경에서의 경비 및 감시 능력 향상"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="비즈니스의 원리와 창업 개념을 이해하며 기업가 정신을 함양한다."
        contents2="제조 기반 창업을 위한 프로토타입제작 방법을 습득한다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={securityDogKitImg1}
        imgSrc2={securityDogKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={securityDogClass1}
        imgSrc2={securityDogClass2}
        imgSrc3={securityDogClass3}
        imgSrc4={securityDogClass4}
        imgSrc5={securityDogClass5}
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
