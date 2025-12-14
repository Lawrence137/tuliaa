import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Icon = ({ name, className }) => {
    const icons = {
        menu: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />,
        close: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />,
        dashboard: <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />,
        calendar: <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
        video: <path d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />,
        billing: <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />,
        notes: <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
        settings: <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065zM10 13a3 3 0 100-6 3 3 0 000 6z" />,
        logout: <path d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />,
        notification: <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />,
    };
    return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">{icons[name]}</svg>;
};

const NavLink = ({ to, icon, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    
    return (
        <li className="mb-2">
            <Link 
                to={to} 
                className={`flex items-center p-3 rounded-lg transition-colors ${isActive ? 'bg-purple-800 bg-opacity-50 text-white' : 'hover:bg-purple-800 hover:bg-opacity-50'}`}
            >
                <Icon name={icon} className="w-6 h-6 mr-3" />
                {children}
            </Link>
        </li>
    );
};

const CounselorLayout = ({ children, pageTitle, pageSubTitle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = {
    name: 'Dr. Evelyn Reed',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  };

  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      {isMenuOpen && <div className="fixed inset-0 bg-black opacity-50 z-20 lg:hidden" onClick={() => setIsMenuOpen(false)}></div>}

      <aside className={`fixed inset-y-0 left-0 w-64 bg-gradient-to-br from-indigo-700 to-purple-900 text-white flex flex-col transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-30`}>
        <div className="p-6 text-center border-b border-purple-800">
          <h1 className="text-2xl font-bold">Tulia</h1>
          <p className="text-sm text-indigo-200">Counselor Portal</p>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <NavLink to="/dashboard" icon="dashboard">Dashboard</NavLink>
            <NavLink to="/calendar" icon="calendar">Calendar</NavLink>
            <NavLink to="/sessions" icon="video">Sessions</NavLink>
            <NavLink to="/billing" icon="billing">Billing</NavLink>
            <NavLink to="/notes" icon="notes">Notes</NavLink>
          </ul>
        </nav>
        <div className="p-4 border-t border-purple-800">
          <NavLink to="/settings" icon="settings">Settings</NavLink>
          <NavLink to="/" icon="logout">Logout</NavLink>
        </div>
      </aside>

      <main className="flex-1 p-6 lg:p-10">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center">
            <button className="lg:hidden text-gray-500 hover:text-gray-700 mr-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Icon name={isMenuOpen ? "close" : "menu"} className="w-6 h-6" />
            </button>
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800">{pageTitle}</h2>
              <p className="text-gray-600 hidden sm:block">{pageSubTitle}</p>
            </div>
          </div>
          <div className="flex items-center">
            <button className="mr-4 relative">
                <Icon name="notification" className="w-6 h-6 text-gray-500 hover:text-gray-700"/>
                <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
            </button>
            <img src={user.avatar} alt="User Avatar" className="w-10 h-10 lg:w-12 lg:h-12 rounded-full" />
          </div>
        </header>
        
        {children}
        
      </main>
    </div>
  );
};

export default CounselorLayout;
