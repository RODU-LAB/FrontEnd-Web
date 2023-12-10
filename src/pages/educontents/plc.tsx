import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
// import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import plcImg from "../../images/detailContents/slide/edu_detail_plc/upperBannerImagePlc.png";
import plcClass1 from "../../images/detailContents/slide/edu_detail_plc/logo.png";
import plcClass2 from "../../images/detailContents/slide/edu_detail_plc/logo.png";
import plcClass3 from "../../images/detailContents/slide/edu_detail_plc/logo.png";
import plcClass4 from "../../images/detailContents/slide/edu_detail_plc/logo.png";
import plcClass5 from "../../images/detailContents/slide/edu_detail_plc/logo.png";

export const Plc: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="PLC"
        route2="/plc"
        route2Opacity={1}
        title="PLC"
        subtitle="3D plc education"
        content="산업 자동화의 핵심, 프로그래머블 로직 컨트롤러(PLC) 마스터하기"
        contentClass="Programmable Logic Controller"
        contentsImg={plcImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="자동화 관련 기업, 자동화 전공 대학생"
        contents2_1=" •  PLC 기술을 이해하여 제어 시스템을 설계하고 프로그래밍할 수 있는 능력을 갖출 수 있다."
        contents2_2=" •  실제 산업 현장에서의 경험을 쌓고 자동화 및 제어 분야에서의 경쟁력을 향상시킬 수 있다."
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
        contents1_1="1. PLC의 개념, 역사, 및 주요 역할 이해, 다양한 PLC 제조사 및 모델의 비교 분석"
        contents1_2="2. 전기 회로와 전기 구성 요소의 기초 이해, 전기 신호 처리 및 전기 제어 시스템 개념 습득"
        contents2_1="1. PLC 프로그래밍 언어 (예: ladder logic) 이해와 활용"
        contents2_2="2. PLC 소프트웨어 사용법 학습, PLC 제어 시스템 설계 및 구현"
        contents2_3="3. 실습 프로젝트를 통한 PLC 프로그래밍 경험"
        contents3_1="1. 실제 산업 현장에서의 PLC 제어 시스템 설계 및 프로그래밍 프로젝트 수행"
        contents3_2="2. PLC 기술을 활용한 다양한 응용 분야 탐구"
        contents3_3="3. 자동화 및 제어 분야에서의 경력 및 실무 능력 향상"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="PLC(Programmable Logic Controller) 시스템을 이해하고, 제어 및 자동화 시스템을 구현한다."
        contents2="PLC 프로그래밍 및 시스템 설계를 통해 제어 공학 지식을 향상시킨다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={plcClass1}
        imgSrc2={plcClass2}
        imgSrc3={plcClass3}
        imgSrc4={plcClass4}
        imgSrc5={plcClass5}
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
