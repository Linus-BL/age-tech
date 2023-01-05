import React, { useEffect, useState } from 'react';
import ScrollableSection from './ScrollableSection';
import Heading3 from '../textComponents/Heading3';
import { Link } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";

const CategorySection = ({ category = 'Category Name', ads }) => {

  return (
    <div>
      <div className="categoryHeading">
        <Heading3>{category}</Heading3>
        <Link to={`/allAds/${category}`}>
          <div className="showMore">Visa mer <MdKeyboardArrowRight></MdKeyboardArrowRight></div>
        </Link>
      </div>

      <div className="scrollableSection">
        <ScrollableSection tag={category}></ScrollableSection>
      </div>
    </div>
  );
};

export default CategorySection;
