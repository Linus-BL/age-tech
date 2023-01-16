import React from 'react';
import { useState, useEffect } from 'react';
import Header from './Header';
import TagSection from '../atomics/TagsSection';
import AllCategories from './AllCategories';
import { getAllTags, getSpecificTag } from '../../api/TagsApi';
import SwitchButton from '../atomics/switchButton';

export default function Home() {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [active, setActive] = useState('adOffer');
  const [checkoutTags, setCheckoutTags] = useState([]);

  // function to get random tags. Recursive to repeat randomization in case tag alreade has been randomized.
  function getRandomTags(i, randomTags) {
    randomTags = [];
    let n = tags.length;
    while (i > 0) {
      let random = Math.floor(Math.random() * n);
      let tag = tags[random];
      if (randomTags.some((t) => t.id == tag.id)) {
        getRandomTags(i, randomTags);
      } else {
        i--;
        randomTags.push(tag);
      }
    }
    return randomTags;
  }

  useEffect(() => {
    try {
      getAllTags()
        .then((tags) => {
          setTags(tags);
        })
        .catch((error) => {
          console.log(error);
        });
      //getRandomTags();

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);

  // set random tags
  useEffect(() => {
    if (!loading) {
      let tags = [];
      setCheckoutTags(getRandomTags(5, tags));
    }
  }, [tags]);

  const switchData = {
    buttonOne: 'Erbjudanden',
    buttonTwo: 'Förfrågnigar',
    buttonOneNavigation: '/home',
    buttonTwoNavigation: '/home',
    activeButton: 'buttonOne',
  };

  function updateActive(data) {
    setActive(data);
  }

  return (
    <div className="homePage">
      <Header></Header>
      <SwitchButton updateActive={updateActive} data={switchData} />
      {!loading && (
        <div className="mainContent">
          <TagSection
            sectionTitle="Kolla in dessa"
            tags={checkoutTags}
          ></TagSection>
          <AllCategories active={active} categories={tags}></AllCategories>
        </div>
      )}
    </div>
  );
}
