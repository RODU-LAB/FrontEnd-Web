import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

import { sendAuthCodeAPI, verifyAuthCodeAPI } from "../services/apply";

import { Banner } from "../components/banner";
import { Calendar } from "../components/Calendar";

import { ReactComponent as Delete } from "../images/delete.svg";

interface ClassGroupTypes {
  className: string;
  educationConcept: string;
  numberOfStudents: string;
  remark: string;
  unfixed: boolean;
}

export const MakeNewApplication = () => {
  const [sendAuthCodeModal, setSendAuthCodeModal] = useState(false);
  const [finishAuthModal, setFinishAuthModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  // 학급 정보 폼의 인덱스가 입력되면 modal이 띄워짐
  const [calendarModal, setCalendarModal] = useState(-1);

  const [formNum, setFormNum] = useState(0);
  const [inputCheck, setInputCheck] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  // 인증번호 남은 시간
  const [timeLeft, setTimeLeft] = useState(300);
  const [isClickBeforeSendAuthCode, setIsClickBeforeSendAuthCode] =
    useState(false);
  const [authSesstionId, setAuthSessionId] = useState("");
  const [browserWidth, setBrowserWidth] = useState(window.innerWidth);

  const leftBarRef = useRef<HTMLDivElement>(null);
  const mainFormRef = useRef<HTMLDivElement>(null);

  // Form 0
  const [name, setName] = useState("");
  const [institutionName, setInstitutionName] = useState("");
  const [position, setPosition] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNum, setAuthNum] = useState(""); // 인증번호
  const [email, setEmail] = useState("");

  // Form 1 - 교육생 정보
  const [numberOfStudents, setNumberOfStudents] = useState("");
  const [studentRank, setStudentRank] = useState("");
  const [budget, setBudget] = useState("");

  // Form 2 - 학급별 교육 일정
  const [classGroup, setClassGroup] = useState([
    {
      className: "",
      educationConcept: "",
      numberOfStudents: "",
      remark: "",
      unfixed: false,
    },
  ]);
  const [educationDates, setEducationDates] = useState<string[][]>([]);

  // Form 3 - 교육 특이사항
  const [overallRemark, setOverallRemark] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setBrowserWidth(window.innerWidth);
    };

    // resize 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const progressSpace = () => {
      if (!leftBarRef.current || !mainFormRef.current) {
        return;
      }

      let formLeft = mainFormRef.current.getBoundingClientRect().left;
      let progressStyle = leftBarRef.current.style;
      progressStyle.width = `${formLeft - 20}px`;
    };

    // 초기 실행
    progressSpace();

    // 창 크기 조정 시 실행
    window.onresize = () => {
      progressSpace();
    };

    // 스크롤 시 실행
    const handleScroll = () => {
      if (!leftBarRef.current) {
        return;
      }

      let scrollY = 461.328 + window.scrollY;
      let progressStyle = leftBarRef.current.style;

      if (scrollY <= 811.328) {
        scrollY = 461.328;
      } else {
        scrollY = scrollY - 350;
      }

      progressStyle.top = `${scrollY}px`;
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup 함수
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.onresize = null;
    };
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
      const result = await verifyAuthCodeAPI(authNum, phoneNumber);
      if (result) {
        setFinishAuthModal(true);
        setIsAuth(true);
        setIsActiveTimer(false);
        setAuthSessionId(result);
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
    setClassGroup((prev) => {
      const updatedData: any = [...prev];

      // 특정 인덱스의 객체에 접근하여 값을 업데이트
      const updatedItem = { ...updatedData[idx] };
      updatedItem[key] = value;
      updatedData[idx] = updatedItem;

      return updatedData;
    });
  };

  /** 학급 추가 버튼 클릭 시 (Form 2 - 학급별 교육 일정) */
  const handleAddClass = () => {
    setClassGroup((prev) => [
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
  };

  /** 학급 삭제 (Form 2 - 학급별 교육 일정) */
  const handleRemoveClass = (idx: number) => {
    if (classGroup.length > 1) {
      setClassGroup((prev) => {
        const prevDate = [...prev];
        prevDate.splice(idx, 1);
        return prevDate;
      });
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
    for (let i = 0; i < classGroup.length; i++) {
      if (!!!classGroup[i].className) {
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
    setEducationDates((prev) => {
      if (calendarModal >= 0) {
        const prevDate = [...prev];
        prevDate.splice(calendarModal, 1, dates);
        return prevDate;
      }
      return prev;
    });
  };

  return (
    <>
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
                onClick={() => {
                  setFinishAuthModal(false);
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
        {browserWidth > 1300 ? (
          <div ref={leftBarRef} className="Progress-container">
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
                          // add_deleting_point();
                        }}
                      >
                        취소
                      </button>
                      <button
                        type="submit"
                        style={{ fontSize: "0.776rem", marginTop: "0" }}
                        className="Create-post-kakao-modal-button"
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
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                      setInputCheck("");
                    }}
                    maxLength={11}
                  />
                  <button
                    type="button"
                    className="Create-post-input-phoneNum-button"
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
                    className={
                      inputCheck === "authCode"
                        ? "Create-post-input-phoneNum horizontal-shaking border-red"
                        : "Create-post-input-phoneNum"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setAuthNum(target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4 || isAuth || !isActiveTimer}
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
                    name="email"
                    placeholder="이메일"
                    className={
                      inputCheck === "email" || inputCheck === "emailRegex"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
                    onChange={(e) => {
                      const target = e.target as HTMLInputElement;
                      setEmail(target.value);
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                      setInputCheck("");
                    }}
                    placeholder="총 학생 수를 입력해주세요."
                    readOnly={formNum === 4}
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
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                {classGroup.map((item, i) => {
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
                            value={classGroup[i].className}
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
                            value={classGroup[i].educationConcept}
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
                            value={classGroup[i].numberOfStudents}
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
                            value={classGroup[i].remark}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-checkbox-container">
                          <input
                            className="classInfo-checkbox"
                            type="checkbox"
                            readOnly={formNum === 4}
                            {...(classGroup[i].unfixed
                              ? { checked: true }
                              : {})}
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
                      setInputCheck("");
                    }}
                    readOnly={formNum === 4}
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
                    // style={
                    //   !nextBtnActive
                    //     ? { background: "#f9911e", color: "#fff" }
                    //     : { background: "#d9d9d9", color: "#f9911e" }
                    // }
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
      {calendarModal >= 0 ? (
        <Calendar
          handleXMark={() => setCalendarModal(-1)}
          handleSelectDates={handleCalendar}
          selectedDatesProps={educationDates[calendarModal]}
        />
      ) : (
        ""
      )}
    </>
  );
};
