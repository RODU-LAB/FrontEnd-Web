import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import yoloImg from "../../images/detailContents/slide/edu_detail_yolo/upperBannerImageYolo.png";
import yoloClass1 from "../../images/detailContents/slide/edu_detail_yolo/logo.png";
import yoloClass2 from "../../images/detailContents/slide/edu_detail_yolo/logo.png";
import yoloClass3 from "../../images/detailContents/slide/edu_detail_yolo/logo.png";
import yoloClass4 from "../../images/detailContents/slide/edu_detail_yolo/logo.png";
import yoloClass5 from "../../images/detailContents/slide/edu_detail_yolo/logo.png";

export const Yolo: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="YOLO"
        route2="/yolo"
        route2Opacity={1}
        title="YOLO"
        subtitle="You Only Look Once"
        content="실시간 객체 인식 기술 YOLO를 통한 첨단 시각 처리 학습"
        contentClass="Subtitle-smallFont"
        contentsImg={yoloImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 전공 대학생, 인공지능 전공 대학생"
        contents2_1=" • 딥러닝 객체 탐지 기술을 이해하고 실제로 구현하는 능력을 갖출 수 있다."
        contents2_2=" • 컴퓨터 비전 및 이미지 처리 분야에서의 실무 경험을 쌓아 실전에서의 능력을 키울 수 있다."
        contents3_1="AI 교육"
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
        contents1_1="1. 딥러닝 기초 이해, 딥러닝의 기본 개념 및 원리 학습"
        contents1_2="2. 이미지 처리 및 객체 탐지의 필요성 이해, 신경망 구조 및 역전파 알고리즘 이해"
        contents2_1="1. YOLO 알고리즘의 동작 원리와 구조 학습, YOLO 모델을 학습시키고 성능을 향상시키는 방법 학습"
        contents2_2="2. YOLO 모델의 구현 및 훈련 방법 학습, 객체 탐지용 데이터셋 수집 및 전처리 방법 습득"
        contents2_3="3. 텐서플로우 또는 파이토치를 사용하여 YOLO 모델 개발"
        contents3_1="1. YOLO 모델을 활용하여 실제 객체 탐지 프로젝트 수행"
        contents3_2="2. 이미지나 비디오에서 객체를 탐지하고 분류하는 능력 향상"
        contents3_3="3. 이미지 및 비디오 처리 분야에서의 경력 및 연구 기회 모색"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="객체 검출 및 분류에 대한 딥러닝 알고리즘을 학습하고, YOLO(You Only Look Once) 알고리즘을 구현한다."
        contents2="이미지 및 비디오에서 객체를 식별하는 능력을 개발하고, 딥러닝 모델의 훈련 및 평가를 수행한다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={yoloClass1}
        imgSrc2={yoloClass2}
        imgSrc3={yoloClass3}
        imgSrc4={yoloClass4}
        imgSrc5={yoloClass5}
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
