// import { Helmet } from "react-helmet-async";
import { Banner } from "../components/banner";

export const Post = () => {
  return (
    <>
      {/* <Helmet>
        <title>문의게시판 | RODU</title>
      </Helmet> */}
      <Banner
        routeDot1="•"
        routeName1="커뮤니티"
        route1=""
        route1Opacity={0.7}
        routeDot2="•"
        routeName2="문의게시판"
        route2="/posts"
        route2Opacity={1}
        title="교육 신청"
        subtitle="Education inquiry board"
        content="문의 답변을 확인할 수 있습니다"
        contentClass="Subtitle-smallFont"
        rightImg="none"
      />
    </>
  );
};
