import snake from "../images/detailContents/snake.png";
import spider from "../images/detailContents/spider.png";
import logistics from "../images/detailContents/logistics.png";
import smallPuppy from "../images/detailContents/smallPuppy.png";
import hourglass from "../images/detailContents/hourGlass.png";
import human from "../images/detailContents/human.png";
import deepLearning from "../images/detailContents/deepLearning.png";
import embedded from "../images/detailContents/embedded.png";
import kicad from "../images/detailContents/kicad.png";
import manipulator from "../images/detailContents/manipulator.png";
import otto from "../images/detailContents/otto.png";
import plc from "../images/detailContents/plc.png";
import printer from "../images/detailContents/printer.png";
import reinforcementLearning from "../images/detailContents/reinforcementLearning.png";
import ros2 from "../images/detailContents/ros2.png";
import securityDog from "../images/detailContents/securityDog.png";
import yolo from "../images/detailContents/yolo.png";
import security from "../images/detailContents/security.png";

import snakeKitImg1 from "../images/detailContents/slide/edu_detail_snake/snakeImage1.png";
import snakeKitImg2 from "../images/detailContents/slide/edu_detail_snake/snakeImage2.png";
import spiderKitImg1 from "../images/detailContents/slide/edu_detail_spider/spiderImage1.png";
import spiderKitImg2 from "../images/detailContents/slide/edu_detail_spider/spiderImage2.png";
import ottoKitImg1 from "../images/detailContents/slide/edu_detail_otto/ottoImage1.png";
import ottoKitImg2 from "../images/detailContents/slide/edu_detail_otto/ottoImage2.png";
import hourglassKitImg1 from "../images/detailContents/slide/edu_detail_hourGlass/hourGlassImage1.png";
import hourglassKitImg2 from "../images/detailContents/slide/edu_detail_hourGlass/hourGlassImage2.png";
import smallPuppyKitImg1 from "../images/detailContents/slide/edu_detail_smallPuppy/smallPuppyImage1.png";
import smallPuppyKitImg2 from "../images/detailContents/slide/edu_detail_smallPuppy/smallPuppyImage2.png";
import humanKitImg1 from "../images/detailContents/slide/edu_detail_human/humanImage1.png";
import humanKitImg2 from "../images/detailContents/slide/edu_detail_human/humanImage2.png";
import securityKitImg1 from "../images/detailContents/slide/edu_detail_security/securityImage1.png";
import securityKitImg2 from "../images/detailContents/slide/edu_detail_security/securityImage2.png";
import logisticsKitImg1 from "../images/detailContents/slide/edu_detail_logistics/logisticsImage1.png";
import logisticsKitImg2 from "../images/detailContents/slide/edu_detail_logistics/logisticsImage2.png";
import securityDogKitImg1 from "../images/detailContents/slide/edu_detail_securityDog/securityDogImage1.png";
import securityDogKitImg2 from "../images/detailContents/slide/edu_detail_securityDog/securityDogImage2.png";
import manipulatorKitImg1 from "../images/detailContents/slide/edu_detail_manipulator/manipulatorImage1.png";
import manipulatorKitImg2 from "../images/detailContents/slide/edu_detail_manipulator/manipulatorImage2.png";

import snakeEduPhoto1 from "../images/detailContents/slide/edu_detail_snake/snakeEduImage1.png";
import snakeEduPhoto2 from "../images/detailContents/slide/edu_detail_snake/snakeEduImage2.png";
import snakeEduPhoto3 from "../images/detailContents/slide/edu_detail_snake/snakeEduImage3.png";
import snakeEduPhoto4 from "../images/detailContents/slide/edu_detail_snake/snakeEduImage4.png";
import snakeEduPhoto5 from "../images/detailContents/slide/edu_detail_snake/snakeEduImage5.png";
import logisticsClass1 from "../images/detailContents/slide/edu_detail_logistics/logisticsEduImage1.png";
import logisticsClass2 from "../images/detailContents/slide/edu_detail_logistics/logisticsEduImage2.png";
import logisticsClass3 from "../images/detailContents/slide/edu_detail_logistics/logisticsEduImage3.png";
import logisticsClass4 from "../images/detailContents/slide/edu_detail_logistics/logisticsEduImage4.png";
import logisticsClass5 from "../images/detailContents/slide/edu_detail_logistics/logisticsEduImage5.png";

interface EduInfo {
  singleText: string[];
  texts: string[];
}

interface Curriculum {
  texts: string[][];
}

interface EduContent {
  korName: string;
  engName: string;
  bannerContent: string;
  img: string;
  eduInfo: EduInfo;
  curriculum: Curriculum;
  learningObjectives: string[];
  kitPicture?: string[];
  eduPhoto?: string[];
}

