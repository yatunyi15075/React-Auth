import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  console.log('ProtectedRoute check:', token); // Debugging line

  return token ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
