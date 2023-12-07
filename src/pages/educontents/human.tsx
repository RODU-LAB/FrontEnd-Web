import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import humanImg from "../../images/detailContents/slide/edu_detail_human/upperBannerImageHuman.png";
import humanKitImg1 from "../../images/detailContents/slide/edu_detail_human/humanImage1.png";
import humanKitImg2 from "../../images/detailContents/slide/edu_detail_human/humanImage2.png";
import humanClass1 from "../../images/detailContents/slide/edu_detail_human/logo.png";
import humanClass2 from "../../images/detailContents/slide/edu_detail_human/logo.png";
import humanClass3 from "../../images/detailContents/slide/edu_detail_human/logo.png";
import humanClass4 from "../../images/detailContents/slide/edu_detail_human/logo.png";
import humanClass5 from "../../images/detailContents/slide/edu_detail_human/logo.png";

export const Human: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="인간형 로봇"
        route2="/human"
        route2Opacity={1}
        title="인간형 로봇"
        subtitle="Humanoid Robot"
        content="모터 14개로 사람의 움직임과 모션을 흉내내는 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={humanImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="중학생, 고등학생"
        contents2_1=" • 로봇의 동작을 제어하기 위해 코딩 및 기본적인 로봇 제어 기술을 향상시킨다."
        contents2_2=" • 로봇이 동작하는 것에서 발생할 수 있는 다양한 문제를 해결하면서, 문제 해결 능력을 키운다."
        contents2_3=" • 로봇의 디자인과 외형을 결정하며, 창의성을 키우고 자유로운 아이디어를 구현하는 경험을 제공한다."
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
        contents1_1="1. 인간과 유사한 움직임을 구현할 수 있는 로봇의 기본 원리와 메커니즘 학습."
        contents1_2="2. 14개 모터의 작동 원리와 제어 방법에 대한 이해."
        contents2_1="1. 섬세한 움직임을 위한 프로그래밍 및 제어 알고리즘 개발."
        contents2_2="2. 로봇의 움직임 테스트 및 세부 조정."
        contents3_1="1. 로봇의 움직임 및 모션 정밀도 평가."
        contents3_2="2. 완성된 로봇의 기능과 움직임 시연."
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="14개 모터를 사용하여 사람의 움직임과 모션을 구현하는 프로그래밍을 수행 합니다."
        contents2="모터 제어와 로봇 모션 모방 이론을 학습하고 로봇의 섬세한 제어를 연습합니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={humanKitImg1}
        imgSrc2={humanKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={humanClass1}
        imgSrc2={humanClass2}
        imgSrc3={humanClass3}
        imgSrc4={humanClass4}
        imgSrc5={humanClass5}
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
