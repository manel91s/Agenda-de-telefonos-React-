import {useState} from 'react';
import Contact from './Contact';

const Contacts = ({contacts,editContact}) => {
   
  const [isCheckAll, setIsCheckAll] = useState(false);

  const handleCheckAll = (e) => {

    const containerContacts = e.target.parentElement.parentElement.parentElement;
    const listChecks = containerContacts.querySelectorAll('.list-contacts input[type="checkbox"]');

    if(e.target.checked) {
        listChecks.forEach(check => check.checked = true);
        setIsCheckAll(true);
    }else{
        listChecks.forEach(check => check.checked = false);
        setIsCheckAll(false);
    }
    
  }
  return (
      <div className="contacts">
        <h2 className='text-center'>Contactos Existentes</h2>

        <p className="text-center">Resultados: <span>{contacts.length}</span></p>


        <div className="container-contacts">
            <div className="header-contact">
                <div><p>Nombre</p></div>
                <div><p>Apellidos</p></div>
                <div><p>Correo electronico</p></div>
                <div><p>Editar</p></div>
                <div className="check-contact"><input 
                                                    type="checkbox"
                                                    onClick = { (e) => handleCheckAll(e)}
                                                    /></div>
            </div>
                <ul className="list-contacts">
                    {contacts.map((contact) => (
                        <Contact
                            key = {contact.id}
                            contact = {contact}
                            editContact = {editContact}
                        />
                ))}
         </ul>

        </div>
     

      </div>
  )
};

export default Contacts;
