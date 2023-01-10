import React, { useEffect, useState } from 'react';
import ScrollableSection from './ScrollableSection';
import Heading3 from '../textComponents/Heading3';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { MdArrowForwardIos } from 'react-icons/md';

const CategorySection = ({ category, userId }) => {
  console.log('category', category);
  console.log('userID', userId);

  const [profilePage, setProfilePage] = useState(false);

  useEffect(() => {
    if (userId != null) {
      setProfilePage(true);
      console.log('profilePage', profilePage);
    }
  });

  return (
    <div>
      {profilePage ? (
        <div className="categoryHeading">
          <Heading3>Aktiva annonser</Heading3>
          <Link to={`/allAdsUser/${userId}`}>
            <div className="showMore">
              Visa mer <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </div>
          </Link>
        </div>
      ) : (
        <div className="categoryHeading">
          <Heading3>{category}</Heading3>
          <Link to={`/allAds/${category}`}>
            <div className="showMore">
              Visa mer <MdKeyboardArrowRight></MdKeyboardArrowRight>
            </div>
          </Link>
        </div>
      )}

      <div className="scrollableSection">
        <ScrollableSection tag={category} userId={userId}></ScrollableSection>
      </div>
    </div>
  );
};

export default CategorySection;
