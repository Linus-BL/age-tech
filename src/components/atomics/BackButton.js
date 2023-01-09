import React from 'react';
import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const BackButton = ({ onImage = false }) => {
  const navigate = useNavigate();

  function onClick() {
    navigate(-1);
  }

  return (
    <>
      {onImage ? (
        <div className="backButtonOnImage" onClick={onClick}>
          <MdArrowBack className="arrowWhite"></MdArrowBack>
        </div>
      ) : (
        <div className="backButton" onClick={onClick}>
          <MdArrowBack className="arrowBlack"></MdArrowBack>
        </div>
      )}
    </>
  );
};

export default BackButton;
