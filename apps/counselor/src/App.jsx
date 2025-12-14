import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import CounselorDashboard from './pages/Dashboard/CounselorDashboard';
import CalendarPage from './pages/Calendar/CalendarPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Placeholder for other routes */}
        <Route path="/dashboard" element={<CounselorDashboard />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
        <Route path="/signup" element={<div>Sign Up Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
