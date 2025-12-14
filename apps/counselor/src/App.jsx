import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';
import CounselorDashboard from './pages/Dashboard/CounselorDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Placeholder for other routes */}
        <Route path="/dashboard" element={<CounselorDashboard />} />
        <Route path="/forgot-password" element={<div>Forgot Password Page</div>} />
        <Route path="/signup" element={<div>Sign Up Page</div>} />
      </Routes>
    </Router>
  );
}

export default App;
