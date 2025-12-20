import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChatBubble from './pages/AIChat/ChatBubble'; 
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        {/* The /chat route is not properly implemented, it should be a ChatInterface, not a ChatBubble */}
        <Route path="/chat" element={<ChatBubble />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

