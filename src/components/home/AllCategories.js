import React, { useState, useEffect } from 'react';
import CategorySection from '../atomics/CategorySection';
import testImage from '../../ad_test.jpg';
import { get5AdsByTag } from '../../api/AdsApi';

//get ads though search-functionality later

const AllCategories = ({ads, categories }) => {
  const allCategories = categories.map((category) => (
    
    <CategorySection
      category={category.name}
      key={category.id}
      ></CategorySection>
  ));

  return <div>{allCategories}</div>;
};

export default AllCategories;
