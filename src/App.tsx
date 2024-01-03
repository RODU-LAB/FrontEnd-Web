import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./index.css";

import "./styles/styles.css";
import "./styles/postsStyles.css";
import "./styles/commonStyles.css";
import "./styles/createStyles.css";
import "./styles/postStyles.css";
import "./styles/headerStyles.css";
import "./styles/footStyles.css";
import "./styles/bannerStyles.css";
import "./styles/modalStyles.css";
import "./styles/main1Styles.css";
import "./styles/main2Styles.css";
import "./styles/main3Styles.css";
import "./styles/main6Styles.css";
import "./styles/main5Styles.css";
import "./styles/main7Styles.css";
import "./styles/main8Styles.css";
import "./styles/main4Styles.css";
import "./styles/main9Styles.css";
import "./styles/customswiper.css";
import "./styles/eduContentStyles.css";
import "./styles/eduDetailContentsStyles.css";
import "./styles/bannerStyles.css";
import "./styles/bodyStyles.css";
import "./styles/makeNewApplication.css";
import "./styles/retrieveStyles.css";
import "./styles/globalStyle.css";
import "./styles/applyEdu.css";

import ScrollToTop from "./components/scrollToTop"; // 페이지 렌더링 시 스크롤 최상단
import { Foot } from "./components/foot";
import { Header } from "./components/Header";
import { NotFound } from "./pages/404";
import { UpdatePost } from "./pages/post/UpdatePost";
// import { EditPost } from "./pages/editPost";
import { HomePage } from "./pages/home";
import { Post } from "./pages/post/post";
import { Posts } from "./pages/post/posts";
import { ApplyEdu } from "./pages/applyEdu";
import { MakeNewApplication } from "./pages/makeNewApplication";
import ShowApplication from "./pages/showApplication";
import { ShowDetailContent } from "./pages/showDetailContent";
import { EditApplication } from "./pages/editApplication";
import { Login } from "./pages/Login";

import { Otto } from "././pages/educontents/otto";
import { HourGlass } from "./pages/educontents/hourGlass";
import { Spider } from "./pages/educontents/spider";
import { Snake } from "./pages/educontents/snake";
import { SmallPuppy } from "./pages/educontents/smallPuppy";
import { Human } from "./pages/educontents/human";
import { Security } from "./pages/educontents/security";
import { Logistics } from "./pages/educontents/logistics";
import { SecurityDog } from "./pages/educontents/securityDog";
import { Yolo } from "./pages/educontents/yolo";
import { DeepLearning } from "./pages/educontents/deepLearning";
import { ReinforcementLearning } from "./pages/educontents/reinforcementLearning";
import { Printer } from "././pages/educontents/printer";
import { Plc } from "./pages/educontents/plc";
import { Kicad } from "./pages/educontents/kicad";
import { Embedded } from "./pages/educontents/embedded";
import { Ros2 } from "./pages/educontents/ros2";
import { Manipulator } from "./pages/educontents/manipulator";
import AppPrivacyPolicy from "./pages/appPrivacyPolicy";

export const App = () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/updatepost" element={<UpdatePost />} />
          <Route path="/posts" element={<Posts />} />
          {/* <Route path="/post/:id/edit" element={<EditPost />} /> */}
          <Route path="/post" element={<Post />} />
          <Route path="*" element={<NotFound />}></Route>
          <Route path="/applyEdu" element={<ApplyEdu />}></Route>
          <Route
            path="/makeNewApplication"
            element={<MakeNewApplication />}
          ></Route>
          <Route path="/showApplication" element={<ShowApplication />}></Route>
          <Route
            path="/showDetailContent"
            element={<ShowDetailContent />}
          ></Route>
          <Route path="/editApplication" element={<EditApplication />}></Route>
          <Route path="/login" element={<Login />}></Route>

          <Route path="/otto" element={<Otto />}></Route>
          <Route path="/hourGlass" element={<HourGlass />}></Route>
          <Route path="/spider" element={<Spider />}></Route>
          <Route path="/snake" element={<Snake />}></Route>
          <Route path="/smallPuppy" element={<SmallPuppy />}></Route>
          <Route path="/human" element={<Human />}></Route>
          <Route path="/security" element={<Security />}></Route>
          <Route path="/logistics" element={<Logistics />}></Route>
          <Route path="/securityDog" element={<SecurityDog />}></Route>
          <Route path="/yolo" element={<Yolo />}></Route>
          <Route path="/deepLearning" element={<DeepLearning />}></Route>
          <Route
            path="/reinforcementLearning"
            element={<ReinforcementLearning />}
          ></Route>
          <Route path="/printer" element={<Printer />}></Route>
          <Route path="/plc" element={<Plc />}></Route>
          <Route path="/kicad" element={<Kicad />}></Route>
          <Route path="/embedded" element={<Embedded />}></Route>
          <Route path="/ros2" element={<Ros2 />}></Route>
          <Route path="/manipulator" element={<Manipulator />}></Route>
          <Route
            path="/appPrivacyPolicy"
            element={<AppPrivacyPolicy />}
          ></Route>
        </Routes>
        <Foot />
      </RecoilRoot>
    </BrowserRouter>
  );
};
