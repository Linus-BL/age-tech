import React from 'react'

const Button = ({ children, onClickFunction, }) => {


    return (

        <div className="button" onClick={onClickFunction} ><p>{children}</p></div>)
}

export default Button