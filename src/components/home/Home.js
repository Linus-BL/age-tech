import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { MdOutlineLocationOn } from 'react-icons/md';
import CategorySection from '../atomics/CategorySection';
import testImage from '../../ad_test.jpg';
import Header from './Header';
import TagSection from '../atomics/TagsSection';
import AllCategories from './AllCategories';
import { getAllAds } from '../../api/AdsApi';
import { getAllTags } from '../../api/TagsApi';
import { getAdById } from '../../api/AdsApi';

export default function Home() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [ads, setAds] = useState([]);
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      getAllAds()
        .then((ads) => {
          setAds(ads);
        })
        .catch((error) => {
          console.log('Error', error);
        });

      getAllTags()
        .then((tags) => {
          setTags(tags);
          console.log('TAGS ', tags);
        })
        .catch((error) => {
          console.log(error);
        });

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="homePage">
      <Header></Header>
      {!loading && (
        <div className="mainContent">
          <TagSection sectionTitle="Kolla in dessa" tags={tags}></TagSection>
          <AllCategories ads={ads} categories={tags}></AllCategories>
        </div>
      )}
    </div>
  );
}
