// import React, { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

import type1 from "../images/icon_people1.png";
import type2 from "../images/icon_people2.png";
import type3 from "../images/icon_people3.png";
import type4 from "../images/icon_people4.png";

// const FadeOut = keyframes`
//     0% {
//         opacity: 1;
//     }
//     100% {
//         opacity: 0;
//     }
// `;

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const MainContainer = styled.div`
  width: 65.555rem;
  height: 59.056rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  // RODU 교육 수행 유형 글자
  p:nth-child(1) {
    width: 23.278rem;
    height: 3.222rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 2.667rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.21;
    letter-spacing: normal;
    text-align: center;
    color: var(--rodu-black);
    margin-top: 15.778rem;
  }

  // 콘텐츠 별 메인 글자
  p:nth-child(3) {
    width: 25.111rem;
    height: 1.444rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.44;
    letter-spacing: 0.9px;
    text-align: left;
    color: var(--rodu-grey);
  }
`;

const Box = styled.div`
  display: grid;
  gap: 1.111rem 1.111rem;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
`;
const Line = styled.div`
  width: 23.853rem;
  height: 0.194rem;
  flex-grow: 0;
  margin-bottom: 2.944rem;
  background-color: var(--rodu-deep);
`;
const Container = styled.button`
  width: 26.667rem;
  height: 17.556rem;
  border-radius: 9.9px;
  background-color: var(--super-light-grey);
  text-align: left;
  position: relative;
  // visibility: visible;
  &:hover {
    background-color: var(--super-light-grey);
    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
    border: 2px solid transparent;
    background-image: linear-gradient(
        var(--super-light-grey),
        var(--super-light-grey)
      ),
      linear-gradient(to bottom right, #ffd857, #f9911e);
    background-clip: content-box, border-box;
  }
  img {
    width: 3.737rem;
    height: 3.667rem;
    position: absolute;
    left: 2.222rem;
    top: 2.167rem;
  }
  p:nth-child(2) {
    position: absolute;
    left: 2.389rem;
    top: 7.778rem;
    font-family: Pretendard;
    font-size: 0.889rem;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: var(--rodu-deep);
  }

  p:nth-child(3) {
    position: absolute;
    left: 2.222rem;
    top: 8.667rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 2rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.61;
    letter-spacing: normal;
    text-align: left;
    color: #000;
  }

  p:nth-child(4) {
    position: absolute;
    left: 2.222rem;
    top: 12.111rem;
    width: 23.111rem;
    height: 2.778rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 0.889rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: var(--rodu-grey);
  }

  span {
    position: absolute;
    left: 2.222rem;
    top: 12.111rem;
    width: 23.111rem;
    height: 2.778rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 0.889rem;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.56;
    letter-spacing: normal;
    text-align: left;
    color: var(--rodu-black);
  }
  // 오른쪽 밑 글자?
  p:nth-child(5) {
    display: none;
    position: absolute;
    right: 1.389rem;
    bottom: 0.82rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 1.111rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.45;
    letter-spacing: normal;
    text-align: left;
    color: var(--super-light-grey);
    animation: ${FadeIn} 1s ease;
  }
`;

const MainEduContent = () => {
  const navigate = useNavigate();
  const DetailContentsRoutes = (index: number) => {
    navigate("/showDetailContent", { state: index });
  };

  //   function preloading(imageArray: any) {
  //     let n = imageArray.length;
  //     for (let i = 0; i < n; i++) {
  //       let img = new Image();
  //       img.src = imageArray[i];
  //     }
  //   }

  const dummyData = [
    {
      iconURL: type1,
      textblue: "양질의 교육 공간에서 진행하는",
      title: "집합 교육",
      textNormalFirst: "대면 형식으로 진행하며, ",
      textBold:
        "RODU가 보유한 교육 공간과 장비를 통한 실습 중심의 학습과 직접적인 강사와의 상호작용",
      textNormalLast: "으로 실시간 피드백과 질의응답을 가능하게 합니다.",
      // hoverimg: type1_photo,
      // hovertext: "현장교육"
    },
    {
      iconURL: type2,
      textblue: "찾아가는 맞춤형 교육 서비스",
      title: "방문 교육",
      textNormalFirst:
        "RODU의 전문 강사가 직접 고객이나 기관의 위치로 방문하여 교육을 진행합니다. ",
      textBold: "기관이나 기업의 실제 환경에서 직접 로봇 기술을 적용하는 기회",
      textNormalLast: "를 제공합니다.",
      // hoverimg: type2_photo,
      // hovertext: "교육부스"
    },
    {
      iconURL: type3,
      textblue: "창의성과 기술적 능력 향상",
      title: "RODU 챌린지",
      textNormalFirst:
        "특정 주제나 프로젝트에 대한 대회를 통해 참가자들이 경쟁하고 기술을 익힙니다. ",
      textBold:
        "창의적인 문제 해결, 팀워크를 기를 수 있으며 실무적인 경험과 경쟁을 통한 성장",
      textNormalLast: "을 이루어냅니다.",
      // hoverimg: type3_photo,
      // hovertext: "RODU 챌린지"
    },
    {
      iconURL: type4,
      textblue: "언제 어디서나 함께하는",
      title: "온라인 교육",
      textNormalFirst: "웹 기반 플랫폼을 통해 로봇 교육 코스를 제공합니다. ",
      textBold:
        "동영상 강의, 언터랙티브 콘텐츠, 온라인 퀴즈를 통해 자기주도적 학습",
      textNormalLast: "이 가능합니다.",
      // hoverimg: type4_photo,
      // hovertext: "온라인 교육"
    },
  ];
  return (
    <MainContainer>
      <p>RODU 교육 수행 유형</p>
      <Line></Line>
      <Box>
        {dummyData.map((data, idx) => (
          <Container
            key={idx}
            onClick={() => {
              DetailContentsRoutes(idx + 1);
            }}
          >
            <img src={data.iconURL} alt="icon" />
            <p>{data.textblue}</p>
            <p>{data.title}</p>

            <p>
              {data.textNormalFirst}
              <strong>{data.textBold}</strong>
              {data.textNormalLast}
            </p>
            <p>{/* {data.hovertext} */}</p>
          </Container>
        ))}
      </Box>
    </MainContainer>
  );
};

export default MainEduContent;
