import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const isAuth = window.localStorage.getItem('credentials')
  if (!isAuth) {
    return <Navigate to="/" replace />; // Redirect to login on unauthorized access
  }

  return children; // Render child component if authorized
};

export default ProtectedRoute;
