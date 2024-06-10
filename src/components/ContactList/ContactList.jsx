import PropTypes from "prop-types"
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} onDeleteContact={onDeleteContact} />
          </li>
        ))}
      </ul>
    );
  };

  ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        onDeleteContact: PropTypes.func.isRequired,
      })
    ).isRequired,
  };
  export default ContactList;