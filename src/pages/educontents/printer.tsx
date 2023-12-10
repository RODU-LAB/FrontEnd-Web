import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
// import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import printerImg from "../../images/detailContents/slide/edu_detail_printer/upperBannerImagePrinter.png";
import printerClass1 from "../../images/detailContents/slide/edu_detail_printer/logo.png";
import printerClass2 from "../../images/detailContents/slide/edu_detail_printer/logo.png";
import printerClass3 from "../../images/detailContents/slide/edu_detail_printer/logo.png";
import printerClass4 from "../../images/detailContents/slide/edu_detail_printer/logo.png";
import printerClass5 from "../../images/detailContents/slide/edu_detail_printer/logo.png";

export const Printer: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="3D 프린터"
        route2="/printer"
        route2Opacity={1}
        title="3D 프린터"
        subtitle="3D Printer"
        content="혁신적인 제작 기술, 3D 프린팅의 모든 것"
        contentClass="Subtitle-smallFont"
        contentsImg={printerImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="제조, 디자인 관련 기업, 대학생"
        contents2_1=" •  3D 프린팅 기술을 활용하여 다양한 제품을 제작하고 디자인 할 수 있는 능력을 갖출 수 있다."
        contents2_2=" •  3D 프린팅 장비의 운용과 유지보수에 대한 실무 능력을 키울 수 있으며, 제조 및 디자인 분야에서의 경쟁력을 향상 시킬 수 있다."
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
        contents1_1="1. 3D 프린팅 기초 이해, 3D 프린팅의 작동 원리와 역사 학습"
        contents1_2="2. 다양한 3D 프린팅 기술 및 장비의 종류 이해, Creality Print 소프트웨어 사용"
        contents1_3="3. 3D 모델링 소프트웨어 (예: Tinkercad, Fusion 360) 사용법 학습"
        contents2_1="1. 3D 프린팅을 위한 3D 모델 제작 및 수정 방법 학습"
        contents2_2="2. 다양한 소재 및 디자인 요소 적용, 다양한 3D 프린터 장비의 운용 방법 습득"
        contents2_3="3. 프린터 청소, 유지보수 및 문제 해결 기술 학습"
        contents3_1="1. 개인 또는 팀 프로젝트를 통해 3D 프린팅을 활용한 실전 제품 제작"
        contents3_2="2. 제조 및 디자인 능력 향상, 기대 효과 및 응용 분야 탐구"
        contents3_3="3. 3D 프린팅 기술을 활용한 다양한 응용 분야 탐구, 제조, 디자인 및 교육 분야에서의 경력 및 연구 기회 모색"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="3D 프린터의 작동 원리를 이해하고, 3D 모델링 소프트웨어를 사용하여 모델을 디자인 한다."
        contents2="3D 프린터를 사용하여 실제 객체를 제작하고, 제품 디자인 및 제조 능력을 향상시킨다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={printerClass1}
        imgSrc2={printerClass2}
        imgSrc3={printerClass3}
        imgSrc4={printerClass4}
        imgSrc5={printerClass5}
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