interface EduContents {
  [key: string]: EduContent;
}

export const eduContents: EduContents = {
  snake: {
    korName: "뱀 로봇",
    engName: "Snake Robot",
    bannerContent:
      "유연한 움직임과 블루투스 제어로 로봇 프로그래밍을 배우는 로봇",
    img: snake,
    eduInfo: {
      singleText: ["중학생, 고등학생", "로봇 교육"],
      texts: [
        "로봇 공학에 필요한 기본 원리와 프로그래밍 기술을 습득하여 실제 로봇을 개발하고 제어하는데 필요한 기술 역량을 향상시킨다.",
        "복잡한 로봇 시스템을 디자인하고 개발하는 과정에서 문제를 해결하며 창의적이고 혁신적인 디자인 능력을 키운다.",
        "로봇 공학 분야에서의 실무 경험을 제공하여, 이론적인 지식뿐만 아니라 현장에서의 능력을 향상시킨다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "뱀 로봇의 구조와 SG90 모터에 대한 기본 지식 습득",
          "블루투스 통신 원리와 GUI 기초 이론 학습",
        ],
        [
          "GUI 인터페이스를 통한 뱀 로봇 제어 방법 실습",
          "다양한 움직임 패턴 프로그래밍 및 실현",
          "유연한 움직임을 위한 알고리즘 개발 및 적용",
        ],
        [
          "개별 또는 그룹 프로젝트를 통한 종합적인 로봇 제어 실습",
          "프로젝트 발표 및 피드백",
        ],
      ],
    },
    learningObjectives: [
      "SG90 모터, 블루투스 모듈과 같은 부품의 원리와 구성을 이해합니다.",
      "설계 및 프로그래밍 이론을 학습하고, 블루투스 통신을 통한 GUI 제어를 연습하여 로봇 공학적 사고력을 강화합니다.",
    ],
    kitPicture: [snakeKitImg1, snakeKitImg2],
    eduPhoto: [
      snakeEduPhoto1,
      snakeEduPhoto2,
      snakeEduPhoto3,
      snakeEduPhoto4,
      snakeEduPhoto5,
    ],
  },
  spider: {
    korName: "거미 로봇",
    engName: "Spider Robot",
    bannerContent:
      "고유한 움직임을 가진 8개 모터를 활용하여 로봇 프로그래밍 실습",
    img: spider,
    eduInfo: {
      singleText: ["중학생, 고등학생", "로봇 교육"],
      texts: [
        "로봇 공학 분야에서 기술적 지식을 증진시키고, 복잡한 기술적 도전과제에 대한 대응 능력을 향상시킨다.",
        "실제 환경에서 발생할 수 있는 도전적인 상황에 대한 창의적이고 혁신적인 문제 해결 능력을 개발한다.",
        "다양한 산업 분야에서 로봇 기술을 응용하는 능력을 키우게 하여 현업에서의 실제 응용 가능성을 강조한다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "거미 로봇의 기계적 구조와 작동 원리 이해",
          "SG90 모터의 특성과 제어 방법 학습",
        ],
        [
          "프로그래밍을 통한 거미 로봇의 기본 움직임 구현",
          "다양한 움직임 패턴 개발 및 코딩 실습",
          "실제 로봇을 통한 움직임 테스트 및 최적화",
        ],
        [
          "창의적인 움직임 패턴 개발 프로젝트 수행",
          "프로젝트 결과물 발표 및 토론",
        ],
      ],
    },
    learningObjectives: [
      "SG90 모터, 블루투스 모듈, 감지 센서와 같은 부품의 원리와 구성을 이해합니다.",
      "모터 제어 알고리즘을 학습하고 로봇 움직임을 프로그래밍합니다.",
    ],
    kitPicture: [spiderKitImg1, spiderKitImg2],
  },
  otto: {
    korName: "뚜벅이 로봇",
    engName: "OTTO BOT",
    bannerContent: "통신을 통해 다양한 움직임을 구현 가능한 2족 보행 로봇",
    img: otto,
    eduInfo: {
      singleText: ["초등학생, 중학생", "소프트웨어 교육"],
      texts: [
        "이론적 지식과 실습을 결합하여 로봇 기술의 실제 적용 방법을 체험할 수 있다.",
        "로봇의 프로그래밍과 조작을 통해 창의적 사고와 문제 해결 능력을 키울 수 있다.",
        "로봇과의 상호작용을 통해 인공지능 및 로봇 공학에 대한 관심과 흥미를 증가시킨다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "2족 보행 로봇의 기초 개념과 움직임 매커니즘 이해",
          "모터 제어 및 로봇의 균형 유지 방법 학습",
        ],
        [
          "전진, 후진, 좌, 우 움직임을 위한 프로그래밍 실습",
          "무릎, 다리, 발 움직임을 통합하여 자연스러운 보행 구현",
          "통신 프로토콜을 활용한 원격 제어 방법 실습",
        ],
        ["개별 움직임 패턴 제작 및 실행", "최종 프로젝트 발표 및 성과 평가"],
      ],
    },
    learningObjectives: [
      "모터와 센서를 통한 로봇 움직임의 기본 원리를 이해하고 부품을 조립합니다.",
      "모터 제어와 로봇 움직임 이론을 습득하여 로봇 공학 지식을 쌓습니다.",
    ],
    kitPicture: [ottoKitImg1, ottoKitImg2],
  },
  hourglass: {
    korName: "LED 모래시계",
    engName: "LED Hourglass",
    bannerContent:
      "아두이노와 자이로 센서를 활용하여 기울기를 감지하고 도트 매트릭스로 모래시계를 표현하는 로봇",
    img: hourglass,
    eduInfo: {
      singleText: ["초등학생, 중학생", "로봇 교육"],
      texts: [
        "전자공학과 시각적 디자인의 결합을 통해 창의성을 키울 수 있다.",
        "전자기술의 기본 원리를 습득하며, 이를 통해 STEM 분야에 대한 자연스러운 흥미를 발견하고 키울 수 있다.",
        "실제로 회로를 조립하고 프로그래밍하는 기술을 배울 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "아두이노 프로그래밍 기초",
          "자이로 센서 작동 원리와 사용 방법",
          "LED 도트 매트릭스 및 회로 설계 기본 학습.",
        ],
        [
          "아두이노를 사용하여 자이로 센서로부터 기울기 데이터 수집 및 처리",
          "LED 매트릭스에 모래시계 애니메이션 표시를 위한 코드 작성",
          "코드 테스트 및 모래시계 시각적 표현의 정확성 확인",
        ],
        [
          "완성된 LED 모래시계의 기능적 및 시각적 검토",
          "창의성 평가제작 과정, 사용된 기술, 창의적 해결책에 대한 피드백",
        ],
      ],
    },
    learningObjectives: [
      "아두이노 및 자이로 센서를 활용한 LED 모래시계 부품을 조립하고 구성합니다.",
      "아두이노 프로그래밍과 센서 활용 이론을 학습하고 LED 모래시계를 프로그래밍합니다.",
    ],
    kitPicture: [hourglassKitImg1, hourglassKitImg2],
  },
  "small-puppy": {
    korName: "작은 강아지 로봇",
    engName: "Small Puppy Robot",
    bannerContent: "8개 모터로 강아지와 같은 움직임을 구현하는 로봇",
    img: smallPuppy,
    eduInfo: {
      singleText: ["초등학생, 중학생", "로봇 교육"],
      texts: [
        "간단한 프로그래밍과 로봇 제어에 필요한 기술을 습득하며, 소프트웨어 개발 능력을 향상시킨다.",
        "로봇의 하드웨어와 소프트웨어를 함께 다루어보며 공학적 사고 능력을 향상시킨다.",
        "로봇의 외형과 동작을 디자인하면서 창의적 사고 능력을 향상시킨다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "4족 보행 로봇의 기본 원리와 구조 이해",
          "로봇의 기계적 설계와 각 부분의 기능 이해",
          "각 모터의 조정 방법과 동기화 원리 학습",
        ],
        [
          "로봇의 움직임을 제어하기 위한 기본 프로그래밍 학습",
          "각 모터의 동작을 조정하여 자연스러운 4족 보행 구현",
          "조립된 로봇의 움직임 테스트 및 세밀한 조적 수행",
        ],
        [
          "로봇의 성능 평가 및 발견된 문제점 해결 방법 모색",
          "최종적으로 로봇의 움직임과 성능 평가",
        ],
      ],
    },
    learningObjectives: [
      "8개 모터를 활용하여 강아지와 비슷한 움직임을 구현 합니다.",
      "모터 제어와 로봇 움직임의 이론을 학습하고, 로봇의 생동감 있는 움직임을 프로그래밍합니다.",
    ],
    kitPicture: [smallPuppyKitImg1, smallPuppyKitImg2],
  },
  human: {
    korName: "인간형 로봇",
    engName: "Humanoid Robot",
    bannerContent: "모터 14개로 사람의 움직임과 모션을 흉내내는 로봇",
    img: human,
    eduInfo: {
      singleText: ["중학생, 고등학생", "소프트웨어 교육"],
      texts: [
        "로봇의 동작을 제어하기 위해 코딩 및 기본적인 로봇 제어 기술을 향상시킨다.",
        "로봇이 동작하는 것에서 발생할 수 있는 다양한 문제를 해결하면서, 문제 해결 능력을 키운다.",
        "로봇의 디자인과 외형을 결정하며, 창의성을 키우고 자유로운 아이디어를 구현하는 경험을 제공한다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "인간과 유사한 움직임을 구현할 수 있는 로봇의 기본 원리와 메커니즘 학습",
          "14개 모터의 작동 원리와 제어 방법에 대한 이해",
        ],
        [
          "섬세한 움직임을 위한 프로그래밍 및 제어 알고리즘 개발",
          "로봇의 움직임 테스트 및 세부 조정",
        ],
        [
          "로봇의 움직임 및 모션 정밀도 평가",
          "완성된 로봇의 기능과 움직임 시연",
        ],
      ],
    },
    learningObjectives: [
      "14개 모터를 사용하여 사람의 움직임과 모션을 구현하는 프로그래밍을 수행 합니다.",
      "모터 제어와 로봇 모션 모방 이론을 학습하고 로봇의 섬세한 제어를 연습합니다.",
    ],
    kitPicture: [humanKitImg1, humanKitImg2],
  },
  security: {
    korName: "경비 로봇",
    engName: "SecurityBot",
    bannerContent:
      "레이더와 카메라로 자율주행하며 침입자를 감지하는 경비 역할 로봇",
    img: security,
    eduInfo: {
      singleText: ["고등학생", "로봇 교육"],
      texts: [
        "SLAM 기술을 활용하여 로봇이 주변 환경을 이해하고 지도를 작성하는 방법을 학습한다.",
        "다양한 센서와 카메라를 통합하여 환경 정보를 수집하고, 수집한 데이터를 분석하고 효과적으로 사용하는 능력을 향상시킨다.",
        "실제 환경에서 로봇이 어떻게 행동해야 하는지를 결정하고 구현하는 경험을 쌓는다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "레이더 및 센서 기반 자율주행 원리에 대한 이론적 배경 학습",
          "침입 감지 및 보안 시스템에 관한 기본 지식 습득",
          "필요한 레이더, 카메라, 제어 장치에 대한 기본 프로그래밍 학습",
        ],
        [
          "로봇이 주어진 환경 내에서 자율적으로 이동하고 장애물을 피할 수 있도록 프로그래밍",
          "카메라를 활용한 침입자 감지 알고리즘 개발 및 구현",
          "유연한 움직임을 위한 알고리즘 개발 및 적용",
        ],
        [
          "로봇의 자율주행 및 보안 기능 테스트 및 성능 최적화",
          "로봇의 기능성 평가 및 발견된 문제점에 대한 해결책 모색",
          "프로젝트 결과 발표 및 참가자 및 전문가로부터 피드백 수집",
        ],
      ],
    },
    learningObjectives: [
      "레이더 및 카메라를 활용한 경비 로봇의 자율주행 시스템을 이해하고 부품을 활용합니다.",
      "레이더 및 카메라를 활용한 로봇 자율주행 시스템 이론을 학습하고 경비 로봇을 프로그래밍합니다.",
    ],
    kitPicture: [securityKitImg1, securityKitImg2],
  },
  logistics: {
    korName: "물류 로봇",
    engName: "Logistics Robot",
    bannerContent: "자동화된 창고를 위한 물류 로봇 제작, 물류 혁신의 시작점",
    img: logistics,
    eduInfo: {
      singleText: [
        "로봇 기업 종사자, 물류 관련 기업, 로봇 전공 대학생",
        "로봇 교육, RODU 챌린지",
      ],
      texts: [
        "물류 및 공급망 자동화에 필요한 로봇 제어 및 프로그래밍 기술을 습득하여, 업무 효율성과 생산성을 높혀 자동화 역량을 향상시킨다.",
        "물류 및 자동화 분야의 전문 지식을 통해 경쟁력 있는 진로 및 취업 기회를 확보한다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "로봇의 기본 원리 및 구조 학습, 센서 및 액추에이터의 역할 이해",
          "로봇 제어 시스템 학습, 로봇 제어 시스템 개요 이해",
          "로봇 제어 시스템의 구성 및 동작 원리 학습, 로봇 제어용 소프트웨어 및 하드웨어 툴 사용법 학습",
        ],
        [
          "다양한 센서 (예: 거리 센서, 비전 카메라) 및 액추에이터 (예: 모터)의 제어 방법 학습",
          "센서 데이터 수집 및 활용 방법 습득, 로봇 경로 및 이동 제어",
          "주행 경로 최적화 알고리즘 습득, 로봇의 이동 경로 계획 및 제어 기술 학습",
        ],
        [
          "로봇을 물류 시스템에 통합하는 방법 학습, 실전 프로젝트 수행",
          "로봇 물류 작업의 효율성을 최적화하는 방법 습득, 물류 로봇의 성능 향상 및 문제 해결",
        ],
      ],
    },
    learningObjectives: [
      "로봇의 동작 원리와 제어 방법을 이해하고, 물류 자동화 시스템에 적용하는 방법을 배운다.",
      "DC 모터, 센서 등의 부품을 활용하여 로봇을 제작하고 프로그래밍하는 능력을 향상시킨다.",
    ],
    kitPicture: [logisticsKitImg1, logisticsKitImg2],
    eduPhoto: [
      logisticsClass1,
      logisticsClass2,
      logisticsClass3,
      logisticsClass4,
      logisticsClass5,
    ],
  },
  "security-dog": {
    korName: "경비 로봇 강아지",
    engName: "Security Robot Dog",
    bannerContent: "보안을 위한 네 발 친구, 경비 강아지 로봇 제작하기",
    img: securityDog,
    eduInfo: {
      singleText: [
        "로봇 기업 종사자, 물류 관련 기업, 로봇 전공 대학생",
        "소프트웨어 교육, 방문 교육",
      ],
      texts: [
        "경비 로봇 강아지를 개발하고 경비 및 보안 시스템에 적용하는 능력을 갖추게 된다.",
        "보안 및 감시 분야에서의 실무 경험을 쌓아 실전에서의 능력을 키울 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "센서 및 카메라의 역할 및 활용 방법 이해",
          "로봇 제어 시스템 학습, 로봇 제어 시스템의 구성 및 동작 원리 학습",
        ],
        [
          "경비 장비용 센서 (예: 레이더) 및 카메라 활용 방법 학습",
          "침입자 감지 및 주변 환경 모니터링 능력 향상, 안전 및 보안 시스템 통합",
          "로봇 강아지의 자율주행 기술 학습, 경로 계획 알고리즘 습득",
        ],
        [
          "경비 로봇 강아지를 실제 보안 시스템에 적용하는 프로젝트 수행",
          "보안 및 경비 임무 수행 능력 향상, 실제 환경에서의 경비 및 감시 능력 향상",
        ],
      ],
    },
    learningObjectives: [
      "비즈니스의 원리와 창업 개념을 이해하며 기업가 정신을 함양한다.",
      "제조 기반 창업을 위한 프로토타입제작 방법을 습득한다.",
    ],
    kitPicture: [securityDogKitImg1, securityDogKitImg2],
  },
  yolo: {
    korName: "YOLO",
    engName: "You Only Look Once",
    bannerContent: "실시간 객체 인식 기술 YOLO를 통한 첨단 시각 처리 학습",
    img: yolo,
    eduInfo: {
      singleText: ["로봇 전공 대학생, 인공지능 전공 대학생", "AI 교육"],
      texts: [
        "딥러닝 객체 탐지 기술을 이해하고 실제로 구현하는 능력을 갖출 수 있다.",
        "컴퓨터 비전 및 이미지 처리 분야에서의 실무 경험을 쌓아 실전에서의 능력을 키울 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "딥러닝 기초 이해, 딥러닝의 기본 개념 및 원리 학습",
          "이미지 처리 및 객체 탐지의 필요성 이해, 신경망 구조 및 역전파 알고리즘 이해",
        ],
        [
          "YOLO 알고리즘의 동작 원리와 구조 학습, YOLO 모델을 학습시키고 성능을 향상시키는 방법 학습",
          "YOLO 모델의 구현 및 훈련 방법 학습, 객체 탐지용 데이터셋 수집 및 전처리 방법 습득",
          "텐서플로우 또는 파이토치를 사용하여 YOLO 모델 개발",
        ],
        [
          "OLO 모델을 활용하여 실제 객체 탐지 프로젝트 수행",
          "이미지나 비디오에서 객체를 탐지하고 분류하는 능력 향상",
          "이미지 및 비디오 처리 분야에서의 경력 및 연구 기회 모색",
        ],
      ],
    },
    learningObjectives: [
      "객체 검출 및 분류에 대한 딥러닝 알고리즘을 학습하고, YOLO(You Only Look Once) 알고리즘을 구현한다.",
      "이미지 및 비디오에서 객체를 식별하는 능력을 개발하고, 딥러닝 모델의 훈련 및 평가를 수행한다.",
    ],
  },
  "deep-learning": {
    korName: "딥러닝",
    engName: "Deep Learning",
    bannerContent: "딥러닝 기술로 인공지능의 미래를 탐색하는 심화 교육",
    img: deepLearning,
    eduInfo: {
      singleText: ["로봇 전공 대학생, 인공지능 전공 대학생", "AI 교육"],
      texts: [
        "딥러닝 기술을 이해하고 실제로 구현하는 능력을 갖출 수 있다.",
        "다양한 응용 분야에서 딥러닝을 활용하여 문제를 해결할 수 있는 능력을 키울 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "딥러닝 기초 이해, 딥러닝의 개념 및 역사 이해",
          "신경망의 구조와 작동 원리 학습, 딥러닝 라이브러리 (예: TensorFlow, PyTorch) 사용법 학습",
        ],
        [
          "신경망 설계 및 구현, 다층 퍼셉트론 (MLP) 및 합성곱 신경망 (CNN)의 설계와 구현 학습",
          "신경망의 하이퍼파라미터 튜닝 및 최적화 방법 학습, 딥러닝 모델 학습",
          "학습 데이터셋 준비 및 전처리 기술 습득, 모델 학습과 평가 방법 습득",
        ],
        [
          "딥러닝 모델을 사용하여 실제 문제를 해결하는 프로젝트 수행",
          "이미지 분류, 자연어 처리, 음성 인식 등 다양한 응용 분야 탐구",
        ],
      ],
    },
    learningObjectives: [
      "딥러닝 이론을 이해하고, 신경망 모델을 설계하고 훈련시킨다.",
      "이미지 분류, 자연어 처리 등 다양한 응용 분야에서 딥러닝 모델을 활용하는 능력을 향상시킨다.",
    ],
  },
  reinforcement: {
    korName: "강화학습",
    engName: "Reinforcement Learning",
    bannerContent:
      "지능형 시스템을 위한 강화학습 기술, 스마트한 의사결정 알고리즘 개발",
    img: reinforcementLearning,
    eduInfo: {
      singleText: ["로봇 전공 대학생, 인공지능 전공 대학생", "AI 교육"],
      texts: [
        "강화학습 기술을 이해하고 다양한 응용 분야에서 적용할 수 있는 능력을 갖출 수 있다.",
        "실전 프로젝트를 통해 실무 경험을 쌓고 인공지능 분야에서의 경쟁력을 향상시킬 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "강화학습 기초 이해, 강화학습의 개념과 원리 학습",
          "신마르코프 결정 과정 (MDP) 이해, Python을 활용한 강화학습 라이브러리 (예: OpenAI Gym) 사용법 학습",
        ],
        [
          "다양한 강화학습 알고리즘 (예: Q-learning, DDPG, A3C)의 이해와 비교 분석, 강화학습 모델의 구조와 학습 과정 학습",
          "강화학습 모델을 설계하고 구현하는 방법 학습, 모델 학습을 위한 환경 설정과 하이퍼파라미터 튜닝 학습",
        ],
        [
          "실제 강화학습 문제를 해결하는 프로젝트 수행, 게임 플레이, 로봇 제어, 자율 주행 등 다양한 응용 분야 탐구",
          "강화학습 기술을 활용한 다양한 응용 분야 탐구, 인공지능 분야에서의 경력 및 연구 기회 모색",
        ],
      ],
    },
    learningObjectives: [
      "강화학습의 기본 개념을 이해하고, 강화학습 알고리즘을 구현하여 에이전트를 훈련시킨다.",
      "로봇 제어, 게임 플레이, 자율 주행 차량 제어 등 다양한 영역에서 강화학습을 적용하는 능력을 향상시킨다.",
    ],
  },
  printer: {
    korName: "3D 프린터",
    engName: "3D Printer",
    bannerContent: "혁신적인 제작 기술, 3D 프린팅의 모든 것",
    img: printer,
    eduInfo: {
      singleText: ["제조·디자인 관련 기업, 대학생", "장비 교육"],
      texts: [
        "3D 프린팅 기술을 활용하여 다양한 제품을 제작하고 디자인 할 수 있는 능력을 갖출 수 있다.",
        "3D 프린팅 장비의 운용과 유지보수에 대한 실무 능력을 키울 수 있으며, 제조 및 디자인 분야에서의 경쟁력을 향상 시킬 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "3D 프린팅 기초 이해, 3D 프린팅의 작동 원리와 역사 학습",
          "다양한 3D 프린팅 기술 및 장비의 종류 이해, Creality Print 소프트웨어 사용",
          "3D 모델링 소프트웨어 (예: Tinkercad, Fusion 360) 사용법 학습",
        ],
        [
          "3D 프린팅을 위한 3D 모델 제작 및 수정 방법 학습",
          "다양한 소재 및 디자인 요소 적용, 다양한 3D 프린터 장비의 운용 방법 습득",
          "프린터 청소, 유지보수 및 문제 해결 기술 학습",
        ],
        [
          "개인 또는 팀 프로젝트를 통해 3D 프린팅을 활용한 실전 제품 제작",
          "제조 및 디자인 능력 향상, 기대 효과 및 응용 분야 탐구",
          "3D 프린팅 기술을 활용한 다양한 응용 분야 탐구, 제조, 디자인 및 교육 분야에서의 경력 및 연구 기회 모색",
        ],
      ],
    },
    learningObjectives: [
      "3D 프린터의 작동 원리를 이해하고, 3D 모델링 소프트웨어를 사용하여 모델을 디자인 한다.",
      "3D 프린터를 사용하여 실제 객체를 제작하고, 제품 디자인 및 제조 능력을 향상시킨다.",
    ],
  },
  plc: {
    korName: "PLC",
    engName: "Programmable Logic Controller",
    bannerContent:
      "산업 자동화의 핵심, 프로그래머블 로직 컨트롤러(PLC) 마스터하기",
    img: plc,
    eduInfo: {
      singleText: ["자동화 관련 기업, 자동화 전공 대학생", "장비 교육"],
      texts: [
        "PLC 기술을 이해하여 제어 시스템을 설계하고 프로그래밍할 수 있는 능력을 갖출 수 있다.",
        "실제 산업 현장에서의 경험을 쌓고 자동화 및 제어 분야에서의 경쟁력을 향상시킬 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "PLC의 개념, 역사, 및 주요 역할 이해, 다양한 PLC 제조사 및 모델의 비교 분석",
          "전기 회로와 전기 구성 요소의 기초 이해, 전기 신호 처리 및 전기 제어 시스템 개념 습득",
        ],
        [
          "PLC 프로그래밍 언어 (예: ladder logic) 이해와 활용",
          "PLC 소프트웨어 사용법 학습, PLC 제어 시스템 설계 및 구현",
          "실습 프로젝트를 통한 PLC 프로그래밍 경험",
        ],
        [
          "실제 산업 현장에서의 PLC 제어 시스템 설계 및 프로그래밍 프로젝트 수행",
          "PLC 기술을 활용한 다양한 응용 분야 탐구",
          "자동화 및 제어 분야에서의 경력 및 실무 능력 향상",
        ],
      ],
    },
    learningObjectives: [
      "PLC(Programmable Logic Controller) 시스템을 이해하고, 제어 및 자동화 시스템을 구현한다.",
      "PLC 프로그래밍 및 시스템 설계를 통해 제어 공학 지식을 향상시킨다.",
    ],
  },
  kicad: {
    korName: "KiCad",
    engName: "KiCad",
    bannerContent:
      "전자 회로 설계의 기초부터 고급 기술까지, KiCad로 시작하는 PCB 디자인",
    img: kicad,
    eduInfo: {
      singleText: [
        "전자공학 학생, 전자 회로 설계 및 PCB 디자인 지식을 가진 전공자",
        "장비 교육",
      ],
      texts: [
        "전자 회로 설계 및 PCB 디자인을 위해 KiCad 소프트웨어를 활용하는 능력을 갖출 수 있다.",
        "실제 PCB 디자인 프로젝트를 수행하여 실무 경험을 쌓을 수 있으며, 전자공학 및 PCB 디자인 분야에서의 경잭력을 향상시킬 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "전자 회로의 기본 개념 및 구성 요소 이해, 회로 설계와 디자인 원리 학습",
          "KiCad 소프트웨어 소개와 설치 방법 학습",
          "인터페이스 및 도구 이해",
        ],
        [
          "KiCad를 사용하여 전자 회로를 설계하는 방법 학습",
          "PCB 레이아웃 디자인, PCB 레이아웃 디자인 원칙 및 기술 습득",
        ],
        [
          "현실적인 PCB 디자인 프로젝트 수행",
          "실제 제품에 적용 가능한 PCB 디자인 경험",
        ],
      ],
    },
    learningObjectives: [
      "KiCad를 사용하여 PCB(Printed Circuit Board) 디자인을 학습하고, 전자 회로 설계 능력을 향상시킨다.",
      "실제 PCB를 제작하고 회로를 구성하는 능력을 개발한다.",
    ],
  },
  embedded: {
    korName: "임베디드 시스템",
    engName: "Embedded System",
    bannerContent:
      "임베디드 시스템의 세계, 마이크로컨트롤러부터 복잡한 시스템까지",
    img: embedded,
    eduInfo: {
      singleText: [
        "전자공학, 컴퓨터 공학, 소프트웨어 공학 학생 및 전문가",
        "OS 교육",
      ],
      texts: [
        "임베디드 시스템 설계 및 프로그래밍 능력을 갖출 수 있으며, 실전 프로젝트를 통해 실무 경험을 쌓을 수 있다.",
        "임베디드 시스템 분야에서의 전문성을 향상시켜 다양한 응용 분야에서 활용할 수 있는 능력을 키우게 된다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "임베디드 시스템 기본 개념 이해, 마이크로컨트롤러 (Microcontroller) 아키텍처 이해",
          "임베디드 시스템의 정의 및 역할 이해",
          "주요 마이크로컨트롤러 아키텍처 및 특징 학습",
        ],
        [
          "임베디드 시스템 프로그래밍",
          "라즈베리파이를 대상으로 프로그래밍 실습",
          "실제 임베디드 시스템에서의 코드 개발(센서 및 액추에이터 제어 방법 학습)",
        ],
        [
          "자신의 아이디어를 바탕으로 프로토타입 개발",
          "임베디드 시스템 기술을 활용한 다양한 응용 분야 탐구",
        ],
      ],
    },
    learningObjectives: [
      "임베디드 시스템 개발을 위한 하드웨어와 소프트웨어를 이해하고, 마이크로컨트롤러를 프로그래밍한다.",
      "실제 임베디드 시스템 프로젝트를 수행하여 시스템 설계 및 프로그래밍 능력을 향상시킨다.",
    ],
  },
  ros2: {
    korName: "ROS2",
    engName: "Robot Operating System2",
    bannerContent: "차세대 로봇 개발을 위한 ROS2, 로봇 운영 시스템의 모든 것",
    img: ros2,
    eduInfo: {
      singleText: ["로봇 관련기업, 로봇을 전공하는 대학생", "OS 교육"],
      texts: [
        "로봇 소프트웨어 개발 능력을 향상시킨다.",
        "로봇 공학 및 자동화 분야에서의 전문성을 키울 수 있으며, 실전 프로젝트를 통해 실무 경험을 쌓을 기회를 얻는다.",
        "ROS2를 활용한 다양한 응용 분야에서의 활동과 연구 기회를 확대할 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "ROS2의 기본 개념 및 아키텍처 이해",
          "ROS2 패키지 및 노드 개념 학습, ROS2 설치 및 환경 설정",
          "ROS2 환경 구성 및 필수 도구 설치, ROS2 워크스페이스 설정",
        ],
        [
          "ROS2 기본 명령어 및 도구를 사용한 패키지 생성 및 실행",
          "토픽 및 서비스 통신 개념 학습",
          "ROS2를 활용한 로봇 소프트웨어 개발 방법 학습",
        ],
        [
          "ROS2를 활용한 실제 로봇 제어 프로젝트 수행",
          "자율 주행, 로봇 팔 제어, 센서 인터페이스 등 다양한 응용 분야 탐구",
        ],
      ],
    },
    learningObjectives: [
      "ROS2(Robot Operating System 2)를 사용하여 로봇 소프트웨어 개발 및 제어를 학습한다.",
      "로봇 제어 및 로봇 소프트웨어 개발 능력을 향상시키며, 로봇 공학에 대한 이해를 높인다.",
    ],
  },
  manipulator: {
    korName: "매니퓰레이터",
    engName: "Manipulator",
    bannerContent: "6축 매니퓰레이터, 정밀하고 다양한 작업을 수행하는 로봇 팔",
    img: manipulator,
    eduInfo: {
      singleText: [
        "로봇 관련기업, 로봇을 전공하는 대학생, 자동화 전공 대학생",
        "방문 교육",
      ],
      texts: [
        "매니퓰레이터 로봇을 조작하고 프로그래밍하는 능력을 향상시킬 수 있으며, 자동화 및 제조 분야에서의 전문성을 키울 수 있다.",
        "실전 프로젝트를 통해 실무 경험을 쌓고, 다양한 응용 분야에서의 활동과 연구 기회를 확대할 수 있다.",
      ],
    },
    curriculum: {
      texts: [
        [
          "로봇 매니퓰레이터의 기본 개념 및 원리 이해",
          "다양한 매니퓰레이터 형태 및 종류 학습",
          "로봇 제어 및 프로그래밍 환경 구성",
        ],
        [
          "매니퓰레이터 제어 및 프로그래밍",
          "로봇 매니퓰레이터의 시뮬레이션 환경을 통한 테스트 및 디버깅",
          "실제 환경에서의 매니퓰레이터 동작 테스트",
        ],
        [
          "로봇 매니퓰레이터를 활용한 실제 작업 프로젝트 수행",
          "자동화 및 제조 분야에서의 응용 프로젝트 경험",
        ],
      ],
    },
    learningObjectives: [
      "6축 매니퓰레이터를 제어하고 프로그래밍하는 방법을 학습한다.",
      "로봇 팔 제어 및 로봇 아머처 프로젝트를 통해 로봇 공학 능력을 향상시킨다.",
    ],
    kitPicture: [manipulatorKitImg1, manipulatorKitImg2],
  },
};
