import { Banner } from "../../components/banner";
import { EduTable } from "../../components/eduDetailContents/EduTable";
import { LearningObjective } from "../../components/eduDetailContents/learningObjective";
import { ContentsSlide } from "../../components/eduDetailContents/ContentsSlide";
// import { KitPicture } from "../../components/eduDetailContents/kitPicture";
import { Notice } from "../../components/eduDetailContents/Notice";

import ros2Img from "../../images/detailContents/slide/edu_detail_ros2/upperBannerImageRos2.png";
import ros2Class1 from "../../images/detailContents/slide/edu_detail_ros2/logo.png";
import ros2Class2 from "../../images/detailContents/slide/edu_detail_ros2/logo.png";
import ros2Class3 from "../../images/detailContents/slide/edu_detail_ros2/logo.png";
import ros2Class4 from "../../images/detailContents/slide/edu_detail_ros2/logo.png";
import ros2Class5 from "../../images/detailContents/slide/edu_detail_ros2/logo.png";

export const Ros2: React.FC = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="교육 콘텐츠"
        route1="/showDetailContent"
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="ROS2"
        route2="/ros2"
        route2Opacity={1}
        title="ROS2"
        subtitle="Robot Operating System2"
        content="차세대 로봇 개발을 위한 ROS2, 로봇 운영 시스템의 모든 것"
        contentClass="Subtitle-smallFont"
        contentsImg={ros2Img}
      />

      <EduTable
        title="교육 소개"
        tabletitle1="교육 대상"
        tabletitle2="기대 효과"
        tabletitle3="교육 형태"
        contents1_1="로봇 관련기업, 로봇을 전공하는 대학생"
        contents2_1=" • 로봇 소프트웨어 개발 능력을 향상시킨다."
        contents2_2=" • 로봇 공학 및 자동화 분야에서의 전문성을 키울 수 있으며, 실전 프로젝트를 통해 실무 경험을 쌓을 기회를 얻는다."
        contents2_3=" • ROS2를 활용한 다양한 응용 분야에서의 활동과 연구 기회를 확대할 수 있다."
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
        contents1_1="1. ROS2의 기본 개념 및 아키텍처 이해"
        contents1_2="2. ROS2 패키지 및 노드 개념 학습, ROS2 설치 및 환경 설정"
        contents1_3="3. ROS2 환경 구성 및 필수 도구 설치, ROS2 워크스페이스 설정"
        contents2_1="1. ROS2 기본 명령어 및 도구를 사용한 패키지 생성 및 실행"
        contents2_2="2. 토픽 및 서비스 통신 개념 학습"
        contents2_3="3. ROS2를 활용한 로봇 소프트웨어 개발 방법 학습"
        contents3_1="1. ROS2를 활용한 실제 로봇 제어 프로젝트 수행"
        contents3_2="2. 자율 주행, 로봇 팔 제어, 센서 인터페이스 등 다양한 응용 분야 탐구"
        liClass1="EduTable-table-subContents"
        liClass1_1="List-style-dics"
        liClass1_2="List-style-dics"
        liClass1_3="List-style-dics"
        liClass2="EduTable-table-subContents"
        liClass2_1="List-style-dics"
        liClass2_2="List-style-dics"
        liClass2_3="List-style-dics"
        liClass3="EduTable-table-subContents"
        liClass3_1="List-style-dics"
        liClass3_2="List-style-dics"
        liClass3_3="List-style-dics"
        titleMarginTop={12.222}
      />

      <LearningObjective
        title="수업 목표"
        titleMarginTop={12.222}
        contents1="ROS2(Robot Operating System 2)를 사용하여 로봇 소프트웨어 개발 및 제어를 학습한다."
        contents2="로봇 제어 및 로봇 소프트웨어 개발 능력을 향상시키며, 로봇 공학에 대한 이해를 높인다."
      />

      <ContentsSlide
        title="교육 사진"
        titleMarginTop={12.222}
        imgSrc1={ros2Class1}
        imgSrc2={ros2Class2}
        imgSrc3={ros2Class3}
        imgSrc4={ros2Class4}
        imgSrc5={ros2Class5}
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
