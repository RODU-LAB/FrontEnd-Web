import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoSymbolWhite from "../images/logo/logo-white.png";
import logoSymbol from "../images/logo/logo-symbol.png";
import { ReactComponent as LogoText } from "../images/logo/logo-text.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faRobot,
  faPenToSquare,
  faPeopleGroup,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

export function Header() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const pageStyles = {
    home: {
      container: "pt-7 absolute",
      logoTextColor: "#FFF",
      logo: logoSymbolWhite,
      headerText:
        "text-white hover:text-[#faab66] text-[18px] font-medium transition-colors duration-500",
      hamburgerButton: "text-while",
    },
    other: {
      container: "bg-white",
      logoTextColor: "#333",
      logo: logoSymbol,
      headerText:
        "text-rodu-grey hover:text-black text-[18px] font-medium transition-colors duration-500",
      hamburgerButton: "text-black",
    },
  };
  const currentPage = location.pathname === "/" ? "home" : "other";

  const { container, logoTextColor, logo, headerText, hamburgerButton } =
    pageStyles[currentPage];

  return (
    <>
      <header
        className={`py-5 w-full px-[20px] tablet:px-[44px] lg:px-[120px] flex items-center justify-between z-[49] ${container}`}
      >
        <Link to="/" className="flex items-center gap-[14px] tablet:gap-[16px]">
          <img src={logo} className="h-[26px] tablet:h-[38px]" alt="logo" />
          <LogoText className="h-[14px] tablet:h-[20px]" fill={logoTextColor} />
        </Link>
        <div className="md:flex hidden gap-9">
          <a
            href="https://smartstore.naver.com/robotedu"
            target="_blank"
            rel="noopener noreferrer"
            className={headerText}
          >
            구매 링크
          </a>
          <Link to="/contents" className={headerText}>
            교육 콘텐츠
          </Link>
          <Link to="/education" className={headerText}>
            교육 신청
          </Link>
          <Link to="/community" className={headerText}>
            커뮤니티 게시판
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon
            icon={faBars}
            className={`text-white text-[22px] ${hamburgerButton}`}
          />
        </button>
        {isOpen && (
          <div className="fixed top-0 left-0 h-full w-full bg-black bg-opacity-60 z-50">
            <div className="absolute top-0 right-0 h-full w-[60%] bg-white shadow-md p-5 flex flex-col items-end md:hidden ">
              <div className="flex justify-between items-center w-full">
                <button onClick={toggleMenu}>
                  <FontAwesomeIcon icon={faXmark} className="text-[24px]" />
                </button>
                <p className="text-[22px] font-bold">MENU</p>
              </div>

              <div className="w-full h-[0.5px] bg-[#c5c5c5] mt-3 mb-7" />
              <div className="flex flex-col items-end gap-6">
                <a
                  href="https://smartstore.naver.com/robotedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500 flex justify-center gap-3"
                >
                  <p>구매 링크</p>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="text-[24px] w-[26px]"
                  />
                </a>
                <Link
                  to="/contents"
                  className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500 flex justify-center gap-3"
                >
                  <p>교육 콘텐츠</p>
                  <FontAwesomeIcon
                    icon={faRobot}
                    className="text-[24px] w-[26px]"
                  />
                </Link>
                <Link
                  to="/education"
                  className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500 flex justify-center gap-3"
                >
                  <p>교육 신청</p>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[24px] w-[26px]"
                  />
                </Link>
                <Link
                  to="/community"
                  className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500 flex justify-center gap-3"
                >
                  <p>커뮤니티 게시판</p>
                  <FontAwesomeIcon
                    icon={faPeopleGroup}
                    className="text-[24px] w-[26px]"
                  />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
