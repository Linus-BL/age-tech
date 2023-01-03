import React from 'react';
import AdCard from './AdCard';

const ScrollableSection = ({ ads }) => {
  const sectionAds = ads;
  const sectionItems = sectionAds.map((ad) => (
    <AdCard ad={ad} key={ad.id}></AdCard>
  ));

  return <div className="scrollableSection">{sectionItems}</div>;
};

export default ScrollableSection;
