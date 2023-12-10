import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
// import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import kicadImg from "../../images/detailContents/slide/edu_detail_kicad/upperBannerImageKicad.png";
import kicadClass1 from "../../images/detailContents/slide/edu_detail_kicad/logo.png";
import kicadClass2 from "../../images/detailContents/slide/edu_detail_kicad/logo.png";
import kicadClass3 from "../../images/detailContents/slide/edu_detail_kicad/logo.png";
import kicadClass4 from "../../images/detailContents/slide/edu_detail_kicad/logo.png";
import kicadClass5 from "../../images/detailContents/slide/edu_detail_kicad/logo.png";

export const Kicad: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="KiCad"
        route2="/kicad"
        route2Opacity={1}
        title="KiCad"
        subtitle="Kicad"
        content="전자 회로 설계의 기초부터 고급 기술까지, KiCad로 시작하는 PCB 디자인"
        contentClass="Subtitle-smallFont"
        contentsImg={kicadImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="전자공학 학생, 전자 회로 설계 및 PCB 디자인 지식을 가진 전공자"
        contents2_1="  • 전자 회로 설계 및 PCB 디자인을 위해 KiCad 소프트웨어를 활용하는 능력을 갖출 수 있다."
        contents2_2="  • 실제 PCB 디자인 프로젝트를 수행하여 실무 경험을 쌓을 수 있으며, 전자공학 및 PCB 디자인 분야에서의 경잭력을 향상시킬 수 있다."
        contents3_1="장비 교육"
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
        contents1_1="1. 전자 회로의 기본 개념 및 구성 요소 이해, 회로 설계와 디자인 원리 학습"
        contents1_2="2. KiCad 소프트웨어 소개와 설치 방법 학습"
        contents1_3="3. 인터페이스 및 도구 이해"
        contents2_1="1. KiCad를 사용하여 전자 회로를 설계하는 방법 학습"
        contents2_2="2. PCB 레이아웃 디자인, PCB 레이아웃 디자인 원칙 및 기술 습득"
        contents3_1="1. 현실적인 PCB 디자인 프로젝트 수행"
        contents3_2="2. 실제 제품에 적용 가능한 PCB 디자인 경험"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="KiCad를 사용하여 PCB(Printed Circuit Board) 디자인을 학습하고, 전자 회로 설계 능력을 향상시킨다."
        contents2="실제 PCB를 제작하고 회로를 구성하는 능력을 개발한다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={kicadClass1}
        imgSrc2={kicadClass2}
        imgSrc3={kicadClass3}
        imgSrc4={kicadClass4}
        imgSrc5={kicadClass5}
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
