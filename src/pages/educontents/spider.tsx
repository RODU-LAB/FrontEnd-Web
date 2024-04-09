import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
import { KitPicture } from "../../components/eduDetailContents/KitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import spiderImg from "../../images/detailContents/slide/edu_detail_spider/upperBannerImageSpider.png";
import spiderKitImg1 from "../../images/detailContents/slide/edu_detail_spider/spiderImage1.png";
import spiderKitImg2 from "../../images/detailContents/slide/edu_detail_spider/spiderImage2.png";
import spiderClass1 from "../../images/detailContents/slide/edu_detail_spider/logo.png";
import spiderClass2 from "../../images/detailContents/slide/edu_detail_spider/logo.png";
import spiderClass3 from "../../images/detailContents/slide/edu_detail_spider/logo.png";
import spiderClass4 from "../../images/detailContents/slide/edu_detail_spider/logo.png";
import spiderClass5 from "../../images/detailContents/slide/edu_detail_spider/logo.png";

export const Spider: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/contents"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="거미 로봇"
        route2="/spider"
        route2Opacity={1}
        title="거미 로봇"
        subtitle="Spider Robot"
        content="고유한 움직임을 가진 8개 모터를 활용하여 로봇 프로그래밍 실습"
        contentClass="Subtitle-smallFont"
        contentsImg={spiderImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" • 로봇 공학 분야에서 기술적 지식을 증진시키고, 복잡한 기술적 도전과제에 대한 대응 능력을 향상시킨다."
        contents2_2=" • 실제 환경에서 발생할 수 있는 도전적인 상황에 대한 창의적이고 혁신적인 문제 해결 능력을 개발한다."
        contents2_3=" • 다양한 산업 분야에서 로봇 기술을 응용하는 능력을 키우게 하여 현업에서의 실제 응용 가능성을 강조한다."
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
        contents1_1="1. 거미 로봇의 기계적 구조와 작동 원리 이해"
        contents1_2="2. SG90 모터의 특성과 제어 방법 학습"
        contents2_1="1. 프로그래밍을 통한 거미 로봇의 기본 움직임 구현"
        contents2_2="2. 다양한 움직임 패턴 개발 및 코딩 실습"
        contents2_3="3. 실제 로봇을 통한 움직임 테스트 및 최적화"
        contents3_1="1. 창의적인 움직임 패턴 개발 프로젝트 수행"
        contents3_2="2. 프로젝트 결과물 발표 및 토론"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="SG90 모터, 블루투스 모듈, 감지 센서와 같은 부품의 원리와 구성을 이해합니다."
        contents2="모터 제어 알고리즘을 학습하고 로봇 움직임을 프로그래밍합니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={spiderKitImg1}
        imgSrc2={spiderKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={spiderClass1}
        imgSrc2={spiderClass2}
        imgSrc3={spiderClass3}
        imgSrc4={spiderClass4}
        imgSrc5={spiderClass5}
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
