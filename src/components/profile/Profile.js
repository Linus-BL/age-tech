import React, { useState, useEffect } from 'react';
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

export default function Profile() {
  const [ads, setAds] = useState([]);
  const { logout, userData } = useAuth();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [loadAds, setLoadAds] = useState(true);
  const [tags, setTags] = useState([]);

  // kod som kollar om man själv är current User
  //hämta egna ads
  useEffect(() => {
    try {
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
      navigate('/login');
    } catch (error) {
      console.log(error.code + error.message);
    }
  }

  return (
    <div className="profilePage">
      <div className="nameAndPicture">
        <img className="profilePicture" src={testImage}></img>
        <Heading1>
          {userData.name} {userData.surname}{' '}
        </Heading1>
      </div>
      <div className="profileShortInfo">
        <Heading5>{userData.age} år </Heading5>
        <Heading5>
          <MdOutlineLocationOn /> {userData.city}
        </Heading5>
      </div>
      {tags && <TagsSection tags={tags}></TagsSection>}
      <BodyText>{userData.bio}</BodyText>
      {!loadAds && (
        <CategorySection
          ads={ads}
          category="Aktuella annonser"
        ></CategorySection>
      )}
      <strong>Email:</strong> {userData.email}
      <Link to="/updateProfile">Update profile</Link>
      <button className="button" onClick={handleLogout}>
        Log out{' '}
      </button>
      <div className="buttonSticky">
        {' '}
        <Button className="buttonSticky">Kontakta annonsör</Button>
      </div>
    </div>
  );
}
