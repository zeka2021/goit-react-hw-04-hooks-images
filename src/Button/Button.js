import { Component } from 'react';
import s from './Button.module.css';
import PropTypes from 'prop-types';

class Button extends Component {
  state = {
    onSearch: '',
  };

  render() {
    return (
      <button type="button" className={s.Button} onClick={this.props.onSearch}>
        Load more
      </button>
    );
  }
}
Button.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Button;