import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import SwitchButton from '../atomics/switchButton';
import Navbar from '../nav/Navbar';

export default function Dashboard() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  async function handleLogout(e) {
    e.preventDefault();

    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.log(error.code + error.message);
    }
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <strong>Email:</strong> {currentUser.email}
      <strong>Email:</strong> {currentUser.uid}
      <Link to="/updateProfile">Update profile</Link>
      <button className="" onClick={handleLogout}>
        Log out{' '}
      </button>
      <Navbar />
    </div>
  );
}
