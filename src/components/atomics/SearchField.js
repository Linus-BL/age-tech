import React from 'react'
import Button from './Button'
const TextInput = () => {
    var value = "";
    return (
        <div className="searchField">
            <textarea className="inputField" value={value} onChange={console.log("on change")}></textarea>
            <Button>sök</Button>
        </div>
    )
}

export default TextInput    