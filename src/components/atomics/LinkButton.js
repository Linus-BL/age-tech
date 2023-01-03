import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
const LinkButton = ({ children, onClickFunction, destination }) => {
  return (
    <a href={destination} className="linkButton" onClick={onClickFunction}>
      {' '}
      {children} <MdKeyboardArrowRight className="icon" />
    </a>
  );
};

export default LinkButton;
