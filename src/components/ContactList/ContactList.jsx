import PropTypes from "prop-types"
import Contact from '../Contact/Contact'
import css from './ContactList.module.css'
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const isVisibleContacts = (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = isVisibleContacts(contacts, filter);
    return (
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li className={css.item} key={contact.id}>
            <Contact {...contact} />
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