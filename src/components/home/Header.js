import React from 'react';
import Heading1 from '../textComponents/Heading1';
import SearchField from '../atomics/SearchField';

const Header = ({ children, onClickFunction, active = true }) => {
  return (
    <div className="headerSection">
      <SearchField></SearchField>
    </div>
  );
};

export default Header;
