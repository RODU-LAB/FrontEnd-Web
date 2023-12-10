import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
import { KitPicture } from "../../components/eduDetailContents/KitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import manipulatorImg from "../../images/detailContents/slide/edu_detail_manipulator/upperBannerImageManipulator.png";
import manipulatorKitImg1 from "../../images/detailContents/slide/edu_detail_manipulator/manipulatorImage1.png";
import manipulatorKitImg2 from "../../images/detailContents/slide/edu_detail_manipulator/manipulatorImage2.png";
import manipulatorClass1 from "../../images/detailContents/slide/edu_detail_manipulator/logo.png";
import manipulatorClass2 from "../../images/detailContents/slide/edu_detail_manipulator/logo.png";
import manipulatorClass3 from "../../images/detailContents/slide/edu_detail_manipulator/logo.png";
import manipulatorClass4 from "../../images/detailContents/slide/edu_detail_manipulator/logo.png";
import manipulatorClass5 from "../../images/detailContents/slide/edu_detail_manipulator/logo.png";

export const Manipulator: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="매니퓰레이터"
        route2="/manipulator"
        route2Opacity={1}
        title="매니퓰레이터"
        subtitle="Manipulator"
        content="6축 매니퓰레이터, 정밀하고 다양한 작업을 수행하는 로봇 팔"
        contentClass="Subtitle-smallFont"
        contentsImg={manipulatorImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 관련기업, 로봇을 전공하는 대학생, 자동화 전공 대학생"
        contents2_1=" • 매니퓰레이터 로봇을 조작하고 프로그래밍하는 능력을 향상시킬 수 있으며, 자동화 및 제조 분야에서의 전문성을 키울 수 있다."
        contents2_2=" • 실전 프로젝트를 통해 실무 경험을 쌓고, 다양한 응용 분야에서의 활동과 연구 기회를 확대할 수 있다."
        contents3_1="방문 교육"
        liClass1="EduTable-table-subContents"
        liClass2_1="EduTable-table-subContents List-style-dics"
        liClass2_2="EduTable-table-subContents List-style-dics"
        liClass2_3="EduTable-table-subContents List-style-dics"
        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"
        contents1_1="1. 로봇 매니퓰레이터의 기본 개념 및 원리 이해"
        contents1_2="2. 다양한 매니퓰레이터 형태 및 종류 학습"
        contents1_3="3. 로봇 제어 및 프로그래밍 환경 구성"
        contents2_1="1. 매니퓰레이터 제어 및 프로그래밍"
        contents2_2="2. 로봇 매니퓰레이터의 시뮬레이션 환경을 통한 테스트 및 디버깅"
        contents2_3="3. 실제 환경에서의 매니퓰레이터 동작 테스트"
        contents3_1="1. 로봇 매니퓰레이터를 활용한 실제 작업 프로젝트 수행"
        contents3_2="2. 자동화 및 제조 분야에서의 응용 프로젝트 경험"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="6축 매니퓰레이터를 제어하고 프로그래밍하는 방법을 학습한다."
        contents2="로봇 팔 제어 및 로봇 아머처 프로젝트를 통해 로봇 공학 능력을 향상시킨다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={manipulatorKitImg1}
        imgSrc2={manipulatorKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={manipulatorClass1}
        imgSrc2={manipulatorClass2}
        imgSrc3={manipulatorClass3}
        imgSrc4={manipulatorClass4}
        imgSrc5={manipulatorClass5}
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
