import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CursorUserProfile from "./components/Cursor/CursorUserProfile";
import BubbleCursorUserProfile from "./components/bubble/BubbleCursorUserProfile";
import UserProfile from "./components/portfolio/UserProfile";
import DevCursorUserProfile from "./components/db/DevCursorUserProfile";
import DeveloperCursorUserProfile from "./components/developer/DeveloperCursorUserProfile";
import { useContext } from "react";
import { AppContext } from "./context/context";
import PreviewPage from "./components/apps/PreviewPage";
import ProfessionalUserProfile from "./components/professional/ProfessionalUserProfile";
import FarmerUserProfile from "./components/farmer/FarmerUserProfile";
import { PortfolioType } from "./utly/constants";
import StudentUserProfile from "./components/student/StudentUserProfile";
import AiPreviewPage from "./components/ai/AiPreviewPage";

export default function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/professional/:id" element={<ProfessionalUserProfile />} />
        <Route path="/farmer/:id" element={<FarmerUserProfile />} />

        <Route path="/cursorportfolio/:id" element={<CursorUserProfile />} />
        <Route
          path="/bubbleportfolio/:id"
          element={<BubbleCursorUserProfile />}
        />
        <Route path="/devportfolio/:id" element={<DevCursorUserProfile />} />
        <Route
          path="/developerportfolio/:id"
          element={<DeveloperCursorUserProfile />}
        />

        <Route path="/apps/ai/:appId" element={<AiPreviewPage />} />

        <Route path="/apps/:appId" element={<PreviewPage />} />

        <Route path="/student/:id" element={<StudentUserProfile />} />

        <Route
          path="/:id"
          element={
            state.portfolioType === PortfolioType.CURSOR ? (
              <CursorUserProfile />
            ) : state.portfolioType === PortfolioType.BUBBLE ? (
              <BubbleCursorUserProfile />
            ) : state.portfolioType === PortfolioType.DEVELOPER ? (
              <DeveloperCursorUserProfile />
            ) : (
              <UserProfile />
            )
          }
        />
      </Routes>
    </>
  );
}
