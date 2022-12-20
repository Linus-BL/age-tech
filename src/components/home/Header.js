import React from 'react';
import Heading1 from '../textComponents/Heading1';
import SearchField from './SearchField';

const Header = ({ children, onClickFunction, active = true }) => {
  return (
    <div className="headerSection">
      <Heading1>Boomer Biz</Heading1>
      <SearchField></SearchField>
    </div>
  );
};

export default Header;
