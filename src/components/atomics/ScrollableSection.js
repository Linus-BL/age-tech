import React, { useState, useEffect } from 'react';
import AdCard from './AdCard';
import { get5OffersByTag, get5RequestsByTag } from '../../api/AdsApi';
import { getUserAds } from '../../api/AdsApi';

const ScrollableSection = ({ active, tag, userId }) => {
  const [showAds, setAds] = useState([]);

  useEffect(() => {
    if (active === 'adOffer') {
      get5OffersByTag(tag)
        .then((ads) => {
          setAds(ads);
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (active === 'adRequest') {
      console.log('request');
      get5RequestsByTag(tag)
        .then((ads) => {
          setAds(ads);
        })
        .catch((e) => {
          console.log(e);
        });
    }

    if (userId != null) {
      getUserAds(userId)
        .then((ads) => {
          setAds(ads);
        })
        .catch((error) => console.log(error));
    }
  }, [active]);

  return (
    <div className="scrollableSection">
      {showAds &&
        showAds.map((ad) => (
          <AdCard ad={ad.ad} id={ad.id} key={ad.id}></AdCard>
        ))}
    </div>
  );
};

export default ScrollableSection;
