// import { Component } from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

function Button({ onSearch }) {
  

 
    return (
      <button type="button" className={s.Button} onClick={onSearch}>
        Load more
      </button>
    );
  
}
Button.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Button;