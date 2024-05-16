"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";

import { createPostAPI, updatePostAPI } from "src/api/post/postAPI";
import { CreatePostTypes } from "src/types/postTypes";

import Banner from "src/components/BackgroundBanner";

import InfoConfirm from "public/images/Frame68.svg";
import backgroundImg from "public/images/instructor3.jpg";

export default function UpdatePost({ loadData, status, slugId }) {
  const router = useRouter();
  const postId = Number(slugId);
  // 렌더링 이후인지 확인
  const [isAfterRender, setIsAfterRender] = useState(true);

  const [name, setName] = useState(loadData?.name || "");
  const [institution, setInstitution] = useState(loadData?.institution || "");
  const [phoneNumber, setPhoneNumber] = useState(loadData?.phoneNumber || "");
  const [email, setEmail] = useState(loadData?.email || "");
  const [pw, setPw] = useState("");
  const [title, setTitle] = useState(loadData?.title || "");
  const [content, setContent] = useState(loadData?.content || "");

  const [isLocked, setIsLocked] = useState(loadData?.isLocked || false);
  const [isAgree, setIsAgree] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    setIsAfterRender(false);
    if (status === "edit" && Number(slugId) !== loadData.id) {
      alert("잘못된 접근입니다.");
      router.push("/community");
    }
  }, []);

  /** 폼 제출 (제출 전 유효성 검사 포함) */
  const handleSummit = async () => {
    // 숫자만 포함, 10자리 이상
    const onlyNumbers = /^\d{10,}$/;

    // 이메일 형식을 확인
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // 입력 필드 검증을 위한 배열
    const validations = [
      { check: name === "", message: "이름을 다시 확인해 주세요." },
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

    const data: CreatePostTypes = {
      ownerName: name,
      phoneNumber: phoneNumber,
      password: pw,
      institution: institution,
      email: email,
      title: title,
      content: content,
      isLocked: isLocked,
    };

    if (status === "create") {
      const result = await createPostAPI(data);
      if (result === 200) {
        alert("게시글이 성공적으로 등록되었습니다.");
        router.push("/community");
      }
    }

    if (status === "update") {
      const result = await updatePostAPI(postId, pw, data);
      if (result === 200) {
        alert("게시글이 성공적으로 수정되었습니다.");
        router.push("/community");
      }
    }
  };

  return (
    <>
      {/* <Helmet>
        <title>Create | RODU</title>
      </Helmet> */}
      <Banner
        backgroundImg={backgroundImg.src}
        title={status === "create" ? "커뮤니티 글 등록" : "커뮤니티 글 수정"}
        subTitle={
          status === "create" ? "Create Community Post" : "Edit Community Post"
        }
        content="로봇지식을 공유하는 커뮤니티 입니다."
      />
      <div className="Create-post-content-root">
        <div className="CreateEdu-content-root">
          <div className="CreateEdu-title flex items-center">
            게시글 정보
            <p className="text-[#ff0000] text-[12px] ml-3">* 필수 입력 사항</p>
          </div>
          <div className="Create-post-form">
            <div className=" Create-post-input-parent ">
              <div className="Create-post-input-description-box Create-post-input-top">
                <span className="Create-post-input-description-text">이름</span>
                <span style={{ color: "red" }}>*</span>
              </div>
              <div className="Create-post-input-box Create-post-input-top">
                <input
                  className="Create-post-input-content"
                  name="ownerName"
                  placeholder="성함 입력"
                  maxLength={4}
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setName(target.value);
                  }}
                  {...(isAfterRender && loadData
                    ? { value: loadData.ownerName }
                    : {})}
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
                  placeholder="로듀 초등학교"
                  className="Create-post-input-content"
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setInstitution(target.value);
                  }}
                  {...(isAfterRender && loadData
                    ? { value: loadData.institution }
                    : {})}
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
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setPhoneNumber(target.value);
                  }}
                  {...(isAfterRender && loadData
                    ? { value: loadData.phoneNumber }
                    : {})}
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
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setEmail(target.value);
                  }}
                  {...(isAfterRender && loadData
                    ? { value: loadData.email }
                    : {})}
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
                  className="Create-post-input-checkbox w-6 h-6 ml-4 mt-2"
                  type="checkbox"
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setIsLocked(target.checked);
                  }}
                  {...(isAfterRender && loadData?.isLocked
                    ? { checked: true }
                    : {})}
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
                  placeholder={
                    status === "create"
                      ? "비밀번호가 없는 게시물은 수정 및 삭제가 불가합니다."
                      : "현재 게시판의 비밀번호를 입력하십시오."
                  }
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setPw(target.value);
                  }}
                />
              </div>
            </div>

            <div style={{ marginTop: "5.5rem" }} className="CreateEdu-title">
              게시글
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
                  onChange={(e) => {
                    const target = e.target as HTMLInputElement;
                    setTitle(target.value);
                  }}
                  {...(isAfterRender && loadData
                    ? { value: loadData.title }
                    : {})}
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
                  placeholder="내용을 입력해주세요"
                  className="Create-post-textarea"
                  onChange={(e) => {
                    const target = e.target.value;
                    setContent(target);
                  }}
                  {...(isAfterRender && loadData
                    ? { value: loadData.content }
                    : {})}
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
                    {isHovering && <InfoConfirm />}
                  </div>
                </div>
              </div>
            </div>

            <div className="Create-post-submit-button-parent">
              <button
                className="Create-post-submit-button-on"
                onClick={handleSummit}
              >
                <span className="Create-post-submit-text">등록하기</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
