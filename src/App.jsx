import { useState } from 'react'
import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
     id: '',
     name : '',
     surname: '',
     email: '',
     address: '',
     telefon: '',
     notes : ''
  });

  const [error, setError] = useState(false);

  const editContact = (contactEdit) => {
      setContact(contactEdit);
  } 
  
  return (
      <div className="container">
        <Header
          error={error}
          setError = {setError}
          contact = {contact}
          setContact = {setContact}
          contacts = {contacts}
          setContacts = {setContacts}
          
        />

        <main className="container-gray">
          <Contacts
             contacts = {contacts}
             editContact = {editContact}
          ></Contacts>
        </main>
      </div>
  )
}

export default App
