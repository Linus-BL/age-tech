import React from 'react'

const Button = ({ children, onClickFunction, active = true }) => {


    return (
        <>
            {active ? <div className="button" onClick={onClickFunction}><p> {children}</p ></div > : <div className="buttonDisabled"><p> {children}</p ></div >
            }
        </>)
}

export default Button