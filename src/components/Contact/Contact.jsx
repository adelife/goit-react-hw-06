import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import css from './Contact.module.css';
import PropTypes from "prop-types";

const Contact = ({ id, name, number, onDeleteContact}) => {
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
      <button className={css.button} type='button' onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

  Contact.propTypes = {
      id : PropTypes.number.isRequired,
      name : PropTypes.string.isRequired,
      number : PropTypes.string.isRequired,
      onDeleteContact : PropTypes.func.isRequired,
  };
  
  export default Contact;