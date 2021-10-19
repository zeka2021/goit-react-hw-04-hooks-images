import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

class Searchbar extends Component {
     state = {
         query: '',
         onSubmit: '',
    };
    
  handleChange = e => {
      const { name, value } = e.target;

    this.setState({ [name]: value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();       
        this.props.onSubmit(this.state.query);
    };
    
    render(){
        return (
            <header className={s.Searchbar}>
                <form onSubmit={this.handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autocomplete="off"
                        name="query"
                        value={this.state.query}
                        autofocus
                        placeholder="Search images and photos"
                        onChange={this.handleChange}
                    />
                </form>
            </header>
        );
    }
}
Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;