import React, { useEffect, useState } from 'react';
import AdCard from '../atomics/AdCard';
import Heading1 from '../textComponents/Heading1';
import { useParams } from 'react-router-dom';
import { getAllAdsByTag } from '../../api/AdsApi';
import BackButton from '../atomics/BackButton';

const AllAdsByCategory = () => {
  const params = useParams();
  const { tagName } = params;
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    try {
      getAllAdsByTag(tagName)
        .then((ads) => {
          setAds(ads);
        })
        .catch((error) => {
          console.log('Error', error);
        });
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  const adsToshow = ads.map((ad) => (
    <AdCard ad={ad.ad} id={ad.id} key={ad.id}></AdCard>
  ));

  return (
    <div className="background">
      <div className="headerAllAds">
        <BackButton black={true}></BackButton>
        <div className="heading">
          {' '}
          <Heading1>{tagName}</Heading1>
        </div>
      </div>

      {!loading && <div className="AdsByCategory">{adsToshow}</div>}
    </div>
  );
};

export default AllAdsByCategory;
