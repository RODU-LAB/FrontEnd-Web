import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import deepLearningImg from "../../images/detailContents/slide/edu_detail_deepLearning/upperBannerImageDeepLearning.png";
import deepLearningClass1 from "../../images/detailContents/slide/edu_detail_deepLearning/logo.png";
import deepLearningClass2 from "../../images/detailContents/slide/edu_detail_deepLearning/logo.png";
import deepLearningClass3 from "../../images/detailContents/slide/edu_detail_deepLearning/logo.png";
import deepLearningClass4 from "../../images/detailContents/slide/edu_detail_deepLearning/logo.png";
import deepLearningClass5 from "../../images/detailContents/slide/edu_detail_deepLearning/logo.png";

export const DeepLearning: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="딥러닝"
        route2="/deepLearning"
        route2Opacity={1}
        title="딥러닝"
        subtitle="Deep Learning"
        content="딥러닝 기술로 인공지능의 미래를 탐색하는 심화 교육"
        contentClass="Subtitle-smallFont"
        contentsImg={deepLearningImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 전공 대학생, 인공지능 전공 대학생"
        contents2_1=" • 딥러닝 기술을 이해하고 실제로 구현하는 능력을 갖출 수 있다."
        contents2_2=" • 다양한 응용 분야에서 딥러닝을 활용하여 문제를 해결할 수 있는 능력을 키울 수 있다."
        contents3_1="AI 교육"
        liClass1="EduTable-table-subContents"
        liClass2_1="EduTable-table-subContents List-style-dics"
        liClass2_2="EduTable-table-subContents List-style-dics"
        liClass2_3="EduTable-table-subContents List-style-dics"
        liClass3="EduTable-table-subContents"
        titleMarginTop={5}
      />

      <EduTable
        title="커리큘럼"
        tabletitle1="준비단계"
        tabletitle2="실행단계"
        tabletitle3="마무리 단계"
        contents1_1="1. 딥러닝 기초 이해, 딥러닝의 개념 및 역사 이해"
        contents1_2="2. 신경망의 구조와 작동 원리 학습, 딥러닝 라이브러리 (예: TensorFlow, PyTorch) 사용법 학습"
        contents2_1="1. 신경망 설계 및 구현, 다층 퍼셉트론 (MLP) 및 합성곱 신경망 (CNN)의 설계와 구현 학습"
        contents2_2="2. 신경망의 하이퍼파라미터 튜닝 및 최적화 방법 학습, 딥러닝 모델 학습"
        contents2_3="3. 학습 데이터셋 준비 및 전처리 기술 습득, 모델 학습과 평가 방법 습득"
        contents3_1="1. 딥러닝 모델을 사용하여 실제 문제를 해결하는 프로젝트 수행"
        contents3_2="2. 이미지 분류, 자연어 처리, 음성 인식 등 다양한 응용 분야 탐구"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="딥러닝 이론을 이해하고, 신경망 모델을 설계하고 훈련시킨다."
        contents2="이미지 분류, 자연어 처리 등 다양한 응용 분야에서 딥러닝 모델을 활용하는 능력을 향상시킨다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={deepLearningClass1}
        imgSrc2={deepLearningClass2}
        imgSrc3={deepLearningClass3}
        imgSrc4={deepLearningClass4}
        imgSrc5={deepLearningClass5}
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
