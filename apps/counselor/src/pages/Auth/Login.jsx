import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex font-sans">
      {/* Left Panel - Branding/Welcome */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-indigo-600 to-purple-800 text-white flex-col justify-center items-center p-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome Back!</h1>
        <p className="text-xl max-w-md">Empowering you to make a difference, one session at a time.</p>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex flex-1 justify-center items-center bg-gray-50 p-6 sm:p-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 sm:p-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Sign In</h2>
          <p className="text-gray-600 mb-8 text-center">Enter your credentials to access your dashboard.</p>

          <form>
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900"
                placeholder="you@example.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-900"
                placeholder="••••••••"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-semibold text-lg hover:from-indigo-700 hover:to-purple-800 transition-all shadow-md"
            >
              Sign In
            </button>
          </form>

          <div className="flex justify-between items-center mt-6 text-sm">
            <Link to="/forgot-password" className="text-indigo-600 hover:text-indigo-800 transition-colors">Forgot password?</Link>
            <Link to="/signup" className="text-indigo-600 hover:text-indigo-800 transition-colors">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
