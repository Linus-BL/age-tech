import React from 'react'

const adCard = ({ onClickFunction, title, description }) => {


    return (

        <div className="adCard" onClick={onClickFunction} >
            <h1>{title}</h1><p>{description}</p></div>)
}

export default adCard