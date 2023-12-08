import { Link } from "react-router-dom";
import "../styles/applyEdu.css";

import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/banner";
import createEduRoute from "../images/bannerCategory/createEdu.png";
import infoConfirm from "../images/Frame68.svg";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { CreateEdu, CreateEduVariables } from "../__generated__/CreateEdu";

import { ReactComponent as Delete } from "../images/delete.svg";

export const MakeNewApplication = () => {
  return (
    <>
      <Banner
        routeDot1="•"
        routeName1="커뮤니티"
        route1=""
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="교육 신청"
        route2="/applyEdu"
        route2Opacity={1}
        title="교육 신청"
        subtitle="Education Application"
        content="희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
        contentClass="Subtitle-smallFont"
        rightImg="none"
      />
    </>
  );
};
