import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';

import OwnProfile from './OwnProfile';
import OtherProfile from './OtherProfile';

// Profile kollar om man besöker sin egen sida eller en annan profilsida och
// anpassar innehållet efter detta genom att rendera antingen OwnProfile eller OtherProfile

export default function Profile() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const params = useParams();
  const { userId } = params;
  const [ownProfile, setOwnProfile] = useState();

  useEffect(() => {
    console.log('UserID', userId);
    try {
      if (userId === currentUser.uid) {
        console.log(' UserId ', userId);
        console.log(' currentUser ', currentUser.uid);
        setOwnProfile(true);
      }
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <>
      {ownProfile ? (
        <OwnProfile></OwnProfile>
      ) : (
        <OtherProfile userId={userId}></OtherProfile>
      )}
    </>
  );
}
