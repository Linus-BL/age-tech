import React, { useState, useEffect } from 'react';
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
import TagSection from '../atomics/TagsSection';
import BackButton from '../atomics/BackButton';

const adOpen = () => {
  //takes in one ad object though props
  const [ad, setAd] = useState([]);
  const [loading, setLoading] = useState();
  const params = useParams();
  const { id } = params;

  console.log('id from params ', id);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      getAdById(id)
        .then((ad) => {
          setAd(ad);
          console.log('AD', ad);
        })
        .catch((error) => {
          console.log('Error', error);
        });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

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
          <div className="profilePicture"></div>
          <Heading4>{ad.creator}</Heading4>
        </div>
        <Button>Kontakta annonsör</Button>
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
            <MdAccessTime />
            <Heading5>Tid</Heading5>
          </div>
          <BodyText>{ad.time}</BodyText>
        </div>
        {/* <TagSection tags={ad.tags}></TagSection> */}
      </div>
    </div>
  );
};

export default adOpen;
