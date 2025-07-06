import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthPages from './pages/authpage';
import Dashboard from './pages/dashboard';
import Leaderboard from './pages/Leaderboard';
import UsernameManagementPage from './pages/username_management';
import CoursePage from './pages/cp_sheets/pages/course_page';

// Define all application routes here
const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthPages />,
    errorElement: <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white p-6">
      <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-xl border border-gray-700/50 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-red-400">Page not found</h1>
        <p className="mb-6 text-gray-300">The page you're looking for doesn't exist or you don't have permission to access it.</p>
        <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg inline-block">Return to home page</a>
      </div>
    </div>
  },
  {
    path: '/dashboard/:email',
    element: <Dashboard />
  },
  {
    path: '/leaderboard',
    element: <Leaderboard />
  },
  {
    path: '/usernames/:email',
    element: <UsernameManagementPage />
  },
  {
    path: '/cp-sheets',
    element: <CoursePage />
  },
  // Add aliases for backward compatibility
  {
    path: '/contests',
    element: <CoursePage />
  }
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
