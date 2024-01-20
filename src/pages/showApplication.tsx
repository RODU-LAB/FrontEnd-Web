import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  sendAuthCodeAPI,
  verifyAuthCodeAPI,
  findApplicationAPI,
} from "../services/educationAPI";
import { ApplicationDataTypes } from "../types/eduApplicationTypes";

import { Banner } from "../components/banner";

interface ApplicationsUIProps {
  application: ApplicationDataTypes;
  idx: number;
}

function ShowApplication() {
  const navigate = useNavigate();

  const [sendAuthCodeModal, setSendAuthCodeModal] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  const [inputCheck, setInputCheck] = useState("");
  const [isActiveTimer, setIsActiveTimer] = useState(false);
  // 인증번호 남은 시간
  const [timeLeft, setTimeLeft] = useState(300);
  const [isClickBeforeSendAuthCode, setIsClickBeforeSendAuthCode] =
    useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [authNum, setAuthNum] = useState("");

  const [applicationData, setApplicationData] = useState([]);

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
      const result = await verifyAuthCodeAPI(authNum, phoneNumber);
      if (result) {
        setIsAuth(true);
        setIsActiveTimer(false);
        const findApplicationResult = await findApplicationAPI(
          phoneNumber,
          result
        );
        if (findApplicationResult) {
          setApplicationData(findApplicationResult);
        }
      }
    } else if (!isActiveTimer) {
      setIsClickBeforeSendAuthCode(true);
    }
  };

  /** 게시판 항목 UI 컴포넌트 */
  const ApplicationsUI = ({ application, idx }: ApplicationsUIProps) => {
    const data = application;
    return (
      <div
        className="w-full h-[80px] flex justify-between pr-[20px] border-b-rodu-grey cursor-pointer border-b"
        onClick={() => navigate("/update-application", { state: data })}
      >
        <div className="flex items-center">
          <p className="w-[78px] text-center button text-rodu-grey mr-[20px]">
            {idx}
          </p>
          <p className="body1 mr-[14px]">{`${data.institutionName}, ${data.name}님께서 신청하신 교육 내역입니다.`}</p>
        </div>
        <div className="flex items-center">
          <button className="w-[146px] text-center text-rodu-black text-[18px]">
            수정하기
          </button>
          <button className="text-center text-rodu-black text-[18px]">
            삭제
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="Create-post-root">
      {/* <Helmet>
        <title>Create | DORO</title>
      </Helmet> */}
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

      <div className="CreateEdu-content-root" style={{ marginBottom: "12rem" }}>
        {/* <ApplyButton /> */}

        <div className="CreateEdu-title">교육 신청 내역 확인하기</div>
        <div
          className="Create-post-form"
          // onSubmit={handleSubmit(onSubmit_create, onInvalid_create)}
        >
          <div className="Create-post-input-parent border-t border-t-[#d9d9d9]">
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
                    ? "Create-post-input-phoneNum horizontal-shaking border-red"
                    : "Create-post-input-phoneNum"
                }
                readOnly={isAuth || isActiveTimer}
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
                disabled={isAuth}
              >
                {isActiveTimer ? "인증번호 재전송" : "카카오톡 인증"}
              </button>
            </div>
          </div>

          <div className="Create-post-input-parent">
            <div className="Create-post-input-description-box border-t border-t-[#d9d9d9]">
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
                readOnly={isAuth || !isActiveTimer}
              />
              <button
                type="button"
                className={
                  inputCheck === "authButton"
                    ? "Create-post-input-phoneNum-button horizontal-shaking"
                    : "Create-post-input-phoneNum-button"
                }
                style={{
                  color: isActiveTimer ? "#f9911e" : "var(--rodu-light-grey)",
                }}
                disabled={isAuth}
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
        </div>

        <div className="retrieve-container">
          <div className="CreateEdu-title">교육 신청 내역</div>
          <div className="retrieve-count">
            <span style={{ fontWeight: "600" }}>총 </span>
            <span style={{ fontWeight: "600", color: "#005c97" }}>
              {applicationData.length}
            </span>
            <span style={{ fontWeight: "600" }}>건</span>
          </div>
        </div>
      </div>
      {applicationData.map((item, i) => {
        return <ApplicationsUI application={item} idx={i} />;
      })}
    </div>
  );
}

export default ShowApplication;
