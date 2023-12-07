import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../components/scrollToTop"; // 페이지 렌더링 시 스크롤 최상단
import { Foot } from "../components/foot";
import { Header } from "../components/header";
import { NotFound } from "../pages/404";
import { CreatePost } from "../pages/createPost";
import { EditPost } from "../pages/editPost";
import { HomePage } from "../pages/home";
import { Post } from "../pages/post";
import { Posts } from "../pages/posts";
import { EditUser } from "../pages/user/editUser";
import { ApplyEdu } from "../pages/applyEdu";
import { MakeNewApplication } from "../pages/makeNewApplication";
import { ShowApplication } from "../pages/showApplication";
import { ShowDetailContent } from "../pages/showDetailContent";
import { EditApplication } from "../pages/editApplication";

import { Otto } from "./../pages/educontents/otto";
import { HourGlass } from "../pages/educontents/hourGlass";
import { Spider } from "../pages/educontents/spider";
import { Snake } from "../pages/educontents/snake";
import { SmallPuppy } from "../pages/educontents/smallPuppy";
import { Human } from "../pages/educontents/human";
import { Security } from "../pages/educontents/security";
import { Logistics } from "../pages/educontents/logistics";
import { SecurityDog } from "../pages/educontents/securityDog";
import { Yolo } from "../pages/educontents/yolo";
import { DeepLearning } from "../pages/educontents/deepLearning";
import { ReinforcementLearning } from "../pages/educontents/reinforcementLearning";
import { Printer } from "./../pages/educontents/printer";
import { Plc } from "../pages/educontents/plc";
import { Kicad } from "../pages/educontents/kicad";
import { Embedded } from "../pages/educontents/embedded";
import { Ros2 } from "../pages/educontents/ros2";
import { Manipulator } from "../pages/educontents/manipulator";

export const LoggedInRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editUser" element={<EditUser />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:id/edit" element={<EditPost />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/applyEdu" element={<ApplyEdu />}></Route>
        <Route
          path="/makeNewApplication"
          element={<MakeNewApplication />}
        ></Route>
        <Route path="/showApplication" element={<ShowApplication />}></Route>
        <Route path="/editApplication" element={<EditApplication />}></Route>
        <Route
          path="/showDetailContent"
          element={<ShowDetailContent />}
        ></Route>

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
        <Route path="/reinforcementLearning" element={<ReinforcementLearning />}></Route>
        <Route path="/printer" element={<Printer />}></Route>
        <Route path="/plc" element={<Plc />}></Route>
        <Route path="/kicad" element={<Kicad />}></Route>
        <Route path="/embedded" element={<Embedded />}></Route>
        <Route path="/ros2" element={<Ros2 />}></Route>
        <Route path="/manipulator" element={<Manipulator />}></Route>
      </Routes>
      <Foot />
    </BrowserRouter>
  );
};
