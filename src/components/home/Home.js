import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';
import CategorySection from '../atomics/CategorySection';
import testImage from '../../ad_test.jpg';
import Header from './Header';
import TagSection from '../atomics/TagsSection';
import AllCategories from './AllCategories';

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

const tags = [
  { id: 1, tagName: 'Stickning' },
  { id: 2, tagName: 'Måla' },
  { id: 3, tagName: 'Motorcross' },
  { id: 4, tagName: 'Fest' },
  { id: 5, tagName: 'Snickeri' },
  { id: 6, tagName: 'Bakning' },
];

export default function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  return (
    <div className="homePage">
      <Header></Header>
      <div className="mainContent">
        <TagSection sectionTitle="Kolla in dessa" tags={tags}></TagSection>
        <CategorySection ads={ads}></CategorySection>
        <AllCategories categories={tags}></AllCategories>
      </div>
    </div>
  );
}
