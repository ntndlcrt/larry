import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({ text, onClick}) => {
    return (
      <button onClick={onClick} class="text-black px-20 py-2 sm:py-3 rounded-full border border-black shadow-lg shadow-black">
        {text}
      </button>
    );
  };
  
  Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
  };
  
  export default Button;
  
  