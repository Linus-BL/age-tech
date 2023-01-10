import React, { useState } from 'react';
import { searchableTags } from '../../api/SearchAPI';
import { useEffect } from 'react';
import {
  InstantSearch,
  SearchBox,
  Hits,
  useInstantSearch,
} from 'react-instantsearch-hooks-web';
import { client } from '../../algolia';
import TagSection from '../atomics/TagsSection';
import Heading1 from '../textComponents/Heading1';
import BodyText from '../textComponents/BodyText';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Button from '../atomics/Button';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { useAuth } from '../../context/AuthContext';
import TagSearch from '../atomics/TagSearch';

function SelectTags() {
  const [displayTags, setDisplayTags] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    searchableTags();
  }, []);

  const handleUserTags = (childData) =>{
    setUserTags([...userTags, childData])
    console.log(childData)
    console.log(userTags)
}
const handleDisplayTags = (childData) =>{
  setDisplayTags([...displayTags, childData]);
}

  /**
   * Handles submission
   */
  async function handleClick() {
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, { tags: userTags });
    navigate('/home');
  }

  return (
    <div className="tagsPage">
      <div className="formGroup">
        <Heading1>Välj taggar</Heading1>
        <p>
          Taggar används för att lättare filtrera innehåll efter dina intressen.
        </p>
      </div>
      <div className="search">
        <TagSearch 
          passUserTags={handleUserTags}
          passDisplayTags={handleDisplayTags}
          userTags={userTags}/>
      </div>

      <div className="chosenTags">
        <TagSection
          mini={true}
          primary={false}
          sectionTitle={'Valda taggar'}
          tags={displayTags}
        ></TagSection>
      </div>

      <button className="button bottomButton" onClick={handleClick}>
        Skapa profil{' '}
      </button>
    </div>
  );
}

export default SelectTags;
