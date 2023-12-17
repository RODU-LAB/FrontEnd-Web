import { useState } from "react";
import { useNavigate, useLocation } from "react-router";
// import { Helmet } from "react-helmet-async";

import { createPostAPI } from "../../services/post/postAPI";
import { PostDataTypes } from "../../types/postTypes";

import { Banner } from "../../components/banner";

import infoConfirm from "../../images/Frame68.svg";

export const UpdatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  // eslint-disable-next-line
  const status = location.state ? "update" : "create";

  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [isLocked, setIsLocked] = useState(false);
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  /** 폼 제출 (제출 전 유효성 검사 포함) */
  const summitHandler = async () => {
    // 숫자만 포함, 10자리 이상
    const onlyNumbers = /^\d{10,}$/;

    // 이메일 형식을 확인
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // 입력 필드 검증을 위한 배열
    const validations = [
      { check: name === "", message: "문의자 성함을 다시 확인해 주세요." },
      {
        check: phoneNumber === "" || !onlyNumbers.test(phoneNumber),
        message: "연락처를 확인해 주세요.",
      },
      {
        // 이메일이 공백이 아니라면 이메일 유효성 검사 실행
        check: email !== "" && !emailRegex.test(email),
        message: "이메일 형식을 확인해 주세요.",
      },
      { check: pw === "", message: "게시글 비밀번호를 입력해 주세요." },
      { check: title === "", message: "글 제목을 입력해 주세요." },
      { check: content === "", message: "글 내용을 입력해 주세요." },
      {
        check: !isAgree,
        message: "개인정보 수집 및 이용에 관한 동의가 필요합니다.",
      },
    ];

    // 각 조건 검증
    for (let i = 0; i < validations.length; i++) {
      const { check, message } = validations[i];
      if (check) {
        alert(message);
        return;
      }
    }

    const data: PostDataTypes = {
      ownerName: name,
      phoneNumber: phoneNumber,
      password: pw,
      title: title,
      content: content,
      isLocked: isLocked,
    };

    if (institution !== "" && institution) {
      data.institution = institution;
    }

    if (email !== "" && email) {
      data.email = email;
    }

    const result = await createPostAPI(data);
    if (result === "SUCCESS") {
      alert("문의가 성공적으로 접수되었습니다.");
      navigate("/posts");
    } else {
      alert("문의 신청에 실패하셨습니다.");
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>Create | RODU</title>
      </Helmet> */}
      <Banner
        routeName1="• 교육문의"
        route1=""
        title="교육문의"
        subtitle="Education inquiry"
        content="궁금하신 점이나 상담을 원하시는 부분은 언제든 문의주시면 신속하게 답변 드리도록 하겠습니다."
        contentClass="Subtitle-bigFont"
        rightImg="none"
      />
      <div className="Create-post-content-root">
        <div className="CreateEdu-content-root">
          <div className="CreateEdu-title flex items-center">
            문의신청정보
            <p className="text-[#ff0000] text-[12px] ml-3">* 필수 입력 사항</p>
          </div>
          <div className="Create-post-form">
            <div className=" Create-post-input-parent ">
              <div className="Create-post-input-description-box Create-post-input-top">
                <span className="Create-post-input-description-text">
                  문의자 성함
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-box Create-post-input-top">
                <input
                  className="Create-post-input-content"
                  name="ownerName"
                  placeholder="성함 입력"
                  maxLength={4}
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setName(target.value);
                  }}
                />
              </div>
            </div>
            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  소속 기관(학원)
                </span>
              </div>
              <div className="Create-post-input-box">
                <input
                  name="institution"
                  placeholder="로듀 초등학교"
                  className="Create-post-input-content"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setInstitution(target.value);
                  }}
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  연락처
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-box">
                <input
                  name="phoneNumber"
                  placeholder="하이픈(-) 없이 숫자만 입력"
                  className="Create-post-input-content"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setPhoneNumber(target.value);
                  }}
                />
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
                  placeholder="이메일 주소 입력"
                  className="Create-post-input-content"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setEmail(target.value);
                  }}
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  비밀글
                </span>
              </div>
              <div className="Create-post-input-box-checkbox">
                <input
                  className="Create-post-input-checkbox  w-6 h-6 ml-4 mt-2"
                  type="checkbox"
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setIsLocked(target.checked);
                  }}
                />
              </div>
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box">
                <span className="Create-post-input-description-text">
                  게시글 비밀번호
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-box">
                <input
                  type="password"
                  className="Create-post-input-content"
                  placeholder="글 삭제 및 수정시 필요합니다."
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setPw(target.value);
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: "5.5rem" }} className="CreateEdu-title">
              문의내용
            </div>

            <div className=" Create-post-input-parent">
              <div className="Create-post-input-description-box Create-for-border">
                <span className="Create-post-input-description-text">
                  글 제목
                </span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-box Create-for-border">
                <input
                  name="title"
                  maxLength={30}
                  className="Create-post-input-content"
                  placeholder=""
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setTitle(target.value);
                  }}
                  // value={title}
                />
              </div>
            </div>

            <div className=" Create-post-input-textarea-parent">
              <div className="Create-post-input-textarea-span-box">
                <span className="Create-post-input-description-text">
                  글 내용
                </span>
                <span style={{ color: "red" }}> *</span>
              </div>
              <div className="Create-post-input-textarea-div">
                <textarea
                  name="content"
                  placeholder="문의 내용을 입력해주세요"
                  className="Create-post-textarea"
                  onInput={(e) => {
                    const target = e.target as HTMLInputElement;
                    setContent(target.value);
                  }}
                />
              </div>
            </div>

            <div className="Create-post-input-parent-notification">
              <div className="Create-post-input-title-notification" />
              <div
                className="Create-post-input-box-notification"
                onMouseOver={() => setIsHovering(true)}
                onMouseOut={() => setIsHovering(false)}
              >
                <div className=" create-post-notification-checkbox-parent">
                  <div className="Create-post-agree-checkbox-parent flex flex-row justify-center">
                    <input
                      className="Create-post-agree-checkbox"
                      name="agree"
                      type="checkbox"
                      onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        setIsAgree(target.checked);
                      }}
                    />
                    <span className="Create-post-agree-notification">
                      본인은 [개인정보 수집 및 이용에 관한 동의] 내용을
                      확인하였으며 동의합니다.
                    </span>
                  </div>

                  <div className="Create-post-agree-info-confirm-parent">
                    {isHovering ? <img src={infoConfirm} alt="info" /> : ""}
                  </div>
                </div>
              </div>
            </div>

            <div className="Create-post-submit-button-parent">
              <button
                className="Create-post-submit-button-on"
                onClick={() => summitHandler()}
              >
                <span className="Create-post-submit-text">접수하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
