import React, { useState, useEffect } from 'react';
import AdCard from './AdCard';
import { get5AdsByTag } from '../../api/AdsApi';
import { getUserAds } from '../../api/AdsApi';

const ScrollableSection = ({ tag, userId }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (tag != null) {
      get5AdsByTag(tag)
        .then((ads) => {
          setAds(ads);
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (userId != null) {
      getUserAds(userId)
        .then((ads) => {
          setAds(ads);
        })
        .catch((error) => console.log(error));
    }
  }, []);

  const sectionAds = ads;
  const sectionItems = sectionAds.map((ad) => (
    <AdCard ad={ad.ad} id={ad.id} key={ad.id}></AdCard>
  ));

  return <div className="scrollableSection">{sectionItems}</div>;
};

export default ScrollableSection;
