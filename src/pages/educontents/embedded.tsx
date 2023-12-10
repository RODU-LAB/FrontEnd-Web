import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
// import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import embeddedImg from "../../images/detailContents/slide/edu_detail_embedded/upperBannerImageEmbedded.png";
import embeddedClass1 from "../../images/detailContents/slide/edu_detail_embedded/logo.png";
import embeddedClass2 from "../../images/detailContents/slide/edu_detail_embedded/logo.png";
import embeddedClass3 from "../../images/detailContents/slide/edu_detail_embedded/logo.png";
import embeddedClass4 from "../../images/detailContents/slide/edu_detail_embedded/logo.png";
import embeddedClass5 from "../../images/detailContents/slide/edu_detail_embedded/logo.png";

export const Embedded: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="임베디드 시스템"
        route2="/embedded"
        route2Opacity={1}
        title="임베디드 시스템"
        subtitle="Embedded System"
        content="임베디드 시스템의 세계, 마이크로컨트롤러부터 복잡한 시스템까지"
        contentClass="Subtitle-smallFont"
        contentsImg={embeddedImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="전자공학, 컴퓨터 공학, 소프트웨어 공학 학생 및 전문가"
        contents2_1=" •  임베디드 시스템 설계 및 프로그래밍 능력을 갖출 수 있으며, 실전 프로젝트를 통해 실무 경험을 쌓을 수 있다."
        contents2_2=" •  임베디드 시스템 분야에서의 전문성을 향상시켜 다양한 응용 분야에서 활용할 수 있는 능력을 키우게 된다."
        contents3_1="OS 교육"
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
        contents1_1="1. 임베디드 시스템 기본 개념 이해, 마이크로컨트롤러 (Microcontroller) 아키텍처 이해"
        contents1_2="2. 임베디드 시스템의 정의 및 역할 이해"
        contents1_3="3. 주요 마이크로컨트롤러 아키텍처 및 특징 학습"
        contents2_1="1. 임베디드 시스템 프로그래밍"
        contents2_2="2. 라즈베리파이를 대상으로 프로그래밍 실습"
        contents2_3="3. 실제 임베디드 시스템에서의 코드 개발(센서 및 액추에이터 제어 방법 학습)"
        contents3_1="1. 자신의 아이디어를 바탕으로 프로토타입 개발"
        contents3_2="2. 임베디드 시스템 기술을 활용한 다양한 응용 분야 탐구"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="임베디드 시스템 개발을 위한 하드웨어와 소프트웨어를 이해하고, 마이크로컨트롤러를 프로그래밍한다."
        contents2="실제 임베디드 시스템 프로젝트를 수행하여 시스템 설계 및 프로그래밍 능력을 향상시킨다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={embeddedClass1}
        imgSrc2={embeddedClass2}
        imgSrc3={embeddedClass3}
        imgSrc4={embeddedClass4}
        imgSrc5={embeddedClass5}
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
