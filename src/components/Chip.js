import React from 'react'

const Chip = ({ onClickFunction, tagName }) => {


    return (

        <div className="chip" onClick={onClickFunction} ><p>{tagName}</p></div>)
}

export default Chip