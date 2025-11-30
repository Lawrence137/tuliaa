import React from "react";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-gray-50 text-gray-800">
      
      {/* Header */}
      <header className="backdrop-blur-md bg-white/70 border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            
            {/* Logo + Title */}
            <div className="flex items-center space-x-3">
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
                Tuliaa
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a className="group relative text-gray-700 hover:text-blue-600 font-medium transition">
                Dashboard
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a className="group relative text-gray-700 hover:text-blue-600 font-medium transition">
                Consultants
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>

              <a className="group relative text-blue-600 font-semibold transition">
                AI Chat
                <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600"></span>
              </a>

              <a className="group relative text-gray-700 hover:text-blue-600 font-medium transition">
                Profile
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
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
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-fadeIn">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 shadow-inner mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-gray-500 text-sm">
          <p>Tuliaa — Supporting mental wellness across the TEP ecosystem.</p>
          <p className="mt-1">&copy; {new Date().getFullYear()} Tuliaa. All rights reserved.</p>
        </div>
      </footer>

      {/* Optional mobile bottom nav */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg py-3 flex justify-around z-40">
        <a className="flex flex-col items-center text-blue-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          <span className="text-xs font-medium">Dashboard</span>
        </a>
        <a className="flex flex-col items-center text-gray-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0" />
          </svg>
          <span className="text-xs font-medium">Consultants</span>
        </a>
        <a className="flex flex-col items-center text-gray-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-8.5L12 3 3 11.5 12 20z" />
          </svg>
          <span className="text-xs font-medium">AI Chat</span>
        </a>
        <a className="flex flex-col items-center text-gray-600">
          <svg className="w-6 h-6 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 15c2.21 0 4.305.476 6.121 1.804M12 12a4 4 0 100-8 4 4 0 000 8z" />
          </svg>
          <span className="text-xs font-medium">Profile</span>
        </a>
      </nav>

    </div>
  );
};

export default UserLayout;
