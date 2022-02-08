import { useEffect, useState } from 'react'
import Header from './components/Header';
import Contacts from './components/Contacts';

function App() {
  
  const [contacts, setContacts] = useState(
    localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []
  );
  const [contact, setContact] = useState({
     id: '',
     name : '',
     surname: '',
     email: '',
     address: '',
     telefon: '',
     notes : ''
  });

  useEffect(() => {
    if(contacts.length > 0) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  },[contacts]);

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
             setContacts = {setContacts}
             editContact = {editContact}
          ></Contacts>
        </main>
      </div>
  )
}

export default App
