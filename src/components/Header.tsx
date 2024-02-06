import { useState } from "react";
import { Link } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="h-[70px] w-full px-6 sm:px-10 md:px-[100px] flex items-center justify-between fixed bg-white border-b border-[#e7e7e7] z-[49]">
        <Link to="/" className="flex items-center gap-4">
          <img src={logoSymbol} className="h-[28px]" alt="logo" />
          <LogoText height={18} />
        </Link>
        <div className="md:flex hidden gap-9">
          <a
            href="https://smartstore.naver.com/robotedu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500"
          >
            구매 링크
          </a>
          <Link
            to="/showDetailContent"
            className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500"
          >
            교육 콘텐츠
          </Link>
          <Link
            to="/applyEdu"
            className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500"
          >
            교육 신청
          </Link>
          <Link
            to="/posts"
            className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500"
            aria-current="page"
          >
            커뮤니티 게시판
          </Link>
        </div>
        <button onClick={toggleMenu} className="md:hidden">
          <FontAwesomeIcon icon={faBars} className="text-black text-[24px]" />
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
                  to="/showDetailContent"
                  className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500 flex justify-center gap-3"
                >
                  <p>교육 콘텐츠</p>
                  <FontAwesomeIcon
                    icon={faRobot}
                    className="text-[24px] w-[26px]"
                  />
                </Link>
                <Link
                  to="/applyEdu"
                  className="text-rodu-grey text-[18px] font-medium hover:text-black transition-colors duration-500 flex justify-center gap-3"
                >
                  <p>교육 신청</p>
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[24px] w-[26px]"
                  />
                </Link>
                <Link
                  to="/posts"
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
