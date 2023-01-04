import React, { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { logout, getUserData, userData } = useAuth();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  useEffect(()=>{
    try{
       getUserData();
    } catch(error){
      console.log(error)
    }
    
  },[])

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
      {userData && <p>{JSON.stringify(userData)}</p>}
      <strong>Email:</strong> {currentUser.email}
      <strong>Email:</strong> {currentUser.uid}
      <Link to="/updateProfile">Update profile</Link>
      <button className="" onClick={handleLogout}>
        Log out{' '}
      </button>
    </div>
  );
}
