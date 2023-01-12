import React, { useState, useEffect } from 'react';
import Heading1 from '../textComponents/Heading1';
import Heading5 from '../textComponents/Heading5';
import { MdOutlineLocationOn } from 'react-icons/md';
import TagsSection from '../atomics/TagsSection';
import BodyText from '../textComponents/BodyText';
import CategorySection from '../atomics/CategorySection';
import Button from '../atomics/Button';
import { getUserAds } from '../../api/AdsApi';
import { getSpecificTag } from '../../api/TagsApi';
import { getUserData } from '../../api/userApi';
import { useNavigate } from 'react-router-dom';

export default function OtherProfile(userId) {
  const [loadAds, setLoadAds] = useState(true);
  const [userID, setUserID] = useState(userId);
  const [tags, setTags] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [ads, setAds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      getUserData(userId.userId)
        .then((userData) => {
          setUserInfo(userData);
        })
        .catch((error) => {
          console.log('Error', error);
        });
      getUserAds(userId.userId)
        .then((ads) => {
          setAds(ads);
          setLoadAds(false);
        })
        .catch((error) => console.log(error));
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    if (!loadAds && userInfo.tags) {
      userInfo.tags.forEach((tag) => {
        getSpecificTag(tag)
          .then((tagObj) => {
            if (!tags.some((tags) => tags.id == tagObj.id)) {
              setTags((tags) => [...tags, tagObj]);
            }
          })
          .catch((error) => [console.log(error)]);
      });
    }
  }, [userInfo]);

  function handleOnClick() {
    console.log('hej');
    navigate('/privateChat');
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
      <BodyText>{userInfo.bio}</BodyText>
      {!loadAds && (
        <CategorySection ads={ads} userId={userId.userId}></CategorySection>
      )}

      <div className="buttonSticky" onClick={handleOnClick}>
        {' '}
        <Button className="buttonSticky">Kontakta annonsör</Button>
      </div>
    </div>
  );
}
