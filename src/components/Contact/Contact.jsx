import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ id, name, number}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); 
  };

    return (
      <div className={css.container}>
      <div className={css.contact}>
        <p className={css.text}>
          <span className={css.span}>
            <IoPersonSharp />
          </span>
          {name}
        </p>
        <p className={css.text}>
          <span className={css.span}>
            <FaPhone  />
          </span>
          {number}
        </p>
      </div>
      <button className={css.button} type='button' onClick={() => handleDelete(id)}>
        Delete
      </button>
    </div>
  );
};

  Contact.propTypes = {
      id : PropTypes.number.isRequired,
      name : PropTypes.string.isRequired,
      number : PropTypes.string.isRequired,
      handleDelete : PropTypes.func.isRequired,
  };
  
  export default Contact;