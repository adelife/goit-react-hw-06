import css from "./SearchBox.module.css"
import PropTypes from "prop-types"

const SearchBox = ({ value, onSearch }) => {
    return (
      <div className={css.search}>
        <p className={css.text}>Find contacts by name</p>
        <input
          className={css.input}
          type='text'
          placeholder='Search'
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    );
  };

  SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
  };
  
  export default SearchBox;