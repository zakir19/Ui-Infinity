import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { usePageTitle } from '../hooks/usePageTitle';

const NotFound = () => {
  usePageTitle('Page Not Found');
  
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-pink-900 text-white">
      <div className="text-center">
        <div className="mb-8">
          <div className="relative h-24 w-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center text-white font-black text-2xl">404</div>
          </div>
        </div>
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
