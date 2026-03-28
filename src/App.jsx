import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CursorUserProfile from "./components/Cursor/CursorUserProfile";
import BubbleCursorUserProfile from "./components/bubble/BubbleCursorUserProfile";
import UserProfile from "./components/portfolio/UserProfile";
import DevCursorUserProfile from "./components/db/DevCursorUserProfile";
import DeveloperCursorUserProfile from "./components/developer/DeveloperCursorUserProfile";

export default function App() {
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

        <Route path="/:id" element={<UserProfile />} />
      </Routes>
    </>
  );
}
