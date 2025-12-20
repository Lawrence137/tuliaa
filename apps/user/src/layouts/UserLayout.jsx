import React from "react";
import { Link, useLocation, Outlet } from 'react-router-dom';
import { HomeIcon, UserGroupIcon, CalendarDaysIcon, ChatBubbleLeftRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';


const NavLink = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link to={to} className={`group relative font-medium transition ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}`}>
            {children}
            <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
        </Link>
    );
};

const MobileNavLink = ({ to, icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <Link to={to} className={`flex flex-col items-center transition-colors w-full ${isActive ? 'text-blue-600' : 'text-gray-600 hover:text-blue-500'}`}>
             {React.cloneElement(icon, { className: "w-6 h-6 mb-1" })}
            <span className="text-xs font-medium">{children}</span>
        </Link>
    );
};


const UserLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-800">
      
      {/* Header */}
      <header className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo + Title */}
            <Link to="/dashboard" className="flex items-center space-x-3">
              <div className="p-2 rounded-xl bg-blue-100">
                <svg
                  className="w-7 h-7 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
                Tulia
              </h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <NavLink to="/dashboard">Dashboard</NavLink>
              <NavLink to="/consultants">Consultants</NavLink>
              <NavLink to="/booking">My Bookings</NavLink>
              <NavLink to="/chat">AI Chat</NavLink>
              <NavLink to="/profile">Profile</NavLink>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-3 rounded-lg text-gray-700 hover:bg-gray-100 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="animate-fadeIn">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 shadow-inner mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
          <p>Tulia — Supporting mental wellness across the TEP ecosystem.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Tuliaa. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-2 flex justify-around z-40">
        <MobileNavLink to="/dashboard" icon={<HomeIcon />}>Dashboard</MobileNavLink>
        <MobileNavLink to="/consultants" icon={<UserGroupIcon />}>Consultants</MobileNavLink>
        <MobileNavLink to="/booking" icon={<CalendarDaysIcon />}>Bookings</MobileNavLink>
        <MobileNavLink to="/chat" icon={<ChatBubbleLeftRightIcon />}>AI Chat</MobileNavLink>
        <MobileNavLink to="/profile" icon={<UserCircleIcon />}>Profile</MobileNavLink>
      </nav>

    </div>
  );
};

export default UserLayout;
