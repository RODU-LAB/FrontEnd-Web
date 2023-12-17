import { Link } from "react-router-dom";
import roduLogo from "../images/logo.png";
import notion from "../images/notion_logo.png";
import insta from "../images/instagram_logo.png";

export const Foot: React.FC = () => {
  return (
    <div className="Foot-container">
      <div className="Foot-content-container">
        <div className="Foot-top-container">
          <div className="Foot-rodu-logo">
            <Link to="/" className="Foot-logo-link">
              <img src={roduLogo} className="Foot-logo-img" alt="Rodu" />
            </Link>
          </div>
          <div className="Foot-top-right-container">
            <div className="Foot-company-container">
              <p className="Foot-company">Company</p>
              <a
                className="Foot-introduce"
                href="https://sugared-syzygy-e4c.notion.site/RODU-8116d06bc3c24f4cbfb112cdfab9e6cf?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                회사소개
              </a>
              <a
                className="Foot-recruit"
                href="https://sugared-syzygy-e4c.notion.site/RODU-8116d06bc3c24f4cbfb112cdfab9e6cf?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                강사모집
              </a>
              <div className="Foot-mananger-login">
                <Link className="Foot-recruit" to={"/login"}>
                  관리자 로그인
                </Link>
              </div>
            </div>
            <div className="Foot-inquiry-container">
              <p className="Foot-inquiry-span">교육 문의</p>
              <p className="Foot-phone">
                고객센터 010-5140-3477 / 010-2925-2966
              </p>
              <p className="Foot-time">
                상담시간 09:00~21:00
                <br />
                연중무휴
                <br />
                점심시간 PM 12:00~PM 13:00
              </p>
              <p className="Foot-email">이메일 rodu0608@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="Foot-bottom-container">
          <div className="Foot-information">
            <span className="Foot-information-rodu">
              RODU(로듀) | 대표 : 한대희 | 사업자 등록번호:211-19-41243
            </span>
            <span className="Foot-address">
              경기도 안산시 상록구 한양대학로 55 학연산클러스터 4층, KF-ROOM 4호
            </span>
          </div>
          <div className="Foot-bottom-right">
            <div className="Foot-sns">
              <a
                className="Foot-insta-frame"
                href="https://www.instagram.com/rodu_edu/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="Foot-insta-img" src={insta} alt="Instagram" />
              </a>
              <a
                className="Foot-notion-frame"
                href="https://sugared-syzygy-e4c.notion.site/RODU-8116d06bc3c24f4cbfb112cdfab9e6cf?pvs=4"
                target="_blank"
                rel="noreferrer"
              >
                <img className="Foot-notion-img" src={notion} alt="Notion" />
              </a>
            </div>
            <div className="Foot-inquiry-frame ">
              <Link to="/createPost" className="Foot-inquiry-link">
                <button className="Foot-inquiry-button Foot-inquiry-button:hover">
                  교육 문의하기
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
