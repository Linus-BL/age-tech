import React from 'react';
import BodyText from '../textComponents/BodyText';
import Heading5 from '../textComponents/Heading5';
import { MdCalendarToday } from 'react-icons/md';
import { MdOutlineLocationOn } from 'react-icons/md';
import { MdStarOutline } from 'react-icons/md';

const adCard = (props) => {
  return (
    <div className="adCard" onClick={props.onClickFunction}>
      <div className="adCardImgContainer">
        {' '}
        <img src={props.ad.image} alt="ad" className="adCardImage"></img>
      </div>
      <div className="textContentAd">
        <Heading5 className="title">{props.ad.title}</Heading5>
        <div className="iconText">
          {' '}
          <MdOutlineLocationOn className="icon" />{' '}
          <BodyText>{props.ad.location}</BodyText>
        </div>
        <div className="iconText">
          {' '}
          <MdCalendarToday className="icon" />{' '}
          <BodyText>{props.ad.date}</BodyText>
        </div>
        <div className="iconText">
          {' '}
          <MdStarOutline className="icon" />
          <BodyText>{props.ad.points} poäng</BodyText>
        </div>
      </div>
    </div>
  );
};

export default adCard;
