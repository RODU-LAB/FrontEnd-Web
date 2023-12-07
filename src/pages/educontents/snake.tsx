import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import snakeImg from "../../images/detailContents/slide/edu_detail_snake/upperBannerImageSnake.png";
import snakeKitImg1 from "../../images/detailContents/slide/edu_detail_snake/snakeImage1.png";
import snakeKitImg2 from "../../images/detailContents/slide/edu_detail_snake/snakeImage2.png";
import snakeClass1 from "../../images/detailContents/slide/edu_detail_snake/logo.png";
import snakeClass2 from "../../images/detailContents/slide/edu_detail_snake/logo.png";
import snakeClass3 from "../../images/detailContents/slide/edu_detail_snake/logo.png";
import snakeClass4 from "../../images/detailContents/slide/edu_detail_snake/logo.png";
import snakeClass5 from "../../images/detailContents/slide/edu_detail_snake/logo.png";

export const Snake: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="뱀 로봇"
        route2="/snake"
        route2Opacity={1}
        title="뱀 로봇"
        subtitle="Snake Robot"
        content="유연한 움직임과 블루투스 제어로 로봇 프로그래밍을 배우는 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={snakeImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" • 로봇 공학에 필요한 기본 원리와 프로그래밍 기술을 습득하여 실제 로봇을 개발하고 제어하는데 필요한 기술 역량을 향상시킨다."
        contents2_2=" • 복잡한 로봇 시스템을 디자인하고 개발하는 과정에서 문제를 해결하며 창의적이고 혁신적인 디자인 능력을 키운다."
        contents2_3=" • 로봇 공학 분야에서의 실무 경험을 제공하여, 이론적인 지식뿐만 아니라 현장에서의 능력을 향상시킨다."
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
        contents1_1="1. 뱀 로봇의 구조와 SG90 모터에 대한 기본 지식 습득"
        contents1_2="2. 블루투스 통신 원리와 GUI 기초 이론 학습"
        contents2_1="1. GUI 인터페이스를 통한 뱀 로봇 제어 방법 실습"
        contents2_2="2. 다양한 움직임 패턴 프로그래밍 및 실현"
        contents2_3="3. 유연한 움직임을 위한 알고리즘 개발 및 적용"
        contents3_1="1. 개별 또는 그룹 프로젝트를 통한 종합적인 로봇 제어 실습"
        contents3_2="2. 프로젝트 발표 및 피드백"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="SG90 모터, 블루투스 모듈과 같은 부품의 원리와 구성을 이해합니다."
        contents2="설계 및 프로그래밍 이론을 학습하고, 블루투스 통신을 통한 GUI 제어를 연습하여 로봇 공학적 사고력을 강화합니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={snakeKitImg1}
        imgSrc2={snakeKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={snakeClass1}
        imgSrc2={snakeClass2}
        imgSrc3={snakeClass3}
        imgSrc4={snakeClass4}
        imgSrc5={snakeClass5}
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
