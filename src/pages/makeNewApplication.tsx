// eslint-disable-next-line
import { useEffect, useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

import { Banner } from "../components/banner";

// import createEduRoute from "../images/bannerCategory/createEdu.png";
// import infoConfirm from "../images/Frame68.svg";
// import { ReactComponent as Delete } from "../images/delete.svg";

export const MakeNewApplication = () => {
  const [authModal, setAuthModal] = useState(false);
  const [kakaoModal, setKakaoModal] = useState(false);
  const [submitModal, setSubmitModal] = useState(false);
  const [formNum, setFormNum] = useState(0);
  const [inputCheck, setInputCheck] = useState("");
  const [authState, setAuthState] = useState(false);
  const [authResend, setAuthResend] = useState(false);
  const [isActiveTimer, setIsActiveTimer] = useState(false);

  return (
    <>
      {/* 모달창 */}
      {authModal ? (
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
                  setAuthModal(false);
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
      {kakaoModal ? (
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
                  setKakaoModal(false);
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
        <div className="Progress-container">
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
        <div className="CreateEdu-content-root">
          <div className="Create-post-form">
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
                    name="name"
                    placeholder="신청자 성함"
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
                    placeholder="도로 초등학교"
                    className={
                      inputCheck === "institution_name"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
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
                    name="phone_number"
                    placeholder="01012345678"
                    className={
                      inputCheck === "phone_number"
                        ? "Create-post-input-phoneNum  horizontal-shaking border-red"
                        : "Create-post-input-phoneNum"
                    }
                    readOnly={formNum === 4 || authState === true}
                    onChange={() => {
                      if (authState === true) {
                        setAuthState(false);
                      }
                      if (authResend === true) {
                        setAuthResend(false);
                      }
                      if (isActiveTimer) {
                        setIsActiveTimer(false);
                      }
                    }}
                  />
                  {!authResend ? (
                    <button
                      type="button"
                      className={
                        inputCheck === "phone_number"
                          ? "Create-post-input-phoneNum-button horizontal-shaking border-red"
                          : "Create-post-input-phoneNum-button"
                      }
                      onClick={() => {
                        // check_kakao_condtion();
                        setInputCheck("");
                      }}
                      disabled={formNum === 4}
                    >
                      카카오톡 인증
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="Create-post-input-phoneNum-button"
                      style={{ color: "#777777", fontSize: "0.859rem" }}
                      disabled={formNum === 4}
                      onClick={() => {
                        // check_kakao_condtion();
                      }}
                    >
                      인증번호 재전송
                    </button>
                  )}
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
                    readOnly={formNum === 4}
                  />
                  <button
                    type="button"
                    // className={
                    //   authImPosibble
                    //     ? "Create-post-input-phoneNum-button horizontal-shaking"
                    //     : "Create-post-input-phoneNum-button"
                    // }
                    style={{
                      color: isActiveTimer
                        ? "#f9911e"
                        : "var(--rodu-light-grey)",
                    }}
                    disabled={formNum === 4}
                  >
                    {authState ? "인증 완료" : "인증 하기"}
                  </button>
                  {/* {authImPosibble ? (
                    <div
                      style={{
                        fontSize: "0.844rem",
                        color: "red",
                        marginLeft: "0.6rem",
                      }}
                    >
                      카카오톡 인증을 먼저 해주세요.
                    </div>
                  ) : (
                    ""
                  )} */}
                  {isActiveTimer ? (
                    <div className="Create-post-input-phoneNum-button">
                      <span style={{ color: "#777777", fontSize: "1rem" }}>
                        {/* {min === 0 && sec === 0
                          ? "인증번호 만료"
                          : `${min}:${sec < 10 ? `0${sec}` : sec}`} */}
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
                    placeholder="E-Mail"
                    className={
                      inputCheck === "email"
                        ? "Create-post-input-content horizontal-shaking border-red"
                        : "Create-post-input-content"
                    }
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
                    type="text"
                    className="Create-post-input-content"
                    name="student_count"
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
                    className="Create-post-input-content"
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
                    type="text"
                    name="budget"
                    placeholder="교육 커리큘럼 제안에 활용되는 정보입니다."
                    className="Create-post-input-content"
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
              {/* <div className="classInfo-container">
                {fields.map((field, index) => {
                  return (
                    <div key={field.id} className="classInfo-box">
                      <section className={"section"} key={field.id}>
                        <div className="classInfo-subtitle-container">
                          <div className="classInfo-subtitle">학급 정보</div>
                          {index === 0 ? (
                            ""
                          ) : (
                            <button
                              type="button"
                              // onClick={() => remove(index)}
                              disabled={formNum === 4}
                            >
                              <Delete style={{ width: "0.833rem" }} />
                            </button>
                          )}
                        </div>

                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            학급 이름
                          </span>
                          <input
                            className="classInfo-topInfo-input"
                            placeholder="6학년 3반"
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            교육 컨셉
                          </span>
                          <input
                            className="classInfo-topInfo-input"
                            placeholder="AI, 로봇, 소프트웨어, 메이커, 3D 등"
                            name={`detail_classes.${index}.edu_concept`}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            학생 수
                          </span>
                          <input
                            className="classInfo-topInfo-input"
                            placeholder="학생 수를 입력해주세요."
                            type="text"
                            name={`detail_classes.${index}.student_number`}
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-topInfo-container">
                          <span className="classInfo-topInfo-font">
                            교육 날짜
                          </span>
                          <Controller
                            control={control}
                            name={`detail_classes.${index}.date`}
                            render={(props) => (
                              <>
                                <DatePicker
                                  style={{
                                    fontFamily: "Pretendard",
                                    border: "solid 1px var(--rodu-light-grey)",
                                    borderRadius: "4px",
                                    height: "2rem",
                                    paddingLeft: "0.778rem",
                                    width: "192.6px",
                                  }}
                                  disabled={formNum === 4}
                                  placeholder="교육 날짜를 입력해주십시오."
                                  onChange={(e) => props.field.onChange(e)}
                                  minDate={new Date()}
                                  weekDays={weekDays}
                                  format="YYYY/MM/DD"
                                  months={months}
                                  multiple
                                  plugins={[<DatePanel sort="date" />]}
                                />
                              </>
                            )}
                          />
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
                            readOnly={formNum === 4}
                          />
                        </div>
                        <div className="classInfo-checkbox-container">
                          <input
                            className="classInfo-checkbox"
                            type="checkbox"
                            readOnly={formNum === 4}
                          />
                          <span className="classInfo-checkbox-text">
                            교육 시간 미정
                          </span>
                        </div>
                      </section>
                    </div>
                  );
                })}
              </div> */}
              <button
                className="classInfo-addClass-box"
                type="button"
                // onClick={() => click_append_buttion()}
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
                    className="Create-post-button"
                    style={{
                      background: "#d9d9d9",
                      color: "#f9911e",
                      marginRight: "1rem",
                    }}
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
                    className="Create-post-button"
                    // style={
                    //   !nextBtnActive
                    //     ? { background: "#f9911e", color: "#fff" }
                    //     : { background: "#d9d9d9", color: "#f9911e" }
                    // }
                    onClick={() => {
                      setFormNum(formNum + 1);
                      // check_input_nextBtn();
                    }}
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
                    className="Create-post-button"
                    style={{
                      background: "#D9D9D9",
                      color: "#f9911e",
                      marginRight: "1.111rem",
                    }}
                    onClick={() => {
                      setFormNum(formNum - 1);
                      // delete_added_point();
                    }}
                  >
                    수정 하기
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitModal(true);
                    }}
                    className={`${
                      true
                        ? "Create-post-submit-button-on"
                        : "Create-post-submit-button-off"
                    }`}
                  >
                    {/* {loading ? (
    <span className="Create-post-submit-text">로딩 중</span>
  ) : ( */}
                    교육 신청
                    {/* )} */}
                  </button>
                </>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
