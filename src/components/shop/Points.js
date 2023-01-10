import React from 'react';
import Heading4 from '../textComponents/Heading4';
import { MdStarOutline } from 'react-icons/md';

const PointsSection = (props) => {
  return (
    <div className="pointsSection">
      <Heading4 className="title">Dina poäng</Heading4>
      <div className="points">
        {' '}
        <MdStarOutline className="iconPoints" />
        <Heading4>{props.user.points} poäng</Heading4>
      </div>
    </div>
  );
};

export default PointsSection;
