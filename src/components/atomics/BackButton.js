import React from 'react';
import { MdArrowBack } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const BackButton = ({ black = true }) => {
    const navigate = useNavigate();

    function onClick() {
        navigate(-1)
    }


    return (
        <>
            {
                black ? (
                    <div className="backButton" onClick={onClick} >
                        <MdArrowBack className="arrowBlack"></MdArrowBack>
                    </div >
                ) : (
                        <div className="backButton" onClick={onClick}>
                            <MdArrowBack className="arrowWhite"></MdArrowBack>
                        </div>
                    )
            }
        </>

    );
};

export default BackButton;
