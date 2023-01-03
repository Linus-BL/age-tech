import React from 'react';
import Heading3 from '../textComponents/Heading3';
import CategorySection from '../atomics/CategorySection';
import testImage from '../../ad_test.jpg';

const ads = [
  {
    id: 1,
    title: 'Baka hos mig',
    description: 'Kom och baka',
    image: testImage,
    location: 'Skultunaparken',
    date: '20 november',
    points: 23,
  },
  {
    id: 2,
    title: 'snickra hos mig',
    description: 'Kom och baka',
    image: testImage,
    location: 'Skultunaparken',
    date: '20 november',
    points: 23,
  },
  {
    id: 3,
    title: 'snickra hos mig',
    description: 'Kom och baka',
    image: testImage,
    location: 'Skultunaparken',
    date: '20 november',
    points: 23,
  },
  {
    id: 4,
    title: 'snickra hos mig',
    description: 'Kom och baka',
    image: testImage,
    location: 'Skultunaparken',
    date: '20 november',
    points: 23,
  },
];

//get ads though search-functionality later

const AllCategories = ({ categories }) => {
  const allCategories = categories.map((category) => (
    <CategorySection
      category={category.tagName}
      key={category.id}
      ads={ads}
    ></CategorySection>
  ));

  return <div>{allCategories}</div>;
};

export default AllCategories;
