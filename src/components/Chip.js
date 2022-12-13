import React from 'react'

const Chip = ({ children, onClickFunction, }) => {


    return (

        <div className="chip" onClick={onClickFunction} ><p>{children}</p></div>)
}

export default Chip