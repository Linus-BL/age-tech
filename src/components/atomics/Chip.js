import React from 'react';
import { Link } from 'react-router-dom';
const Chip = ({ tagName, primary = true, mini = false }) => {
  if (mini) {
    return (
      <div className={primary ? 'chip mini' : 'chip secondary mini'}>
        <p>{tagName}</p>
      </div>
    );
  }
  return (
    <Link
      className={primary ? 'chip' : 'chip secondary'}
      to={`/allAds/${tagName}`}
    >
      <p>{tagName}</p>
    </Link>
  );
};

export default Chip;
