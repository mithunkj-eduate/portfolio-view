import "./styles.css";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Home from "./Home";

export default function App() {
  return (
    <>

    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<UserProfile />} />
      </Routes>
    </>
  );
}
