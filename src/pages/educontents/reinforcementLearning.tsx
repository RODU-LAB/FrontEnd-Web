import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/eduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/contentsSlide";
// import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/notice";

import reinforcementLearningImg from "../../images/detailContents/slide/edu_detail_reinforcementLearning/upperBannerImageReinforcementLearning.png";
import reinforcementLearningClass1 from "../../images/detailContents/slide/edu_detail_reinforcementLearning/logo.png";
import reinforcementLearningClass2 from "../../images/detailContents/slide/edu_detail_reinforcementLearning/logo.png";
import reinforcementLearningClass3 from "../../images/detailContents/slide/edu_detail_reinforcementLearning/logo.png";
import reinforcementLearningClass4 from "../../images/detailContents/slide/edu_detail_reinforcementLearning/logo.png";
import reinforcementLearningClass5 from "../../images/detailContents/slide/edu_detail_reinforcementLearning/logo.png";

export const ReinforcementLearning: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="강화학습"
        route2="/reinforcementLearning"
        route2Opacity={1}
        title="강화학습"
        subtitle="Reinforcement Learning"
        content="지능형 시스템을 위한 강화학습 기술, 스마트한 의사결정 알고리즘 개발"
        contentClass="Subtitle-smallFont"
        contentsImg={reinforcementLearningImg}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 전공 대학생, 인공지능 전공 대학생"
        contents2_1=" • 강화학습 기술을 이해하고 다양한 응용 분야에서 적용할 수 있는 능력을 갖출 수 있다."
        contents2_2=" • 실전 프로젝트를 통해 실무 경험을 쌓고 인공지능 분야에서의 경쟁력을 향상시킬 수 있다."
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
        contents1_1="1. 강화학습 기초 이해, 강화학습의 개념과 원리 학습"
        contents1_2="2. 마르코프 결정 과정 (MDP) 이해, Python을 활용한 강화학습 라이브러리 (예: OpenAI Gym) 사용법 학습"
        contents2_1="1. 다양한 강화학습 알고리즘 (예: Q-learning, DDPG, A3C)의 이해와 비교 분석, 강화학습 모델의 구조와 학습 과정 학습"
        contents2_2="2. 강화학습 모델을 설계하고 구현하는 방법 학습, 모델 학습을 위한 환경 설정과 하이퍼파라미터 튜닝 학습"
        contents3_1="1. 실제 강화학습 문제를 해결하는 프로젝트 수행, 게임 플레이, 로봇 제어, 자율 주행 등 다양한 응용 분야 탐구"
        contents3_2="2.  강화학습 기술을 활용한 다양한 응용 분야 탐구, 인공지능 분야에서의 경력 및 연구 기회 모색"
        liClass1="EduTable-table-subContents"
        liClass2="EduTable-table-subContents"
        liClass3="EduTable-table-subContents"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="강화학습의 기본 개념을 이해하고, 강화학습 알고리즘을 구현하여 에이전트를 훈련시킨다."
        contents2="로봇 제어, 게임 플레이, 자율 주행 차량 제어 등 다양한 영역에서 강화학습을 적용하는 능력을 향상시킨다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={reinforcementLearningClass1}
        imgSrc2={reinforcementLearningClass2}
        imgSrc3={reinforcementLearningClass3}
        imgSrc4={reinforcementLearningClass4}
        imgSrc5={reinforcementLearningClass5}
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
