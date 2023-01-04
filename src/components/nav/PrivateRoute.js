import { Outlet, /*useNavigate,*/ Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import React, { useContext, useEffect, useState } from 'react';

export default function PrivateRoute() {
  const { currentUser } = useAuth();

  return currentUser  ? <Outlet /> : <Navigate to="/" />;
}
