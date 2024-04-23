import { Banner } from "../../components/Banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
import { KitPicture } from "../../components/eduDetailContents/KitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import ottoImg from "../../images/detailContents/slide/edu_detail_otto/upperBannerrImageOtto.png";
import ottoKitImg1 from "../../images/detailContents/slide/edu_detail_otto/ottoImage1.png";
import ottoKitImg2 from "../../images/detailContents/slide/edu_detail_otto/ottoImage2.png";
import ottoClass1 from "../../images/detailContents/slide/edu_detail_otto/logo.png";
import ottoClass2 from "../../images/detailContents/slide/edu_detail_otto/logo.png";
import ottoClass3 from "../../images/detailContents/slide/edu_detail_otto/logo.png";
import ottoClass4 from "../../images/detailContents/slide/edu_detail_otto/logo.png";
import ottoClass5 from "../../images/detailContents/slide/edu_detail_otto/logo.png";

export const Otto: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/contents"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="뚜벅이 로봇"
        route2="/otto"
        route2Opacity={1}
        title="뚜벅이 로봇"
        subtitle="OTTO BOT"
        content="통신을 통해 다양한 움직임을 구현 가능한 2족 보행 로봇"
        contentClass="Subtitle-smallFont"
        contentsImg={ottoImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="초등학생, 중학생"
        contents2_1=" •  이론적 지식과 실습을 결합하여 로봇 기술의 실제 적용 방법을 체험할 수 있다."
        contents2_2=" •  로봇의 프로그래밍과 조작을 통해 창의적 사고와 문제 해결 능력을 키울 수 있다."
        contents2_3=" •  로봇과의 상호작용을 통해 인공지능 및 로봇 공학에 대한 관심과 흥미를 증가시킨다."
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
        contents1_1="1. 2족 보행 로봇의 기초 개념과 움직임 매커니즘 이해"
        contents1_2="2. 모터 제어 및 로봇의 균형 유지 방법 학습"
        contents2_1="1. 전진, 후진, 좌, 우 움직임을 위한 프로그래밍 실습"
        contents2_2="2. 무릎, 다리, 발 움직임을 통합하여 자연스러운 보행 구현"
        contents2_3="3. 통신 프로토콜을 활용한 원격 제어 방법 실습"
        contents3_1="1. 개별 움직임 패턴 제작 및 실행"
        contents3_2="2. 최종 프로젝트 발표 및 성과 평가"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="모터와 센서를 통한 로봇 움직임의 기본 원리를 이해하고 부품을 조립합니다."
        contents2="모터 제어와 로봇 움직임 이론을 습득하여 로봇 공학 지식을 쌓습니다."
      />

      <KitPicture
        title="키트 사진"
        titleMarginTop={12.222}
        imgSrc1={ottoKitImg1}
        imgSrc2={ottoKitImg2}
        // 사진이 1개이면 gridTemplateColumns2을 0으로
        gridTemplateColumns1={32.222}
        gridTemplateColumns2={32.222}
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={ottoClass1}
        imgSrc2={ottoClass2}
        imgSrc3={ottoClass3}
        imgSrc4={ottoClass4}
        imgSrc5={ottoClass5}
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
