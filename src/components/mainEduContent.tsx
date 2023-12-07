import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components"

import robot from "../images/icon_robot.png";
import software from "../images/icon_ros2.png";
import printer from "../images/icon_embedded.png";
import ai from "../images/icon_ai.png";

import rightarrow from "../images/rightarrow.png";


const MainContainer = styled.div`
    width: 65.555rem;
    display: flex;
    flex-direction: column;
    /* title */
    p:nth-child(1){
        width: 25.556rem;
        height: 3.222rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 2.667rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.21;
        letter-spacing: normal;
        text-align: left;
        color: var(--rodu-black);
        margin-top: 11.222rem;
    }
    /* description under title */
    p:nth-child(3){
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
        margin-top: 0.944rem;
        color: var(--rodu-grey);
    }
`

const Box = styled.div`
    display: flex;
    gap: 1.111rem;
`
const Line = styled.div`
    width: 22.667rem;
    height: 0.194rem;
    flex-grow: 0;
    background-color: var(--rodu-deep);
`
// 콘텐츠 박스
const Container = styled.button`
    width: 15.556rem;
    height: 23.5rem;
    border-radius: 10px;
    margin-top: 2.944rem;
    border: 2px solid var(--rodu-super-light-grey);
    background-color: var(--rodu-super-light-grey);
    text-align: center;
    justify-content: center;
    position: relative;
    transition: all 0.5s;
    &:hover{
        background-color: var(--rodu-super-light-grey);
        box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.15);
        border: 2px solid transparent;
        background-image: linear-gradient(var(--rodu-super-light-grey), var(--rodu-super-light-grey)), 
        linear-gradient(to bottom right,#ffd857, #f9911e);
        background-clip: content-box, border-box;
    }
    /* 박스 내부 타이틀 */
    p:nth-child(2){
        font-family: Pretendard;
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
        line-height: 1.61;
        color: #000;
        margin-top: 0.768rem;
    }
    /* 설명 */
    p:nth-child(3){
        width: 12.911rem;
        height: 5.111rem;
        font-family: Pretendard;
        font-size: 0.833rem;
        font-weight: 400;
        line-height: 1.53;
        top: 13rem;
        margin-left: auto;
        margin-right: auto;
        color: var(--rodu-grey);
    }
    /* 교육커리큘럼보기 */
    span{
        margin-bottom: 1.111rem;
        position: absolute;
        left:20px;
        bottom: 0;
        width: 6.778rem;
        height: 1.278rem;
        flex-grow: 0;
        font-family: Pretendard;
        font-size: 0.889rem;
        font-weight: 600;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.44;
        letter-spacing: 0.32px;
        text-align: left;
        color: var(--rodu-black);
        }

`

const Image = styled.img`
    width: 5.994rem;
    height: 6.51rem;
    // margin-top: 1.889rem;
    margin-top: -2.93rem;
    margin-left: auto;
    margin-right: auto;
`

const Rightarrow = styled.img`
    width: 0.389rem;
    height: 0.778rem;
    flex-grow: 0;
    position: absolute;
    bottom: 1.361rem;
    right: 1.111rem;
`


const MainEduContent = () => {

    const navigate = useNavigate();
    const DetailContentsRoutes = (index : number) => {
        navigate('/showDetailContent', {state : index+11});
      }

    const dummyData = [
        {
            imgURL: robot,
            title: "ROBOT",
            textNormalFirst: "로봇의 기본 원리부터 설계 및 제작에 대해 학습하고 ",
            textBold: "로봇의 기계적 구조, 제어로직을 사용해 실제 로봇을 구축",
            textNormalLast: "하는 프로젝트를 수행합니다.",
            link: " "
        },
        {
            imgURL: software,
            title: "ROS2",
            textNormalFirst: "로봇 소프트웨어 개발을 위해 ",
            textBold: "ROS2의 핵심 개념, 효율적인 프로그래밍을 배우고 이를 통해 로봇 애플리케이션을 개발하는 경험",
            textNormalLast: "을 쌓습니다.",
            link: " "
        },
        {
            imgURL: printer,
            title: "Embedded",
            textNormalFirst: "효율적인 로봇 설계 및 구현을 위해 ",
            textBold: "마이크로 컨트롤러 프로그래밍, 센서 통합, 실시간 운영 시스템",
            textNormalLast: "에 대해 학습합니다.",
            link: " "
        },
        {
            imgURL: ai,
            title: "AI",
            textNormalFirst: "로봇 시스템에서 ",
            textBold: "AI를 적용하는 방법에 초점을 맞추며 AI 모델을 개발하고 로봇에 통합하여 지능적인 기능을 구현",
            textNormalLast: "하는 것에 대해 학습합니다.",
            link: " "
        }
    ]
    return (
        <MainContainer>
            <p>
                RODU의 대표 콘텐츠
            </p>
            <Line></Line>
            <p>
                고객들에게 최적의 교육과정을 제공합니다.
            </p>
            <Box>

                {dummyData.map((data, idx) =>
                    <Container key={idx} onClick={()=>{DetailContentsRoutes(idx)}}>
                        <Image src={data.imgURL} alt="icon" />
                        <p>
                            {data.title}
                        </p>

                        <p>
                            {data.textNormalFirst}
                            <strong>{data.textBold}</strong>
                            {data.textNormalLast}
                        </p>
                        <span>교육 커리큘럼 보기</span>
                        <Link to={data.link}></Link>
                        <Rightarrow src={rightarrow} />
                    </Container>
                )}
            </Box>
        </MainContainer>
    )
}

export default MainEduContent;