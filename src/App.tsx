import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import "./styles/postsStyles.css";
import "./styles/commonStyles.css";
import "./styles/postStyles.css";
import "./styles/bannerStyles.css";
import "./styles/modalStyles.css";
import "./styles/eduContentStyles.css";
import "./styles/eduDetailContentsStyles.css";
import "./styles/bannerStyles.css";
import "./styles/bodyStyles.css";
import "./styles/makeNewApplication.css";
import "./styles/retrieveStyles.css";
import "./styles/globalStyle.css";
import "./styles/applyEdu.css";

import ScrollToTop from "./components/ScrollToTop"; // 페이지 렌더링 시 스크롤 최상단
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/404";
import { UpdatePost } from "./pages/post/UpdatePost";
import { Post } from "./pages/post/post";
import { Posts } from "./pages/post/posts";
import { EduServiceOptions } from "./pages/EduServiceOptions";
import { UpdateApplication } from "./pages/UpdateApplication";
import ShowApplication from "./pages/ShowApplication";
import { Contents } from "./pages/Contents";
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

export const App = () => {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <RecoilRoot>
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contents" element={<Contents />} />

            <Route path="/post/updatepost" element={<UpdatePost />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post" element={<Post />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/education" element={<EduServiceOptions />} />
            <Route path="/update-application" element={<UpdateApplication />} />
            <Route path="/showApplication" element={<ShowApplication />} />
            <Route path="/login" element={<Login />} />

            <Route path="/contents/otto" element={<Otto />} />
            <Route path="/contents/hourGlass" element={<HourGlass />} />
            <Route path="/contents/spider" element={<Spider />} />
            <Route path="/contents/snake" element={<Snake />} />
            <Route path="/contents/smallPuppy" element={<SmallPuppy />} />
            <Route path="/contents/human" element={<Human />} />
            <Route path="/contents/security" element={<Security />} />
            <Route path="/contents/logistics" element={<Logistics />} />
            <Route path="/contents/securityDog" element={<SecurityDog />} />
            <Route path="/contents/yolo" element={<Yolo />} />
            <Route path="/contents/deepLearning" element={<DeepLearning />} />
            <Route
              path="/contents/reinforcementLearning"
              element={<ReinforcementLearning />}
            />
            <Route path="/contents/printer" element={<Printer />} />
            <Route path="/contents/plc" element={<Plc />} />
            <Route path="/contents/kicad" element={<Kicad />} />
            <Route path="/contents/embedded" element={<Embedded />} />
            <Route path="/contents/ros2" element={<Ros2 />} />
            <Route path="/contents/manipulator" element={<Manipulator />} />
          </Routes>
          <Footer />
        </RecoilRoot>
      </HelmetProvider>
    </BrowserRouter>
  );
};
