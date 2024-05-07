import "../styles/index.css";
import "../styles/postsStyles.css";
import "../styles/postStyles.css";
import "../styles/modalStyles.css";
import "../styles/makeNewApplication.css";
import "../styles/retrieveStyles.css";
import type { Metadata, Viewport } from "next";
import Header from "src/components/Header";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "RODU(Robot Education) - 로봇 교육의 선두주자",
  description:
    "로듀는 맞춤형 로봇교육 솔루션을 개발, 공급하는 로봇 전문 기업입니다.",
  openGraph: {
    title: "RODU(Robot Education) - 로봇 교육의 선두주자",
    siteName: "RODU",
    description:
      "로듀는 맞춤형 로봇교육 솔루션을 개발, 공급하는 로봇 전문 기업입니다.",
    type: "website",
    locale: "ko_KR",
    url: "https:/www.rodu.co.kr",
  },
};

export const viewport: Viewport = {
  // 웹 애플리케이션의 테마 색상을 설정하는 데 사용됨.
  // 브라우저나 모바일 장치에서 웹 페이지를 어떻게 표시할지에 영향을 줌.
  themeColor: "white",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <meta
          name="naver-site-verification"
          content="5832681fb782fdaaea5e6c1f7c5ceb97f3ab9636"
        />
      </head>
      <body>
        <Header />
        <div id="root">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
