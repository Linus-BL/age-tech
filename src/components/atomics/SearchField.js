import React from 'react';
import { useState } from 'react';

const TextInput = ({ placeholderText = 'Vad söker du efter?' }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  return (
    <div className="searchField">
      <input
        type="search"
        placeholder={placeholderText}
        onChange={handleChange}
        value={searchInput}
        className="inputField"
      />

      <input className="button" type="submit" value="Sök" />
    </div>
  );
};

export default TextInput;
