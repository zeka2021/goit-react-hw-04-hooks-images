import { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

function Searchbar({ onSubmit}) {
    const [query, setQuery] = useState('');
    
  const handleChange = e => {
      const {  value } = e.target;

    setQuery(value.toLowerCase());
    };

    const handleSubmit = e => {
        e.preventDefault();       
        onSubmit(query);
    };
    
    
        return (
            <header className={s.Searchbar}>
                <form onSubmit={handleSubmit} className={s.SearchForm}>
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButtonLabel}>Search</span>
                    </button>

                    <input
                        className={s.SearchFormInput}
                        type="text"
                        autocomplete="off"
                        name="query"
                        value={query}
                        autofocus
                        placeholder="Search images and photos"
                        onChange={handleChange}
                    />
                </form>
            </header>
        );
    }

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};
export default Searchbar;