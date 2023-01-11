import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BodyText from '../textComponents/BodyText';
import Heading1 from '../textComponents/Heading1';
import { MdCalendarToday } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdAccessTime } from 'react-icons/md';
import { MdStarOutline } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Button from './Button';
import Heading5 from '../textComponents/Heading5';
import Heading4 from '../textComponents/Heading4';
import { getAdById } from '../../api/AdsApi';
import BackButton from '../atomics/BackButton';
import { getUserData } from '../../api/userApi';
import TagSection from './TagsSection';
import { getSpecificTag } from '../../api/TagsApi';
const adOpen = () => {
  //takes in one ad object though props
  const [ad, setAd] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [creator, setCreator] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      getAdById(id)
        .then((ad) => {
          setAd(ad);
          getUserData(ad.creator)
            .then((creator) => {
              setCreator(creator);
            })
            .catch((error) => {
              console.log('Error', error);
            });
        })
        .catch((error) => {
          console.log('Error', error);
        });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    console.log('andra userEFfektiv körs');

    if (!loading) {
      console.log('ad', ad);
      ad.tags.forEach((tag) => {
        getSpecificTag(tag).then((tagObj) => {
          setTags((tags) => [...tags, tagObj]);
        });
      });
    }
  }, [ad]);

  return (
    <div className="adOpen">
      <div className="openedAdImgContainer">
        <BackButton onImage={true}></BackButton>
        <img src={ad.imageUrl} alt="ad" className="adCardImageOpened"></img>
      </div>

      <div className="informationContentAd">
        <div className="titleAndPoints">
          <Heading1 className="title">{ad.titel}</Heading1>
          <div className="iconText">
            <MdStarOutline className="icon" />
            <BodyText>{ad.compensation} poäng</BodyText>
          </div>
        </div>
        <BodyText>{ad.description}</BodyText>
        {/* get profile and use data from there */}
        <div className="creatorSection">
          <img
            className="profilePicture"
            src={creator.profilePicture}
            alt="profile picture"
          ></img>

          <Link className="creator" to={`/profile/${ad.creator}`}>
            <Heading4>
              {creator.name} {creator.surname}
            </Heading4>
          </Link>
        </div>
        <Link to={`/ad/${id}`}>
          <Button>Kontakta annonsör</Button>
        </Link>
        <div className="shortInfoSection">
          <div className="iconText">
            {' '}
            <MdOutlineLocationOn className="icon" />
            <Heading5>Plats</Heading5>
          </div>
          <BodyText>{ad.place}</BodyText>
          <div className="iconText">
            {' '}
            <MdCalendarToday className="icon" /> <Heading5>Datum</Heading5>
          </div>
          <BodyText>{ad.date}</BodyText>
          <div className="iconText">
            <MdAccessTime className="icon" />
            <Heading5>Tid</Heading5>
          </div>
          <BodyText>{ad.time}</BodyText>
        </div>
        <TagSection tags={tags} sectionTitle=""></TagSection>
      </div>
    </div>
  );
};

export default adOpen;
