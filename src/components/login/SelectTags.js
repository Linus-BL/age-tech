import React, { useState } from 'react';
import { searchableTags } from '../../api/SearchAPI';
import { useEffect } from 'react';
import { InstantSearch, SearchBox, Hits} from 'react-instantsearch-hooks-web';
import { client } from '../../algolia';
import TagSection from '../atomics/TagsSection';
import { setIndexHelperState } from 'instantsearch.js/es/lib/utils';



function SelectTags() {
    const [tags, setTags] = useState([])

    useEffect(() => {
      searchableTags();
    }, [])
    
    
    function Hit({ hit }) {
        function handleCallback() {
            let tag= {name: hit.name,
            id: hit.ObjectId};
            if (!tags.some(e => e.name === hit.name)) {
                /* vendors contains the element we're looking for */
                setTags([...tags, tag]);
              }
            
        }
        return (
          <article onClick={handleCallback}>
            <p>{hit.name}</p>
          </article>
        );
      }

  return (
    <div>
        <InstantSearch searchClient={client} indexName={"Tags"}>
            <SearchBox/>
            <Hits hitComponent={Hit}></Hits>
        </InstantSearch>
        <div>
            <TagSection sectionTitle={'Valda taggar'} tags={tags}></TagSection>
        </div> 
           
        </div>
  )
}

export default SelectTags