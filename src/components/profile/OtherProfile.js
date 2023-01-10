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

export default function OtherProfile(userId) {
  const [loadAds, setLoadAds] = useState(true);
  const [tags, setTags] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    console.log('UserID', userId);
    try {
      getUserData(userId.userId)
        .then((userData) => {
          console.log('user Data ', userData);
          setUserInfo(userData);
        })
        .catch((error) => {
          console.log('Error', error);
        });
      getUserAds(userId.userId)
        .then((ads) => {
          setAds(ads);
          setLoadAds(false);
          console.log('ads', ads);
        })
        .catch((error) => console.log(error));

      getUserTags(userId)
        .then((tags) => {
          setTags(tags);
        })
        .catch((error) => [console.log(error)]);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="profilePage">
      <div className="nameAndPicture">
        <img className="profilePicture" src={testImage}></img>
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
      <BodyText>{userInfo.bio}</BodyText>
      {!loadAds && (
        <CategorySection ads={ads} userId={userId.userId}></CategorySection>
      )}

      <div className="buttonSticky">
        {' '}
        <Button className="buttonSticky">Kontakta annonsör</Button>
      </div>
    </div>
  );
}
