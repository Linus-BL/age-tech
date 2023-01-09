import React, { useState, useEffect } from 'react';
import AdCard from './AdCard';
import { get5AdsByTag } from '../../api/AdsApi';

const ScrollableSection = ({ tag }) => {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    get5AdsByTag(tag)
      .then((ads) => {
        setAds(ads);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const sectionAds = ads;
  const sectionItems = sectionAds.map((ad) => (
    <AdCard ad={ad.ad} id={ad.id} key={ad.id}></AdCard>
  ));

  return <div className="scrollableSection">{sectionItems}</div>;
};

export default ScrollableSection;
