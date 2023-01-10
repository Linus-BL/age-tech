import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Heading1 from '../textComponents/Heading1';
import Heading5 from '../textComponents/Heading5';
import { MdOutlineLocationOn } from 'react-icons/md';
import TagsSection from '../atomics/TagsSection';
import BodyText from '../textComponents/BodyText';
import CategorySection from '../atomics/CategorySection';
import testImage from '../../ad_test.jpg';
import Button from '../atomics/Button';
import { getUserAds } from '../../api/AdsApi';
import { getUserTags } from '../../api/TagsApi';
import { getUserData } from '../../api/userApi';
import OwnProfile from './OwnProfile';
import OtherProfile from './OtherProfile';

export default function Profile() {
  const [ads, setAds] = useState([]);
  const { logout, userData } = useAuth();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loadAds, setLoadAds] = useState(true);
  const [tags, setTags] = useState([]);
  const params = useParams();
  const { userId } = params;
  const [ownProfile, setOwnProfile] = useState();

  // kod som kollar om man själv är current User
  //hämta egna ads
  useEffect(() => {
    console.log('UserID', userId);
    try {
      if (userId == currentUser.uid) {
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
    <>
      {ownProfile ? (
        <OwnProfile></OwnProfile>
      ) : (
        <OtherProfile userId={userId}></OtherProfile>
      )}
    </>
  );
}
