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


function TagSearch({passUserTags, passDisplayTags, displayTags, userTags}) {

    useEffect(() => {
      searchableTags();
    }, []);
  
    /**
       Component that displays search hits
       */
    function Hit({ hit }) {
      function handleClick() {
        
        let tag = { name: hit.name, id: hit.objectID };
        passUserTags(tag.name);
        passDisplayTags(tag)

      }
  
      return (
        <div onClick={handleClick}>
          <p>{hit.name}</p>
        </div>
      );
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
  )
}

export default TagSearch