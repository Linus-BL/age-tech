import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

import Heading1 from '../textComponents/Heading1';
import Heading3 from '../textComponents/Heading3';
import Heading5 from '../textComponents/Heading5';
import TagsSection from '../atomics/TagsSection';
import BodyText from '../textComponents/BodyText';
import CategorySection from '../atomics/CategorySection';

import { MdOutlineLocationOn } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

import { getUserAds } from '../../api/AdsApi';
import { getUserTags } from '../../api/TagsApi';
import { getUserData } from '../../api/userApi';

export default function OwnProfile() {
  const { logout, userData } = useAuth();

  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loadAds, setLoadAds] = useState(true);
  const params = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [ads, setAds] = useState([]);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    try {
      getUserData(currentUser.uid)
        .then((userInfo) => {
          setUserInfo(userInfo);
        })
        .catch((error) => {
          console.log('Error', error);
        });
      getUserAds(currentUser.uid)
        .then((ads) => {
          setAds(ads);
          setLoadAds(false);
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
      navigate('/');
    } catch (error) {
      console.log(error.code + error.message);
    }
  }

  return (
    <div className="profilePage">
      <div className="nameAndPicture">
        <img className="profilePicture" src={userInfo.profilePicture}></img>
        <Heading1>
          {userInfo.name} {userInfo.surname}{' '}
        </Heading1>
      </div>
      <div className="profileShortInfo">
        <Heading5>{userInfo.age} år </Heading5>
        <Heading5>
          <MdOutlineLocationOn /> {userInfo.city}
        </Heading5>
      </div>
      {tags && <TagsSection tags={tags}></TagsSection>}
      <BodyText>{userData.bio}</BodyText>
      {!loadAds && (
        <CategorySection ads={ads} userId={currentUser.uid}></CategorySection>
      )}
      <Heading3>Konto</Heading3>
      <Heading5>Dina poäng: {userInfo.points}</Heading5>
      <div className="settingsLinks">
        <BodyText>Tidigare annonser </BodyText>
        <MdKeyboardArrowRight />
      </div>
      <Link to="/updateProfile" className="settingsLinks">
        <BodyText>Redigera profil</BodyText>
        <MdKeyboardArrowRight />
      </Link>
      <Heading3>Applikation</Heading3>
      <div className="settingsLinks">
        <BodyText>Inställningar </BodyText> <MdKeyboardArrowRight />
      </div>
      <div className="settingsLinks">
        <BodyText>Support </BodyText> <MdKeyboardArrowRight />
      </div>
      <div className="settingsLinks">
        <BodyText>Hjälpsidor </BodyText> <MdKeyboardArrowRight />
      </div>
      <div className="settingsLinks" onClick={handleLogout}>
        <BodyText>Logga ut </BodyText> <MdKeyboardArrowRight />
      </div>
    </div>
  );
}
