import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";
import notion from "../images/notion_logo.png";
import insta from "../images/instagram_logo.png";

export const Footer = () => {
  return (
    <div className="md-home:h-[330px] w-full bg-[#f1f1f1] flex justify-center py-9">
      <div className="w-full lg-home:w-[1090px] px-[20px] flex flex-col md-home:flex-row justify-between md-home:items-center max-md-home:gap-4 max-md-home:items-center">
        <div className="h-full flex flex-col justify-between max-md-home:gap-4 max-md-home:items-center">
          <Link to="/">
            <img src={logo} className="h-[80px]" alt="logo" />
          </Link>
          <p className="text-rodu-grey text-[13px] leading-5 max-md-home:text-center">
            RODU(로듀) | 대표 : 한대희
            <br className="inline-block tablet:hidden" />
            <span className="hidden tablet:inline-block">|&nbsp;</span>
            <span>사업자 등록번호:211-19-41243</span>
            <div className="max-tablet:h-[4px]" />
            경기도 안산시 상록구 한양대학로 55
            <br className="inline-block tablet:hidden" />
            학연산클러스터 4층, KF-ROOM 4호
          </p>
        </div>
        <div className="flex gap-[96px] h-full">
          <div className="flex flex-col justify-between h-full max-tablet:hidden">
            <div className="flex flex-col max-md-home:gap-4">
              <p className="text-[22px] text=[#212121] font-medium mb-[21px]">
                Company
              </p>
              <div className="flex flex-col gap-2">
                <a
                  className="font-medium text-[13px] text-rodu-grey"
                  href="https://sugared-syzygy-e4c.notion.site/RODU-8116d06bc3c24f4cbfb112cdfab9e6cf?pvs=4"
                  target="_blank"
                  rel="noreferrer"
                >
                  회사소개
                </a>
                <a
                  className="font-medium text-[13px] text-rodu-grey"
                  href="https://sugared-syzygy-e4c.notion.site/RODU-8116d06bc3c24f4cbfb112cdfab9e6cf?pvs=4"
                  target="_blank"
                  rel="noreferrer"
                >
                  강사모집
                </a>
                <Link
                  className="font-medium text-[13px] text-rodu-grey"
                  to={"/login"}
                >
                  관리자 로그인
                </Link>
              </div>
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/rodu_edu/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="h-[40px]" src={insta} alt="Instagram" />
              </a>
              <a
                href="https://sugared-syzygy-e4c.notion.site/RODU-8116d06bc3c24f4cbfb112cdfab9e6cf?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                <img className="h-[40px]" src={notion} alt="Notion" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between max-md-home:gap-4 max-tablet:items-center">
            <div className="max-tablet:flex max-tablet:flex-col max-tablet:items-center max-tablet:text-center">
              <p className="text-[22px] text=[#212121] font-medium mb-2 tablet:mb-[21px]">
                교육 문의
              </p>
              <div className="flex flex-col gap-2">
                <div className="font-medium text-[13px] text-rodu-grey flex gap-1">
                  <p>고객센터</p>
                  <a href="tel:010-5140-3477" className="hover:text-black">
                    010-5140-3477
                  </a>
                  /
                  <a
                    href="tel:010-2925-2966"
                    className="text-rodu-grey hover:text-black"
                  >
                    010-2925-2966
                  </a>
                </div>
                <p className="font-medium text-[13px] text-rodu-grey">
                  상담시간 09:00~21:00
                  <br />
                  연중무휴
                  <br />
                  점심시간 PM 12:00~PM 1:00
                </p>
                <p className="font-medium text-[13px] text-rodu-grey">
                  이메일 rodu0608@gmail.com
                </p>
              </div>
            </div>
            <Link to="/post/updatepost">
              <button
                className="text-[13px] font-medium h-[46px] w-[160px] rounded-[25px] bg-white
                        hover:bg-rodu-medium hover:text-white transition-colors duration-500"
              >
                교육 문의하기
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
