// import { faUser } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import roduLogo from "../images/logo.png";

export function Header() {
  return (
    <>
      <header className="Header-header">
        <div className="Header-container">
          <Link to="/" className="Header-logo">
            <img src={roduLogo} className="Header-logo" alt="Rodu" />
          </Link>
          <div>
            <ul className="flex flex-row bg-white">
              <li>
                <a
                  href="https://smartstore.naver.com/robotedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="Header-link-inquiry"
                >
                  구매 링크
                </a>
              </li>
              <li>
                <Link to="/showDetailContent" className="Header-link-inquiry">
                  교육 콘텐츠
                </Link>
              </li>
              <li>
                <Link to="/applyEdu" className="Header-link-inquiry">
                  교육 신청
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className="Header-link-community hover:font-bold"
                  aria-current="page"
                >
                  문의게시판
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
