import css from "./SearchBox.module.css"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { changeFilter } from "../../redux/filtersSlice"
import { selectNameFilter } from "../../redux/selectors"

const SearchBox = () => {
  const dispatch = useDispatch();
  const selectFilter = useSelector(selectNameFilter);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value)); 
  };
    return (
      <div className={css.search}>
        <p className={css.text}>Find contacts by name</p>
        <input
          className={css.input}
          type='text'
          placeholder='Search'
          value={selectFilter}
          onChange={handleFilterChange}
        />
      </div>
    );
  };

  SearchBox.propTypes = {
    value: PropTypes.string.isRequired,
    onSearch: PropTypes.func.isRequired,
  };
  
  export default SearchBox;