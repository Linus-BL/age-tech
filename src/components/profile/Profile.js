import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { getUserAds } from '../../api/AdsApi';
import { getUserTags } from '../../api/TagsApi';

import OwnProfile from './OwnProfile';
import OtherProfile from './OtherProfile';

// Profile kollar om man besöker sin egen sida eller en annan profilsida och
// anpassar innehållet efter detta genom att rendera antingen OwnProfile eller OtherProfile

export default function Profile() {
  const [ads, setAds] = useState([]);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loadAds, setLoadAds] = useState(true);
  const [tags, setTags] = useState([]);
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
      getUserAds(currentUser.uid)
        .then((ads) => {
          setAds(ads);
          setLoadAds(false);
          console.log('currentUser', currentUser.uid);
          console.log('visit profile');
        })
        .catch((error) => console.log(error));

      getUserTags(currentUser.uid)
        .then((tags) => {
          setTags(tags);
        })
        .catch((error) => [console.log(error)]);
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
