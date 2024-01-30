// 404Page.jsx

import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-2xl text-gray-600 mb-8">Page not found</p>
        <a
          href="/"
          className="text-lg text-blue-500 hover:underline"
        >
          Go back to home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;
