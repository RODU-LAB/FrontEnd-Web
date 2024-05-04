import { useEffect, useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSetRecoilState, useResetRecoilState, useRecoilState } from "recoil";
import { sessionIdAtom } from "../../recoil/atoms/sessionIdAtom";
import { applyFormAtom } from "../../recoil/atoms/applyFormAtom";
import emailjs from "emailjs-com";
// import { Helmet } from "react-helmet-async";

import {
  sendAuthCodeAPI,
  verifyAuthCodeAPI,
  applyAPI,
  addClassesDataAPI,
  deleteApplicationAPI,
} from "../../services/educationAPI";

import { ClassGroupTypes, ApplyFormType } from "../../types/applyFormTypes";

import { Banner } from "../../components/BackgroundBanner";
import { Calendar } from "../../components/Calendar";
import { YesNoModal } from "../../components/modal/YesNoModal";

import "../../styles/boxShaking.css";
import "../../styles/makeNewApplication.css";

import { ReactComponent as Delete } from "../../../public/images/delete.svg";
import { ReactComponent as Loading } from "../../../public/images/loading.svg";
import backgroundImg from "../../../public/images/instructor2.jpg";

interface ReduceAccumulator {
  classGroups: ClassGroupTypes[];
  educationDates: string[][];
}

export const EduUpdateApplication = () => {
  const windowHeight = window.innerHeight;
  const basePosition = windowHeight + 250;

  const navigate = useNavigate();
  const location = useLocation();
  const locationData = location.state;
  const updateStatus = locationData ? "update" : "create";

  const setSessionId = useSetRecoilState(sessionIdAtom);
  const resetSessionId = useResetRecoilState(sessionIdAtom);
  const [reloadForm, setReloadForm] = useRecoilState(applyFormAtom);

  // 렌더링 이후인지 확인
  // const [isAfterRender, setIsAfterRender] = useState(true);

  const [barPosition, setBarPosition] = useState(basePosition);
  const [isLoading, setIsLoading] = useState(false);

  const [sendAuthCodeModal, setSendAuthCodeModal] = useState(false);
  const [finishAuthModal, setFinishAuthModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  // 학급 정보 폼의 인덱스가 입력되면 modal이 띄워짐
  const [calendarModal, setCalendarModal] = useState(-1);
  const [reloadFormModal, setReloadFormModal] = useState(false);

  const [formNum, setFormNum] = useState(0);
  const [inputCheck, setInputCheck] = useState("");
  const [isAuth, setIsAuth] = useState(updateStatus === "update");
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  // 인증번호 남은 시간
  const [timeLeft, setTimeLeft] = useState(300);
  const [isClickBeforeSendAuthCode, setIsClickBeforeSendAuthCode] =
    useState(false);
  // eslint-disable-next-line
  const [authSessionId, setAuthSessionId] = useState("");
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  // Form 0
  const [name, setName] = useState<string>(
    updateStatus === "update" ? locationData.name : ""
  );
  const [institutionName, setInstitutionName] = useState<string>(
    updateStatus === "update" ? locationData.institutionName : ""
  );
  const [position, setPosition] = useState<string>(
    updateStatus === "update" ? locationData.position : ""
  );
  const [phoneNumber, setPhoneNumber] = useState<string>(
    updateStatus === "update" ? locationData.phoneNumber : ""
  );
  const [authNum, setAuthNum] = useState(
    updateStatus === "update" ? locationData.authNum : ""
  ); // 인증번호
  const [email, setEmail] = useState<string>(
    updateStatus === "update" ? locationData.email : ""
  );

  // Form 1 - 교육생 정보
  const [numberOfStudents, setNumberOfStudents] = useState<string>(
    updateStatus === "update" ? locationData.numberOfStudents : ""
  );
  const [studentRank, setStudentRank] = useState<string>(
    updateStatus === "update" ? locationData.studentRank : ""
  );
  const [budget, setBudget] = useState<string>(
    updateStatus === "update" ? locationData.budget : ""
  );

  // Form 2 - 학급별 교육 일정
  const [classGroups, setClassGroups] = useState<ClassGroupTypes[]>(
    updateStatus === "update"
      ? locationData.classGroups
      : [
          {
            className: "",
            educationConcept: "",
            numberOfStudents: "",
            remark: "",
            unfixed: false,
          },
        ]
  );
  const [educationDates, setEducationDates] = useState<string[][]>(
    updateStatus === "update"
      ? locationData.classGroups.map(
          (item: ClassGroupTypes) => item.educationDates
        )
      : []
  );

  // Form 3 - 교육 특이사항
  const [overallRemark, setOverallRemark] = useState("");

  const leftBarRef = useRef<HTMLDivElement>(null);
  const mainFormRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    const scroll = Math.max(window.scrollY + 220 - windowHeight, 0);
    const adjustedPosition = basePosition + scroll;
    let newPosition = adjustedPosition;

    newPosition = Math.min(newPosition, windowHeight * 2 - 50);
    setBarPosition(newPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // 컴포넌트가 언마운트되거나 다시 렌더링되기 전에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      handleScroll();
      setBrowserWidth(window.innerWidth);
    });

    // 컴포넌트가 언마운트되거나 다시 렌더링되기 전에 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    if (isActiveTimer && timeLeft > 0) {
      // 1초마다 timeLeft를 감소시킴
      timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActiveTimer(false); // 타이머 종료
    }

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      clearTimeout(timerId);
    };
  }, [isActiveTimer, timeLeft]);

  /** 카카오톡 인증 (인증번호 발송) 버튼 클릭 시 */
  const handleSendAuthCode = async () => {
    setInputCheck("");
    // 숫자만 포함, 11자리 이상
    const condition = /^\d{11}$/;
    const checkResult = condition.test(phoneNumber);
    if (checkResult) {
      const result = await sendAuthCodeAPI(phoneNumber);
      if (result === 200) {
        // 타이머 작동
        setSendAuthCodeModal(true);
        setIsActiveTimer(true);
        setTimeLeft(300);
      }
    } else {
      alert("휴대폰 번호를 다시 확인 해주세요.");
      setInputCheck("phoneNumber");
    }
    setIsClickBeforeSendAuthCode(false);
  };

  /** 인증하기 버튼 클릭 시 */
  const handleVerifyAuthCode = async () => {
    const onlyNumbers = /^\d+$/;

    if (!!!timeLeft) {
      alert("인증 번호가 만료되었습니다.");
    } else if (!!!authNum || !onlyNumbers.test(authNum)) {
      setInputCheck("authCode");
    } else if (isActiveTimer && timeLeft > 0) {
      const newSessionId = await verifyAuthCodeAPI(authNum, phoneNumber);

      // 인증 성공
      if (newSessionId) {
        setFinishAuthModal(true);
        setIsAuth(true);
        setIsActiveTimer(false);
        setAuthSessionId(newSessionId);
        setSessionId({
          id: newSessionId,
          time: new Date(),
          phoneNumber: phoneNumber,
        });
      }
    } else if (!isActiveTimer) {
      setIsClickBeforeSendAuthCode(true);
    }
  };

  /** input 값 핸들링 (Form 2 - 학급별 교육 일정) */
  const handleClassGroupInput = (
    idx: number,
    key: keyof ClassGroupTypes,
    value: ClassGroupTypes[keyof ClassGroupTypes]
  ) => {
    const handleState = (prev: ClassGroupTypes[]) => {
      const updatedData: any = [...prev];

      // 특정 인덱스의 객체에 접근하여 값을 업데이트
      const updatedItem = { ...updatedData[idx] };
      updatedItem[key] = value;
      updatedData[idx] = updatedItem;
      return updatedData;
    };

    setClassGroups((prev) => handleState(prev));

    if (isAuth) {
      setReloadForm((prev) => {
        console.log(prev);
        const prevClassGroups = [...prev.classGroups];
        const prevData = { ...prev, classGroups: handleState(prevClassGroups) };
        return prevData;
      });
    }
  };

  /** 학급 추가 버튼 클릭 시 (Form 2 - 학급별 교육 일정) */
  const handleAddClass = () => {
    setClassGroups((prev) => [
      ...prev,
      {
        className: "",
        educationConcept: "",
        educationDates: [],
        numberOfStudents: "",
        remark: "",
        unfixed: false,
      },
    ]);
    setEducationDates((prev) => {
      const prevData = [...prev];
      prevData.push([]);
      return prevData;
    });
    if (isAuth) {
      setReloadForm((prev) => {
        const newClassGroups = [
          ...prev.classGroups,
          {
            className: "",
            educationConcept: "",
            numberOfStudents: "",
            remark: "",
            unfixed: false,
            educationDates: [],
          },
        ];

        const prevData = { ...prev, classGroups: newClassGroups };
        return prevData;
      });
    }
  };

  /** 학급 삭제 (Form 2 - 학급별 교육 일정) */
  const handleRemoveClass = (idx: number) => {
    const handleRemove = (prev: ClassGroupTypes[]) => {
      const prevDate = [...prev];
      prevDate.splice(idx, 1);
      return prevDate;
    };

    if (classGroups.length > 1) {
      setClassGroups((prev) => {
        return handleRemove(prev);
      });
      if (isAuth) {
        setReloadForm((prev) => {
          let prevClassGroups = [...prev.classGroups];
          prevClassGroups = handleRemove(prevClassGroups);
          const result = { ...prev, prevClassGroups };
          return result;
        });
      }
    } else {
      alert("최소 한 개의 학급이 필요합니다.");
    }
  };

  /** 첫 번째 다음 버튼 클릭 시 */
  const handleFirstNextBtn = () => {
    // 이메일 형식 확인
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    const validations = [
      { check: !!!name, item: "name" },
      {
        check: !!!institutionName,
        item: "institutionName",
      },
      {
        check: !!!position,
        item: "position",
      },
      {
        check: !!!email,
        item: "email",
      },
      {
        // 이메일이 공백이 아니라면 이메일 유효성 검사 실행
        check: !!email && !emailRegex.test(email),
        item: "emailRegex",
      },
      {
        check: !isAuth && !isActiveTimer,
        item: "sendCode",
      },
      {
        check: !isAuth,
        item: "authButton",
      },
      {
        check: !!!phoneNumber,
        item: "phoneNumber",
      },
    ];

    // 각 조건 검증
    for (let i = 0; i < validations.length; i++) {
      const { check, item } = validations[i];
      if (check) {
        setInputCheck(item);
        if (item === "emailRegex") {
          alert("이메일 형식을 다시 확인해주세요.");
        }
        return false;
      }
    }

    return true;
  };

  /** Form 1 - 교육생 정보 에서 다음 버튼 클릭 */
  const handleSecondNextBtn = () => {
    const onlyNumbers = /^\d+$/;

    const validations = [
      {
        check: !!!numberOfStudents,
        item: "numberOfStudents",
      },
      {
        check: !onlyNumbers.test(numberOfStudents),
        item: "numberOfStudentsRegex",
      },
      {
        check: !!!studentRank,
        item: "studentRank",
      },
      {
        check: !!!budget,
        item: "budget",
      },
      {
        check: !onlyNumbers.test(budget),
        item: "budgetRegex",
      },
    ];

    // 각 조건 검증
    for (let i = 0; i < validations.length; i++) {
      const { check, item } = validations[i];
      if (check) {
        setInputCheck(item);
        if (item === "numberOfStudentsRegex" || item === "budgetRegex") {
          alert("'교육 학생 수'와 '교육 예산' 항목은 숫자만 입력 가능합니다.");
        }
        return false;
      }
    }

    return true;
  };

  /** Form 2 - 학급별 교육 정보 에서 다음 버튼 클릭 */
  const handleThirdNextBtn = () => {
    for (let i = 0; i < classGroups.length; i++) {
      if (!!!classGroups[i].className) {
        alert("'학급 이름' 입력란을 다시 확인해 주세요.");
        return false;
      }
    }
    return true;
  };

  /** 다음 버튼 클릭 */
  const handleNextBtn = () => {
    if (
      (formNum === 0 && handleFirstNextBtn()) ||
      (formNum === 1 && handleSecondNextBtn()) ||
      (formNum === 2 && handleThirdNextBtn()) ||
      formNum === 3
    ) {
      setFormNum(formNum + 1);
    }
  };

  /** 캘린더 핸들링 */
  const handleCalendar = (dates: string[]) => {
    const handleChange = (prev: string[][]) => {
      if (calendarModal >= 0) {
        const prevDate = [...prev];
        prevDate.splice(calendarModal, 1, dates);
        return prevDate;
      }
      return prev;
    };

    setEducationDates((prev) => {
      const result = handleChange(prev);
      if (isAuth) {
        setReloadForm((reloadPrev) => {
          let newClassGroups = reloadPrev.classGroups.map((group, index) => {
            if (index === calendarModal) {
              return { ...group, educationDates: dates };
            }
            return group;
          });

          let prevData = { ...reloadPrev, classGroups: newClassGroups };
          console.log(prevData);
          return prevData;
        });
      }
      return result;
    });
  };

  /** 교육 신청 폼 제출 */
  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      const applyData = {
        name: name,
        institutionName: institutionName,
        numberOfStudents: numberOfStudents,
        overallRemark: overallRemark,
        phoneNumber: phoneNumber,
        position: position,
        studentRank: studentRank,
        budget: budget,
        email: email,
      };

      const applicationId = await applyAPI({
        ...applyData,
        sessionId: authSessionId,
      });
      if (applicationId) {
        if (applicationId === "SESSION_ID_NOT_VALID") {
          setFormNum(0);
          setIsAuth(false);
          resetSessionId();
          setSubmitModal(false);
          setAuthNum("");
          return;
        }
        for (let i = 0; i < classGroups.length; i++) {
          const classesData = {
            ...classGroups[i],
            sessionId: authSessionId,
            educationDates:
              educationDates[i]?.length === 0 ? [null] : educationDates[i],
            applicationId: applicationId,
          };

          const classesResult = await addClassesDataAPI(classesData);
          if (!classesResult) {
            await deleteApplicationAPI(
              applicationId,
              authSessionId,
              "applyFail"
            );
            return;
          }
        }

        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const PublicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

        if (serviceId && PublicKey) {
          const classGroupsString = classGroups
            .map((group, i) => {
              return `학급 이름: ${group.className}:
              - 교육 컨셉: ${group.educationConcept}
              - 학생 수: ${group.numberOfStudents}
              - 교육 날짜: ${educationDates[i].join(", ")}
              - 희망 교육 시간: ${group.remark}
              - 교육 시간 미정: ${group.unfixed ? "예" : "아니오"}\n`;
            })
            .join("\n");
          emailjs.send(
            serviceId,
            "apply-education",
            {
              ...applyData,
              classGroups: classGroupsString,
            },
            PublicKey
          );
        }
        alert("교육 신청이 완료되었습니다.");
        navigate("/education");
      }
    } finally {
      setIsLoading(false);
    }
  };

  /** classGroups을 제외한 Recoil 전역 Form 수정 */
  const handleNormalReloadForm = (key: keyof ApplyFormType, data: string) => {
    if (isAuth) {
      setReloadForm((prev) => {
        const prevData = { ...prev };
        if (key !== "classGroups") {
          prevData[key] = data;
        }
        return prevData;
      });
    }
  };

  const handleReloadForm = () => {
    setReloadFormModal(false);

    setName(reloadForm.name);
    setInstitutionName(reloadForm.institutionName);
    setPosition(reloadForm.position);
    setPhoneNumber(reloadForm.phoneNumber);
    setEmail(reloadForm.email);
    setNumberOfStudents(reloadForm.numberOfStudents);
    setStudentRank(reloadForm.studentRank);
    setBudget(reloadForm.budget);
    setOverallRemark(reloadForm.overallRemark);

    const { classGroups, educationDates } =
      reloadForm.classGroups.reduce<ReduceAccumulator>(
        (acc, item) => {
          const { educationDates, ...otherData } = item;
          acc.classGroups.push(otherData);
          acc.educationDates.push(educationDates || []);
          return acc;
        },
        { classGroups: [], educationDates: [] } // 초기값 설정
      );

    setClassGroups(classGroups);
    setEducationDates(educationDates);
  };

  /** 저장된 Form을 불러오지 않을 때, 현재 입력한 데이터를 Reload Form에 저장 */
  const handleNoReloadForm = () => {
    setReloadFormModal(false);

    const classGroupsResult = classGroups.map((item, i) => {
      return { ...item, educationDates: educationDates[i] };
    });

    const applyData = {
      name: name,
      institutionName: institutionName,
      numberOfStudents: numberOfStudents,
      overallRemark: overallRemark,
      phoneNumber: phoneNumber,
      position: position,
      studentRank: studentRank,
      budget: budget,
      email: email,
      classGroups: classGroupsResult,
    };

    setReloadForm(applyData);
  };

  /** 카카오톡 인증 완료 모달에서 확인 버튼 누를 시 작동 */
  const handleFinishAuthModal = () => {
    setFinishAuthModal(false);

    // 현재 입력한 핸드폰 번호와 reload Form에 입력된 번호가 같고
    // 두 번째 Form에 입력된 내용이 하나라도 없을 때 작동
    if (
      reloadForm.phoneNumber === phoneNumber &&
      (!!!numberOfStudents || !!!studentRank || !!!budget)
    ) {
      setReloadFormModal(true);
    } else {
      handleNoReloadForm();
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed h-[100vh] w-[100vw] flex flex-col justify-center items-center bg-[#292929] z-10 top-0 opacity-60">
          <Loading />
          <p className="text-white">요청을 처리 중입니다.</p>
        </div>
      )}
      {/* 모달창 */}
      {finishAuthModal ? (
        <div className="Create-post-kakao-modal-container">
          <div className="Create-post-kakao-modal">
            <p className="Create-post-kakao-modal-top">인증 성공</p>
            <div className="Create-post-kakao-modal-bottom">
              <p className="Create-post-kakao-modal-bottom-text">
                인증되었습니다.
              </p>
              <button
                className="Create-post-kakao-modal-button"
                onClick={handleFinishAuthModal}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      {sendAuthCodeModal ? (
        <div className="Create-post-kakao-modal-container">
          <div className="Create-post-kakao-modal">
            <p className="Create-post-kakao-modal-top">인증 메시지 전송</p>
            <div className="Create-post-kakao-modal-bottom">
              <p className="Create-post-kakao-modal-bottom-text">
                입력하신 번호의 카카오톡으로 인증번호를 발송하였습니다.
              </p>
              <button
                className="Create-post-kakao-modal-button"
                onClick={() => {
                  setSendAuthCodeModal(false);
                }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="Create-post-root">
        {/* <Helmet>
        <title>Create | RODU</title>
      </Helmet> */}
        <Banner
          backgroundImg={backgroundImg.src}
          title={`교육 신청${updateStatus === "update" ? "내역 수정" : ""}`}
          subTitle={`${
            updateStatus === "update"
              ? "Edit Education Registration"
              : "Education Registration"
          }`}
          content={
            "희망 교육과 문의 사항을 작성해주시면 빠르게 답변해드리겠습니다."
          }
        />
        {browserWidth > 1380 ? (
          <div
            ref={leftBarRef}
            className="Progress-container"
            style={{ top: barPosition }}
          >
            <div>
              <div className="circleNum-text-box">
                <p
                  className={
                    formNum >= 0
                      ? "circleNum circleNum-active"
                      : "circleNum circleNum-nonActive"
                  }
                >
                  1
                </p>
                <p className="Progress-text">신청자 정보</p>
              </div>
              <div className="Progress-line-container">
                <div className="Progress-line" />
              </div>

              <div className="circleNum-text-box">
                <p
                  className={
                    formNum >= 1
                      ? "circleNum circleNum-active"
                      : "circleNum circleNum-nonActive"
                  }
                >
                  2
                </p>
                <p className="Progress-text">교육생 정보</p>
              </div>
              <div className="Progress-line-container">
                <div className="Progress-line" />
              </div>

              <div className="circleNum-text-box">
                <p
                  className={
                    formNum >= 2
                      ? "circleNum circleNum-active"
                      : "circleNum circleNum-nonActive"
                  }
                >
                  3
                </p>
                <p className="Progress-text">학급별 교육 일정</p>
              </div>
              <div className="Progress-line-container">
                <div className="Progress-line" />
              </div>

              <div className="circleNum-text-box">
                <p
                  className={
                    formNum >= 3
                      ? "circleNum circleNum-active"
                      : "circleNum circleNum-nonActive"
                  }
                >
                  4
                </p>
                <p className="Progress-text">교육 특이사항</p>
              </div>
              <div className="Progress-line-container">
                <div className="Progress-line" />
              </div>

              <div className="circleNum-text-box">
                <p
                  className={
                    formNum >= 4
                      ? "circleNum circleNum-active"
                      : "circleNum circleNum-nonActive"
                  }
                >
                  5
                </p>
                <p className="Progress-text">최종 신청</p>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="CreateEdu-content-root">
          <div className="Create-post-form" ref={mainFormRef}>
            {submitModal ? (
              <div className="Create-post-kakao-modal-container">
                <div className="Create-post-submit-modal">
                  <p className="Create-post-kakao-modal-top">
                    교육을 신청하시겠습니까 ?
                  </p>
                  <div className="Create-post-submit-modal-bottom">
                    <p
                      style={{ letterSpacing: "0.9px", textAlign: "center" }}
                      className="Create-post-kakao-modal-bottom-text"
                    >
                      교육을 신청하시겠습니까?
                      <br />
                      신청하신 정보는 수정 가능합니다.
                    </p>
                    <div className="Create-post-submit-modal-button-container">
                      <button
                        style={{
                          background: "#d9d9d9",
                          fontSize: "0.776rem",
                          margin: "0 0.684rem 0 0",
                        }}
                        className="Create-post-kakao-modal-button"
                        onClick={() => {
                          setSubmitModal(false);
                        }}
                      >
                        취소
                      </button>
                      <button
                        style={{ fontSize: "0.776rem", marginTop: "0" }}
                        className="Create-post-kakao-modal-button"
                        onClick={handleSubmit}
                      >
                        교육 신청
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}

            <div
              className="Create-post-individual-form"
              style={
                formNum === 0 || formNum === 4
                  ? { display: "" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">신청자 정보</div>
              <div className="Create-post-input-parent">
                <div className="Create-post-input-description-box Create-post-input-top">
                  <p className="Create-post-input-description-text">
                    신청자 성함
                  </p>
                </div>
                <div className="Create-post-input-box Create-post-input-top">
                  <input
                    className={
                      inputCheck === "name"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    placeholder="신청자 성함"
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setName(target.value);
                      handleNormalReloadForm("name", target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.name }
                    //   : {})}
                    value={name}
                  />
                </div>
              </div>

              <div className="Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    소속 기관명
                  </span>
                </div>
                <div className="Create-post-input-box">
                  <input
                    placeholder="로듀 초등학교"
                    className={
                      inputCheck === "institutionName"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setInstitutionName(target.value);
                      handleNormalReloadForm("institutionName", target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.institutionName }
                    //   : {})}
                    value={institutionName}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    직위
                  </span>
                </div>
                <div className="Create-post-input-box">
                  <input
                    placeholder="진로 선생님"
                    className={
                      inputCheck === "position"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setPosition(target.value);
                      handleNormalReloadForm("position", target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.position }
                    //   : {})}
                    value={position}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    휴대폰 번호
                  </span>
                </div>
                <div className="Create-post-input-description-flex">
                  <input
                    placeholder="01012345678"
                    className={
                      inputCheck === "phoneNumber"
                        ? "Create-post-input-phoneNum  horizontal-shaking border-red"
                        : "Create-post-input-phoneNum"
                    }
                    readOnly={formNum === 4 || isAuth || isActiveTimer}
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setPhoneNumber(target.value);
                      handleNormalReloadForm("phoneNumber", target.value);
                      setInputCheck("");
                    }}
                    maxLength={11}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.phoneNumber }
                    //   : {})}
                    value={phoneNumber}
                  />
                  <button
                    type="button"
                    className={
                      inputCheck === "sendCode"
                        ? "Create-post-input-phoneNum-button horizontal-shaking border-red"
                        : "Create-post-input-phoneNum-button"
                    }
                    style={
                      isActiveTimer
                        ? { color: "#777777", fontSize: "0.859rem" }
                        : {}
                    }
                    onClick={handleSendAuthCode}
                    disabled={formNum === 4 || isAuth}
                  >
                    {isActiveTimer ? "인증번호 재전송" : "카카오톡 인증"}
                  </button>
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <p className="Create-post-input-description-text">
                    카카오톡 인증
                  </p>
                </div>
                <div className="Create-post-input-description-flex">
                  <input
                    placeholder="인증번호 입력"
                    className="Create-post-input-phoneNum"
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setAuthNum(target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4 || isAuth || !isActiveTimer}
                    value={authNum}
                  />
                  <button
                    type="button"
                    className={
                      inputCheck === "authButton"
                        ? "Create-post-input-phoneNum-button horizontal-shaking"
                        : "Create-post-input-phoneNum-button"
                    }
                    style={{
                      color: isActiveTimer
                        ? "#f9911e"
                        : "var(--rodu-light-grey)",
                    }}
                    disabled={formNum === 4 || isAuth}
                    onClick={handleVerifyAuthCode}
                  >
                    {isAuth ? "인증 완료" : "인증 하기"}
                  </button>
                  {isClickBeforeSendAuthCode ? (
                    <div
                      style={{
                        fontSize: "0.844rem",
                        color: "red",
                        marginLeft: "0.6rem",
                      }}
                    >
                      인증번호를 먼저 발송해 주세요.
                    </div>
                  ) : (
                    ""
                  )}
                  {isActiveTimer ? (
                    <div className="Create-post-input-phoneNum-button">
                      <span style={{ color: "#777777", fontSize: "1rem" }}>
                        {timeLeft === 0
                          ? "인증번호 만료"
                          : `${Math.floor(timeLeft / 60)}: ${
                              timeLeft % 60 < 10
                                ? "0" + (timeLeft % 60)
                                : timeLeft % 60
                            }`}
                      </span>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    이메일
                  </span>
                </div>
                <div className="Create-post-input-box">
                  <input
                    placeholder="이메일"
                    className={
                      inputCheck === "email" || inputCheck === "emailRegex"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setEmail(target.value);
                      handleNormalReloadForm("email", target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.email }
                    //   : {})}
                    value={email}
                  />
                </div>
              </div>
            </div>

            {/* 교육생 정보 */}
            <div
              className="Create-post-individual-form"
              style={
                formNum === 1
                  ? { display: "" }
                  : formNum === 4
                  ? { marginTop: "6.3rem" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">교육생 정보</div>
              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box Create-post-input-top">
                  <span className="Create-post-input-description-text">
                    교육 학생 수
                  </span>
                </div>
                <div className="Create-post-input-box Create-post-input-top">
                  <input
                    className={
                      inputCheck === "numberOfStudents" ||
                      inputCheck === "numberOfStudentsRegex"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setNumberOfStudents(target.value);
                      handleNormalReloadForm("numberOfStudents", target.value);
                      setInputCheck("");
                    }}
                    placeholder="총 학생 수를 입력해주세요."
                    type="number"
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.numberOfStudents }
                    //   : {})}
                    value={numberOfStudents}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    학생 정보
                  </span>
                </div>
                <div className="Create-post-input-box">
                  <input
                    placeholder="초등학교 1학년, 3학년"
                    className={
                      inputCheck === "studentRank"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setStudentRank(target.value);
                      handleNormalReloadForm("studentRank", target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.studentRank }
                    //   : {})}
                    value={studentRank}
                  />
                </div>
              </div>

              <div className=" Create-post-input-parent">
                <div className="Create-post-input-description-box">
                  <span className="Create-post-input-description-text">
                    교육 예산
                  </span>
                </div>
                <div className="Create-post-input-box">
                  <input
                    placeholder="교육 커리큘럼 제안에 활용되는 정보입니다."
                    className={
                      inputCheck === "budget" || inputCheck === "budgetRegex"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setBudget(target.value);
                      handleNormalReloadForm("budget", target.value);
                      setInputCheck("");
                    }}
                    type="number"
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.budget }
                    //   : {})}
                    value={budget}
                  />
                </div>
              </div>
            </div>

            <div
              className="Create-post-individual-form"
              style={
                formNum === 2
                  ? { display: "" }
                  : formNum === 4
                  ? { marginTop: "6.3rem" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">학급별 교육 일정</div>
              <div className="classInfo-container">
                {classGroups.map((item, i) => {
                  return (
                    <div className="classInfo-box">
                      <section className={"section"}>
                        <div className="classInfo-subtitle-container">
                          <div className="classInfo-subtitle">학급 정보</div>

                          <button
                            type="button"
                            onClick={() => handleRemoveClass(i)}
                            disabled={formNum === 4}
                          >
                            <Delete style={{ width: "0.833rem" }} />
                          </button>
                        </div>

                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            학급 이름
                          </span>
                          <input
                            className="classInfo-topInfo-input px-[0.778rem]"
                            placeholder="6학년 3반"
                            onChange={(e) => {
                              const target = e.target as HTMLInputElement;
                              handleClassGroupInput(
                                i,
                                "className",
                                target.value
                              );
                              setInputCheck("");
                            }}
                            value={classGroups[i].className}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            교육 컨셉
                          </span>
                          <input
                            className="classInfo-topInfo-input px-[0.778rem]"
                            placeholder="AI, 로봇, 소프트웨어, 메이커, 3D 등"
                            onChange={(e) => {
                              const target = e.target as HTMLInputElement;
                              handleClassGroupInput(
                                i,
                                "educationConcept",
                                target.value
                              );
                              setInputCheck("");
                            }}
                            value={classGroups[i].educationConcept}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            학생 수
                          </span>
                          <input
                            className="classInfo-topInfo-input px-[0.778rem]"
                            placeholder="학생 수를 입력해주세요."
                            onChange={(e) => {
                              const target = e.target as HTMLInputElement;
                              handleClassGroupInput(
                                i,
                                "numberOfStudents",
                                target.value
                              );
                              setInputCheck("");
                            }}
                            value={classGroups[i].numberOfStudents}
                            type="number"
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            교육 날짜
                          </span>
                          <button
                            className="classInfo-topInfo-input px-[0.778rem] flex items-center text-[#9CA3AF]"
                            onClick={() => setCalendarModal(i)}
                          >
                            <p className="whitespace-nowrap overflow-scroll scrollbar-hide">
                              {!!!educationDates[i]?.length
                                ? "교육 날짜를 선택하세요."
                                : educationDates[i].join(", ")}
                            </p>
                          </button>
                        </div>
                        <div className="classInfo-date-addExplanation">
                          (다회차 교육인 경우 복수 선택 해주세요)
                        </div>
                        <div>
                          <div className="classInfo-bottomInfo-title">
                            희망 교육 시간
                          </div>
                          <textarea
                            className="classInfo-bottomInfo-input"
                            placeholder="희망하시는 교육 시간을 적어주세요.&#13;&#10;미정 일시 하단 체크박스를 체크해주세요."
                            onChange={(e) => {
                              const target = e.target.value;
                              handleClassGroupInput(i, "remark", target);
                              setInputCheck("");
                            }}
                            value={classGroups[i].remark}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-checkbox-container">
                          <input
                            className="classInfo-checkbox"
                            type="checkbox"
                            readOnly={formNum === 4}
                            {...(classGroups[i].unfixed
                              ? { checked: true }
                              : {})}
                            onChange={(e) => {
                              const target = e.target.checked;
                              handleClassGroupInput(i, "unfixed", target);
                            }}
                          />
                          <span className="classInfo-checkbox-text">
                            교육 시간 미정
                          </span>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div>
              <button
                className="classInfo-addClass-box"
                type="button"
                onClick={handleAddClass}
                disabled={formNum === 4}
              >
                + 학급 추가
              </button>
            </div>

            <div
              className="Create-post-individual-form"
              style={
                formNum === 3
                  ? { display: "" }
                  : formNum === 4
                  ? { marginTop: "6.3rem" }
                  : { opacity: 0, height: 0, overflow: "hidden" }
              }
            >
              <div className="CreateEdu-title">교육 특이사항</div>

              <div className=" Create-post-input-textarea-parent">
                <div
                  className="Create-post-input-textarea-span-box Create-post-input-top"
                  style={{ paddingRight: 0 }}
                >
                  <span className="Create-post-input-description-text">
                    교육 특이사항
                  </span>
                </div>
                <div className="Create-post-input-textarea-div Create-post-input-top">
                  <textarea
                    placeholder="교육 특이사항을 입력해주세요"
                    className="Create-post-textarea"
                    onChange={(e) => {
                      const target = e.target.value;
                      setOverallRemark(target);
                      handleNormalReloadForm("overallRemark", target);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
                    // {...(isAfterRender && locationData
                    //   ? { value: locationData.overallRemark }
                    //   : {})}
                    value={overallRemark}
                  />
                </div>
              </div>
            </div>

            <div className="Create-post-next-button-container">
              <div className="Create-post-next-button-parent">
                {formNum === 0 || formNum === 4 ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="Create-post-button bg-[#d9d9d9] mr-[1rem] rounded"
                    onClick={() => {
                      setFormNum(formNum - 1);
                    }}
                  >
                    이전
                  </button>
                )}

                {formNum === 4 ? (
                  ""
                ) : (
                  <button
                    type="button"
                    className="Create-post-button bg-rodu-medium text-white rounded"
                    onClick={handleNextBtn}
                  >
                    다음
                  </button>
                )}
              </div>
            </div>

            <div className="Create-post-submit-button-parent">
              {formNum === 4 ? (
                <>
                  <button
                    type="button"
                    className="Create-post-button rounded"
                    style={{
                      background: "#D9D9D9",
                      marginRight: "1.111rem",
                    }}
                    onClick={() => {
                      setFormNum(formNum - 1);
                    }}
                  >
                    수정 하기
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitModal(true);
                    }}
                    className="Create-post-submit-button-on rounded"
                  >
                    교육 신청
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
      {calendarModal >= 0 && (
        <Calendar
          handleXMark={() => setCalendarModal(-1)}
          handleSelectDates={handleCalendar}
          selectedDatesProps={educationDates[calendarModal]}
        />
      )}

      <YesNoModal
        title={
          "저장된 교육 신청 내역을 불러와 이어서 작성하시겠습니까?\n선택하신 경우, 현재 입력하신 정보는 사라지고 이전에 저장된 내용으로 대체됩니다."
        }
        yesHandler={handleReloadForm}
        noHandler={handleNoReloadForm}
        isOpen={reloadFormModal && !!reloadForm.phoneNumber}
      />
    </>
  );
};
