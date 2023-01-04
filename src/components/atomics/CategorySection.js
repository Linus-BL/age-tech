import React, { useEffect, useState } from 'react';
import ScrollableSection from './ScrollableSection';
import Heading3 from '../textComponents/Heading3';
import { MdArrowForwardIos } from "react-icons/md";

const CategorySection = ({ category = 'Category Name', ads }) => {

  return (
    <div>
      <div className="categoryHeading">
        <Heading3>{category}</Heading3>
        <div>Visa mer <MdArrowForwardIos/></div>
      </div>

      <div className="scrollableSection">
        <ScrollableSection tag={category}></ScrollableSection>
      </div>
    </div>
  );
};

export default CategorySection;
