import { Helmet } from "react-helmet-async";
import { Banner } from "../components/banner";

export const CreatePost = () => {
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
    </>
  );
};
