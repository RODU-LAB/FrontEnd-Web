import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from "react-helmet-async";

import "./index.css";

import "./styles/postsStyles.css";
import "./styles/postStyles.css";
import "./styles/modalStyles.css";
import "./styles/makeNewApplication.css";
import "./styles/retrieveStyles.css";

// import { Header } from "./components/header";
// import { Footer } from "./components/footer";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/404";
import { UpdatePost } from "./pages/post/UpdatePost";
import { DetailPost } from "./pages/post/DetailPost";
import { Community } from "./pages/post/Community";
import { EduServiceOptions } from "./pages/education/EduServiceOptions";
import { EduUpdateApplication } from "./pages/education/EduUpdateApplication";
import { EduApplicationHistory } from "./pages/education/EduApplicationHistory";
import { Contents } from "./pages/Contents";
import { Login } from "./pages/Login";
import { DetailContent } from "./pages/DetailContent";

export default function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <RecoilRoot>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contents" element={<Contents />} />

            <Route path="/post/updatepost" element={<UpdatePost />} />
            <Route path="/community" element={<Community />} />
            <Route path="/post" element={<DetailPost />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/education" element={<EduServiceOptions />} />
            <Route
              path="/education/update-application"
              element={<EduUpdateApplication />}
            />
            <Route
              path="/education/history"
              element={<EduApplicationHistory />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/contents/:contentType" element={<DetailContent />} />
          </Routes>
          <Footer />
        </RecoilRoot>
      </HelmetProvider>
    </BrowserRouter>
  );
}
