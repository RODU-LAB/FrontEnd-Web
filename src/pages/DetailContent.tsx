import { useState, useRef, useCallback, useLayoutEffect } from "react";
import { useParams } from "react-router-dom";

import { Banner } from "../components/ContentsBanner";
import { eduContents } from "../utils/eduContents";

import "../styles/customList.css";

import whiteBackGroundLogo from "../images/detailContents/white-background-logo.png";
import { ReactComponent as PrevBtn } from "../images/prev_button.svg";
import { ReactComponent as NextBtn } from "../images/next_button.svg";

interface TitleType {
  text: string;
}

interface TableLayoutType {
  children: React.ReactNode;
}

interface TableRowTypes {
  header: string;
  content: string | { texts: string[]; style: string };
}

interface EduInfoTypes {
  singleText: string[];
  list: string[];
}

interface CurriculumTypes {
  list: string[][];
}

interface LearningObjectivesTypes {
  texts: string[];
}

interface ImgType {
  images: string[];
}

export function DetailContent() {
  const { contentType } = useParams<{ contentType: string }>(); // URL 매개변수 읽기
  const content = eduContents[contentType!];

  const TitleComponent = ({ text }: TitleType) => {
    return (
      <p className="inline-block ml-4 mb-[38px] text-[30px] font-semibold border-b-4 border-b-rodu-medium">
        {text}
      </p>
    );
  };

  const TableLayout = ({ children }: TableLayoutType) => {
    return (
      <table className="w-full border-t border-t-[#d9d9d9]">
        <tbody>{children}</tbody>
      </table>
    );
  };

  const TableRow = ({ header, content }: TableRowTypes) => {
    return (
      <tr className="py-4 border-b border-b-[#d9d9d9]">
        <th className="w-[160px] py-4 font-medium text-[#212121] bg-[#f8f9fd] tracking-wide">
          {header}
        </th>
        <td className="px-4 text-[#777777] custom-bullet">
          {typeof content === "string" ? (
            content
          ) : (
            <ul
              className={`py-4 px-4 text-[#777777] leading-7 list-outside ${content.style}`}
            >
              {content.texts.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          )}
        </td>
      </tr>
    );
  };

  const EduInfoComponent = ({ singleText, list }: EduInfoTypes) => {
    return (
      <div>
        <TitleComponent text="교육 소개" />
        <TableLayout>
          <TableRow header="교육 대상" content={singleText[0]} />
          <TableRow
            header="기대 효과"
            content={{ texts: list, style: "custom-bullet" }}
          />
          <TableRow header="교육 형태" content={singleText[1]} />
        </TableLayout>
      </div>
    );
  };

  const CurriculumComponent = ({ list }: CurriculumTypes) => {
    return (
      <div>
        <TitleComponent text="커리큘럼" />
        <TableLayout>
          {list.map((item, i) => (
            <TableRow
              key={i}
              header={["준비단계", "실행 단계", "마무리 단계"][i]}
              content={{ texts: item, style: "list-decimal" }}
            />
          ))}
        </TableLayout>
      </div>
    );
  };

  const LearningObjectivesComponent = ({ texts }: LearningObjectivesTypes) => {
    return (
      <div>
        <TitleComponent text="수업 목표" />
        <div className="flex flex-col gap-4">
          {texts.map((text, i) => (
            <p
              className="h-[66px] px-9 border border-[#d9d9d9] bg-[#f8f9fd] font-bold text-[#212121] flex items-center tracking-wider"
              key={i}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    );
  };

  const KitPictureComponent = ({ images }: ImgType) => {
    return (
      <div>
        <TitleComponent text="키트 사진" />
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 gap-[18px]">
            {images.map((image, i) => (
              <img src={image} alt={"kit" + i} key={i} />
            ))}
            {images.length === 1 && (
              <img
                className="h-full"
                src={whiteBackGroundLogo}
                alt="white-background-logo"
              />
            )}
          </div>
        </div>
      </div>
    );
  };

  const EduPhotoComponent = ({ images }: ImgType) => {
    const [slideIdx, setSlideIdx] = useState(0);
    const [dragging, setDragging] = useState(false);
    const [startPos, setStartPos] = useState(0);
    const [prevSlidePos, setPrevSlidePos] = useState(0);
    const [slideMove, setSlideMove] = useState(0);
    const [slideImgWidth, setSlideImgWidth] = useState(0);

    const elementRef = useRef<HTMLDivElement | null>(null);

    useLayoutEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          if (entry.target === elementRef.current) {
            const width = entry.contentRect.width;
            setSlideImgWidth(width);
          }
        }
      });

      const currentElement = elementRef.current;

      if (currentElement) {
        resizeObserver.observe(currentElement);
      }

      return () => {
        if (currentElement) {
          resizeObserver.unobserve(currentElement);
        }
      };
    }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setStartPos(e.clientX);
      setDragging(true);
      e.preventDefault();
    };

    const handleMouseMove = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging) return;

        const currentX = e.clientX;
        const dx = currentX - startPos;

        setSlideMove(prevSlidePos + dx);
      },
      [dragging, startPos, prevSlidePos]
    );

    const handleMouseUp = () => {
      if (Math.abs(slideMove - prevSlidePos) >= 100) {
        if (slideMove < prevSlidePos) {
          // 슬라이드 왼쪽으로 넘기기
          const nextSlide = prevSlidePos - slideImgWidth;
          if (slideIdx < images.length - 1) {
            // 경계 확인
            setSlideIdx((prev) => ++prev);
            setPrevSlidePos(nextSlide);
            setSlideMove(nextSlide);
          } else {
            setSlideMove(prevSlidePos); // 경계 넘으면 위치 재설정
          }
        } else {
          // 슬라이드 오른쪽으로 넘기기
          const nextSlide = prevSlidePos + slideImgWidth;
          if (slideIdx > 0) {
            // 경계 확인
            setSlideIdx((prev) => --prev);
            setPrevSlidePos(nextSlide);
            setSlideMove(nextSlide);
          } else {
            setSlideMove(prevSlidePos); // 경계 넘으면 위치 재설정
          }
        }
      } else {
        setSlideMove(prevSlidePos); // 슬라이드 이동 안 함
      }

      setDragging(false);
    };

    const handleArrowButton = (arrow: number) => {
      if (
        (arrow > 0 && slideIdx < images.length - 1) ||
        (arrow < 0 && slideIdx > 0)
      ) {
        setSlideIdx((prev) => prev + arrow);
        setPrevSlidePos((prev) => prev + -slideImgWidth * arrow);
        setSlideMove((prev) => prev + -slideImgWidth * arrow);
      }
    };

    return (
      <div>
        <TitleComponent text="교육 사진" />
        <div className="w-full flex justify-center gap-2">
          {images.map((_, i) => (
            <div
              className={`h-2 w-2 rounded-[50%] ${
                slideIdx === i ? "bg-[#808080]" : "bg-rodu-light-grey"
              }`}
              key={i}
            />
          ))}
        </div>
        <div className="w-full flex justify-center mt-7 gap-14">
          <button
            onClick={() => handleArrowButton(-1)}
            disabled={slideIdx === 0}
            className={`${slideIdx === 0 && "opacity-0"}`}
          >
            <PrevBtn className="w-8" />
          </button>
          <div
            className="overflow-hidden max-w-[694px] select-none"
            ref={elementRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div
              className={`flex ${
                !dragging && "transition-transform duration-300"
              }`}
              style={{ transform: `translateX(${slideMove}px)` }}
            >
              {images.map((image, i) => (
                <img
                  src={image}
                  key={i}
                  alt={"Slide" + i}
                  className="w-full object-cover"
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => handleArrowButton(1)}
            disabled={slideIdx === images.length - 1}
            className={`${slideIdx === images.length - 1 && "opacity-0"}`}
          >
            <NextBtn className="w-8" />
          </button>
        </div>
      </div>
    );
  };

  const NoticeComponent = () => {
    const texts = [
      "로봇 교육 콘텐츠는 로봇 공학 분야의 전문 지식과 경험이 풍부한 대학생 강사님께서 진행하십니다.",
      "로봇 교육 콘텐츠는 우수한 강사진과 함께 제공되며, 강사님의 다양한 경험과 전문 지식을 콘텐츠에 반영하여 학습 품질을 높였습니다.",
      "교육 과정 중 원할한 시청을 위해 시청각 장비가 필요하며, 스크린, 빔 프로젝트 등을 사용하시는 것을 권장합니다.",
      "교육 수강을 위해 1인용 책상 정도의 공간이 필요하므로, 강의를 수강할 환경을 마련해주세요.",
      "교육 콘텐츠의 구체적인 일정과 수강 신청 방법에 대해 안내 문의는 언제나 가능합니다.",
      "문의 : 010-5140-3477",
    ];
    return (
      <div>
        <TitleComponent text="공지사항" />
        <div className="py-[14px] px-7 border border-[#d9d9d9] bg-[#f8f9fd] text-[#777777]">
          <ul className="custom-dash">
            {texts.map((text, i) => (
              <li className="leading-9" key={i}>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <>
      <Banner
        img={content.img}
        title={content.korName}
        subTitle={content.engName}
        content={content.bannerContent}
      />
      <div className="flex flex-col w-full items-center min-h-screen py-[68px] px-[20px]">
        <div className="flex flex-col gap-[120px] w-full max-w-1048px">
          <EduInfoComponent
            singleText={content.eduInfo.singleText}
            list={content.eduInfo.texts}
          />

          <CurriculumComponent list={content.curriculum.texts} />

          <LearningObjectivesComponent texts={content.learningObjectives} />

          {content.kitPicture && (
            <KitPictureComponent images={content.kitPicture} />
          )}

          {content.eduPhoto && <EduPhotoComponent images={content.eduPhoto} />}

          <NoticeComponent />
        </div>
      </div>
    </>
  );
}
