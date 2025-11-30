import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserLayout from "./layouts/UserLayout";
import Home from "./pages/Home/Home";
import ChatBubble from "./pages/AIChat/ChatBubble"; 
// ⬆ you should move your ChatInterface component into a separate folder
//    /pages/Chat/ChatInterface.jsx

function App() {
  return (
    <BrowserRouter>
      <UserLayout>
        <Routes>

          {/* Homepage */}
          <Route path="/" element={<Home />} />

          {/* AI Chat */}
          <Route path="/chat" element={<ChatBubble />} />

          {/* Future user features */}
          {/* 
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/library" element={<Library />} />
          <Route path="/assessments" element={<Assessments />} />
          <Route path="/groups" element={<GroupTherapy />} />
          */}

        </Routes>
      </UserLayout>
    </BrowserRouter>
  );
}

export default App;
