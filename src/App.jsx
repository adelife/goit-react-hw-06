import { useState, useEffect } from 'react'
// import Contact from './src/components/Contact/Contact'
import ContactForm from './components/ContactForm/ContactForm';
import contactsData from "./components/contactsData.json"
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';

const  App = () => {
  const [filter, setFilter] = useState ('')

  const [contacts, setContacts] = useState(() =>{
  const savedContacts = localStorage.getItem('saved-contacts')
    return JSON.parse(savedContacts) || contactsData
  });

  const addContact= (newContact) => {
    setContacts((contacts) => {
      return [...contacts, newContact];
    })
  }

  const filterContacts = contacts.filter((contact) => 
  contact.name.toLowerCase().includes(filter.toLowerCase())
  )

  const deleteContact =(contactId) => {
    setContacts((contacts) => {
      return contacts.filter((contact) => contact.id !== contactId)
    })
    }
  useEffect(() => {
    localStorage.setItem('saves-contacts', JSON.stringify(contacts))
  }, [contacts])
  

  
  return (
    <>
    <div>
  <h1>Phonebook</h1>
  <ContactForm  onAddContact = {addContact}/>
  <SearchBox  value = {filter} onSearch= {setFilter}/>
  <ContactList 
  contacts = {filterContacts}
  onDeleteContact = {deleteContact} />
</div>
    </>
  )
}

export default App
