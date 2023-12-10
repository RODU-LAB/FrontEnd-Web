import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import hourGlassImg from "../../images/detailContents/slide/edu_detail_hourGlass/upperBannerImageHourGlass.png";
import hourGlassKitImg1 from "../../images/detailContents/slide/edu_detail_hourGlass/hourGlassImage1.png";
import hourGlassKitImg2 from "../../images/detailContents/slide/edu_detail_hourGlass/hourGlassImage2.png";
import hourGlassClass1 from "../../images/detailContents/slide/edu_detail_hourGlass/logo.png";
import hourGlassClass2 from "../../images/detailContents/slide/edu_detail_hourGlass/logo.png";
import hourGlassClass3 from "../../images/detailContents/slide/edu_detail_hourGlass/logo.png";
import hourGlassClass4 from "../../images/detailContents/slide/edu_detail_hourGlass/logo.png";
import hourGlassClass5 from "../../images/detailContents/slide/edu_detail_hourGlass/logo.png";

export const HourGlass: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="LED 모래시계"
        route2="/hourglass"
        route2Opacity={1}
        title="LED 모래시계"
        subtitle="LED Hourglass"
        content="아두이노와 자이로 센서를 활용하여 기울기를 감지하고 도트 매트릭스로 모래시계를 표현하는 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={hourGlassImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생"
        contents2_1=" • 전자공학과 시각적 디자인의 결합을 통해 창의성을 키울 수 있다."
        contents2_2=" • 전자기술의 기본 원리를 습득하며, 이를 통해 STEM 분야에 대한 자연스러운 흥미를 발견하고 키울 수 있다."
        contents2_3=" • 실제로 회로를 조립하고 프로그래밍하는 기술을 배울 수 있다."
        contents3_1="소프트웨어 교육"
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
        contents1_1="1. 아두이노 프로그래밍 기초."
        contents1_2="2. 자이로 센서 작동 원리와 사용 방법."
        contents1_3="3. LED 도트 매트릭스 및 회로 설계 기본 학습."
        contents2_1="1. 아두이노를 사용하여 자이로 센서로부터 기울기 데이터 수집 및 처리."
        contents2_2="2. LED 매트릭스에 모래시계 애니메이션 표시를 위한 코드 작성."
        contents2_3="3. 코드 테스트 및 모래시계 시각적 표현의 정확성 확인."
        contents3_1="1. 완성된 LED 모래시계의 기능적 및 시각적 검토."
        contents3_2="2. 창의성 평가제작 과정, 사용된 기술, 창의적 해결책에 대한 피드백."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="아두이노 및 자이로 센서를 활용한 LED 모래시계 부품을 조립하고 구성합니다."
        contents2="아두이노 프로그래밍과 센서 활용 이론을 학습하고 LED 모래시계를 프로그래밍합니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={hourGlassKitImg1}
        imgSrc2={hourGlassKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={hourGlassClass1}
        imgSrc2={hourGlassClass2}
        imgSrc3={hourGlassClass3}
        imgSrc4={hourGlassClass4}
        imgSrc5={hourGlassClass5}
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
