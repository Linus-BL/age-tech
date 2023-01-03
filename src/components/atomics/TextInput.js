import React from 'react';

const TextInput = ({}) => {
  var value = '';
  return (
    <textarea
      className="inputField"
      value={value}
      onChange={console.log('on change')}
    />
  );
};

export default TextInput;
