import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CursorUserProfile from "./components/Cursor/CursorUserProfile";
import BubbleCursorUserProfile from "./components/bubble/BubbleCursorUserProfile";
import UserProfile from "./components/portfolio/UserProfile";

export default function App() {
  return (
    <>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursorportfolio/:id" element={<CursorUserProfile />} />
        <Route path="/bubbleportfolio/:id" element={<BubbleCursorUserProfile />} />


        <Route path="/:id" element={<UserProfile />} />

      </Routes>
    </>
  );
}
