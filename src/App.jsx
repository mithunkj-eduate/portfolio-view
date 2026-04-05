import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CursorUserProfile from "./components/Cursor/CursorUserProfile";
import BubbleCursorUserProfile from "./components/bubble/BubbleCursorUserProfile";
import UserProfile from "./components/portfolio/UserProfile";
import DevCursorUserProfile from "./components/db/DevCursorUserProfile";
import DeveloperCursorUserProfile from "./components/developer/DeveloperCursorUserProfile";
import { useContext } from "react";
import { AppContext } from "./context/context";

export default function App() {
  const { state } = useContext(AppContext);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
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

        <Route
          path="/:id"
          element={
            state.portfolioType === "cursor" ? (
              <CursorUserProfile />
            ) : state.portfolioType === "bubble" ? (
              <BubbleCursorUserProfile />
            ) : state.portfolioType === "developer" ? (
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
