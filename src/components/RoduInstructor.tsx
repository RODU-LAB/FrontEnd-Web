// import { useEffect, useRef, useState, useCallback} from "react";
import styled from "styled-components";

import instructor1 from "../images/instructor1.png";
import instructor2 from "../images/instructor2.png";
import instructor3 from "../images/instructor3.png";
import instructor4 from "../images/instructor4.png";

import instructor1_box from "../images/instructor1_box.png";
import instructor2_box from "../images/instructor2_box.png";
import instructor3_box from "../images/instructor3_box.png";
import instructor4_box from "../images/instructor4_box.png";

const MainContainer = styled.div`
  width: 65.555rem;
  display: flex;
  flex-direction: column;
  /* title */
  p:nth-child(1) {
    width: 30.167rem;
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
    margin-top: 11.222rem;
  }
  /* grey description */
  p:nth-child(3) {
    width: 28.989rem;
    height: 2.556rem;
    flex-grow: 0;
    font-family: Pretendard;
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.28;
    letter-spacing: 0.9px;
    text-align: left;
    margin-top: 1.125rem;
    color: var(--rodu-grey);
  }
`;

const Box = styled.div`
  display: flex;
  gap: 1.111rem;
`;
/* line between title & description */
const Line = styled.div`
  width: 30.222rem;
  height: 0.194rem;
  flex-grow: 0;
  background-color: var(--rodu-deep);
`;

const Image = styled.img`
  width: 15.557rem;
  height: 23.333rem;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
`;
const InstructorBox = styled.img`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.45);
  border-radius: 10px;
`;

const Container = styled.div`
    width: 16.556rem;
    height: 23.333rem;
    flex-grow: 0;
    border-radius: 10px;
    margin-top: 2.944rem;
    background-color: var(--rodu-super-light-grey);
    text-align: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
        &:hover ${InstructorBox}{
            -webkit-transform:  translateY(-171.141px);
            -webkit-transition-duration: 0.8s;
        }
    }
`;

const RoduInstructor = () => {
  const dummyData = [
    { imgURL: instructor1, boxURL: instructor1_box },
    { imgURL: instructor2, boxURL: instructor2_box },
    { imgURL: instructor3, boxURL: instructor3_box },
    { imgURL: instructor4, boxURL: instructor4_box },
  ];
  return (
    <MainContainer>
      <p>전문 장비를 갖춘 다양한 시설</p>
      <Line></Line>
      <p>
        RODU는 고객들에게 높은 수준의 교육을 제공하기 위해 자동화,<br></br>
        기계가공, 산업용 로봇과 같은 다양한 장비와 공간을 갖추고 있습니다.
      </p>
      <Box>
        {dummyData.map((data, idx) => (
          <Container key={idx}>
            <Image src={data.imgURL} alt="icon" />
            <InstructorBox src={data.boxURL} />
          </Container>
        ))}
      </Box>
    </MainContainer>
  );
};

export default RoduInstructor;
