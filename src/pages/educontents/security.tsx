import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import securityImg from "../../images/detailContents/slide/edu_detail_security/upperBannerImageSecurity.png";
import securityKitImg1 from "../../images/detailContents/slide/edu_detail_security/securityImage1.png";
import securityKitImg2 from "../../images/detailContents/slide/edu_detail_security/securityImage2.png";
import securityClass1 from "../../images/detailContents/slide/edu_detail_security/logo.png";
import securityClass2 from "../../images/detailContents/slide/edu_detail_security/logo.png";
import securityClass3 from "../../images/detailContents/slide/edu_detail_security/logo.png";
import securityClass4 from "../../images/detailContents/slide/edu_detail_security/logo.png";
import securityClass5 from "../../images/detailContents/slide/edu_detail_security/logo.png";

export const Security: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="경비 로봇"
        route2="/security"
        route2Opacity={1}
        title="경비 로봇"
        subtitle="SecurityBot"
        content="레이더와 카메라로 자율주행하며 침입자를 감지하는 경비 역할 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={securityImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="고등학생"
        contents2_1=" • SLAM 기술을 활용하여 로봇이 주변 환경을 이해하고 지도를 작성하는 방법을 학습한다."
        contents2_2=" • 다양한 센서와 카메라를 통합하여 환경 정보를 수집하고, 수집한 데이터를 분석하고 효과적으로 사용하는 능력을 향상시킨다."
        contents2_3=" • 실제 환경에서 로봇이 어떻게 행동해야 하는지를 결정하고 구현하는 경험을 쌓는다."
        contents3_1="로봇 교육"
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
        contents1_1="1. 레이더 및 센서 기반 자율주행 원리에 대한 이론적 배경 학습."
        contents1_2="2. 침입 감지 및 보안 시스템에 관한 기본 지식 습득."
        contents1_3="3. 필요한 레이더, 카메라, 제어 장치에 대한 기본 프로그래밍 학습"
        contents2_1="1. 로봇이 주어진 환경 내에서 자율적으로 이동하고 장애물을 피할 수 있도록 프로그래밍."
        contents2_2="2. 카메라를 활용한 침입자 감지 알고리즘 개발 및 구현."
        contents3_1="1. 로봇의 자율주행 및 보안 기능 테스트 및 성능 최적화."
        contents3_2="2. 로봇의 기능성 평가 및 발견된 문제점에 대한 해결책 모색."
        contents3_3="3. 프로젝트 결과 발표 및 참가자 및 전문가로부터 피드백 수집."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="레이더 및 카메라를 활용한 경비 로봇의 자율주행 시스템을 이해하고 부품을 활용합니다."
        contents2="레이더 및 카메라를 활용한 로봇 자율주행 시스템 이론을 학습하고 경비 로봇을 프로그래밍합니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={securityKitImg1}
        imgSrc2={securityKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={securityClass1}
        imgSrc2={securityClass2}
        imgSrc3={securityClass3}
        imgSrc4={securityClass4}
        imgSrc5={securityClass5}
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
