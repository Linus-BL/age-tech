import React from 'react';
import { Link } from 'react-router-dom';
const Chip = ({ onClickFunction, tagName }) => {
  return (
    <Link className="chip" to={`/allAds/${tagName}`}>
      <p>{tagName}</p>
    </Link>
  );
};

export default Chip;
