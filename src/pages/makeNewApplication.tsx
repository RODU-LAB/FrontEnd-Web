import { Link } from "react-router-dom";
import "../styles/applyEdu.css";


import React, { useEffect, useState, useRef } from "react";

import {
  appendErrors,
  Control,
  Controller,
  useFieldArray,
  useForm,
  useWatch,
} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Banner } from "../components/banner";
import createEduRoute from "../images/bannerCategory/createEdu.png";
import { Helmet } from "react-helmet-async";
import infoConfirm from "../images/Frame68.svg";
import {
  SendAuthNum,
  SendAuthNumVariables,
} from "../__generated__/SendAuthNum";
import { sendOption } from "../__generated__/globalTypes";
import {
  checkAuthNumQuery,
  checkAuthNumQueryVariables,
} from "../__generated__/checkAuthNumQuery";
import DatePicker, { DateObject } from "react-multi-date-picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import type { Value } from "react-multi-date-picker";
import { setAppElement } from "react-modal";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { CreateEdu, CreateEduVariables } from "../__generated__/CreateEdu";
import { displayPartsToString } from "typescript";

import { ReactComponent as Delete } from "../images/delete.svg";

const weekDays = ["일", "월", "화", "수", "목", "금", "토"];
const months = [
  "1월",
  "2월",
  "3월",
  "4월",
  "5월",
  "6월",
  "7월",
  "8월",
  "9월",
  "10월",
  "11월",
  "12월",
];


export const MakeNewApplication = () => {
 

  return (
    <>
         </>
  );
};
