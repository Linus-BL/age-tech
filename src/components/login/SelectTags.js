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

function SelectTags() {
  const [displayTags, setDisplayTags] = useState([]);
  const [userTags, setUserTags] = useState([]);
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    searchableTags();
  }, []);

  /**
     Component that displays search hits
     */
  function Hit({ hit }) {
    function handleCallback() {
      let tag = { name: hit.name, id: hit.objectID };
      // if tag does not exist in list -> add to list
      if (!displayTags.some((e) => e.name === hit.name)) {
        /* vendors contains the element we're looking for */

        setDisplayTags([...displayTags, tag]);
        setUserTags([...userTags, tag.name]);
      } else {
        console.log('go here');
        // remove from lists
        setUserTags((current) => current.filter((o) => o !== tag.name));
        setDisplayTags((current) => current.filter((o) => o.id !== tag.id));
      }
    }

    return (
      <div onClick={handleCallback}>
        <p>{hit.name}</p>
      </div>
    );
  }

  /**
   * Handles submission
   */
  async function handleClick() {
    const userRef = doc(db, 'users', currentUser.uid);
    await updateDoc(userRef, { tags: userTags });
    navigate('/home');
  }

  /* Function to not show tags when search field is empty */
  function EmptyQueryBoundary({ children, fallback }) {
    const { indexUiState } = useInstantSearch();

    if (!indexUiState.query) {
      return fallback;
    }

    return children;
  }

  function NoResultsBoundary({ children, fallback }) {
    const { results } = useInstantSearch();

    // The `__isArtificial` flag makes sure not to display the No Results message
    // when no hits have been returned yet.
    if (!results.__isArtificial && results.nbHits === 0) {
      return (
        <>
          {fallback}
          <div hidden>{children}</div>
        </>
      );
    }

    return children;
  }

  function NoResults() {
    const { indexUiState } = useInstantSearch();

    return (
      <div className="noSearchResults">
        <p>
          Inga resultat för <q>{indexUiState.query}</q>.
        </p>
      </div>
    );
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
        <InstantSearch
          searchClient={client}
          indexName={'Tags'}
          className="formGroup"
        >
          <SearchBox
            translations={{
              placeholder: 'Ex: Skidåkning..',
            }}
          />{' '}
          {/*Sök button fix*/}
          <EmptyQueryBoundary fallback={null}>
            <NoResultsBoundary fallback={<NoResults />}>
              <Hits hitComponent={Hit}></Hits>
            </NoResultsBoundary>
          </EmptyQueryBoundary>
        </InstantSearch>
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
