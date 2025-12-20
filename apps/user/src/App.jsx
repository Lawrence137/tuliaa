import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home';
import ChatBubble from './pages/AIChat/ChatBubble'; 
import LoginPage from './pages/Auth/LoginPage';
import SignupPage from './pages/Auth/SignupPage';
import DashboardPage from './pages/Dashboard/DashboardPage';
import UserLayout from './layouts/UserLayout';
import ConsultantsPage from './pages/Consultants/ConsultantsPage';
import BookingsPage from './pages/Booking/BookingsPage';
import ProfilePage from './pages/Profile/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        
        {/* Auth Routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* App Routes */}
        <Route element={<UserLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/consultants" element={<ConsultantsPage />} />
          <Route path="/booking" element={<BookingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chat" element={<ChatBubble />} />
          {/* Add other authenticated routes here */}
        </Route>

        {/* Public static pages */}
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
