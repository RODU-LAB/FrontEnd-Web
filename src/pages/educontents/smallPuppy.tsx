import { Banner } from "../../components/Banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
import { KitPicture } from "../../components/eduDetailContents/KitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import smallPuppyImg from "../../images/detailContents/slide/edu_detail_smallPuppy/upperBannerImageSmallPuppy.png";
import smallPuppyKitImg1 from "../../images/detailContents/slide/edu_detail_smallPuppy/smallPuppyImage1.png";
import smallPuppyKitImg2 from "../../images/detailContents/slide/edu_detail_smallPuppy/smallPuppyImage2.png";
import smallPuppyClass1 from "../../images/detailContents/slide/edu_detail_smallPuppy/logo.png";
import smallPuppyClass2 from "../../images/detailContents/slide/edu_detail_smallPuppy/logo.png";
import smallPuppyClass3 from "../../images/detailContents/slide/edu_detail_smallPuppy/logo.png";
import smallPuppyClass4 from "../../images/detailContents/slide/edu_detail_smallPuppy/logo.png";
import smallPuppyClass5 from "../../images/detailContents/slide/edu_detail_smallPuppy/logo.png";

export const SmallPuppy: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/contents"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="작은 강아지 로봇"
        route2="/smallPuppy"
        route2Opacity={1}
        title="작은 강아지 로봇"
        subtitle="Puppy Robot"
        content="8개 모터로 강아지와 같은 움직임을 구현하는 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={smallPuppyImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생"
        contents2_1=" •  간단한 프로그래밍과 로봇 제어에 필요한 기술을 습득하며, 소프트웨어 개발 능력을 향상시킨다."
        contents2_2=" •  로봇의 하드웨어와 소프트웨어를 함께 다루어보며 공학적 사고 능력을 향상시킨다."
        contents2_3=" •  로봇의 외형과 동작을 디자인하면서 창의적 사고 능력을 향상시킨다."
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
        contents1_1="1. 4족 보행 로봇의 기본 원리와 구조 이해"
        contents1_2="2. 로봇의 기계적 설계와 각 부분의 기능 이해하기."
        contents1_3="3. 각 모터의 조정 방법과 동기화 원리 학습."
        contents2_1="1. 로봇의 움직임을 제어하기 위한 기본 프로그래밍 학습."
        contents2_2="2. 각 모터의 동작을 조정하여 자연스러운 4족 보행 구현."
        contents2_3="3. 조립된 로봇의 움직임 테스트 및 세밀한 조적 수행."
        contents3_1="1. 로봇의 성능 평가 및 발견된 문제점 해결 방법 모색."
        contents3_2="2. 최종적으로 로봇의 움직임과 성능 평가."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="8개 모터를 활용하여 강아지와 비슷한 움직임을 구현 합니다."
        contents2="모터 제어와 로봇 움직임의 이론을 학습하고, 로봇의 생동감 있는 움직임을 프로그래밍합니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={smallPuppyKitImg1}
        imgSrc2={smallPuppyKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={smallPuppyClass1}
        imgSrc2={smallPuppyClass2}
        imgSrc3={smallPuppyClass3}
        imgSrc4={smallPuppyClass4}
        imgSrc5={smallPuppyClass5}
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
