import {useState, useEffect} from 'react';
import Contact from './Contact';

const Contacts = ({contacts,setContacts, editContact}) => {
   
  const [isCheckAll, setIsCheckAll] = useState(false);

  /*Hacemos un state para controlar si se ha marcado el check de borrar todos los checks
  y recorremos
  */
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

  /* Función para borrar en caso de que seleccione todos los checks o controlar 
     los que se han marcado ;)
  */
  const handleDelete = (e) => {
    
    if(isCheckAll) {
        if(window.confirm('Seguro que quieres borrar todos los contactos?')) {
            setContacts([]);
        }
        return;
    }

    const containerContacts = e.target.parentElement.parentElement.parentElement;

    const listChecks = containerContacts.querySelectorAll('.list-contacts input[type="checkbox"]');

    let updateContacts = [];
    listChecks.forEach((check) => {
        if(!check.checked){
            let idContact = check.dataset.id;
            let contact = contacts.filter((co) => co.id == idContact);
            
           updateContacts = [...updateContacts, contact[0]];
        }
    })

    if(updateContacts.length === 0) {
        setContacts([]);
        return;
    }

    setContacts(updateContacts);
  }

  return (
      <div className="contacts">
        <h2 className='text-center'>Contactos Existentes</h2>

        <p className="text-center">Resultados: <span className="bold">{contacts.length}</span></p>


        <div className="container-contacts">
            <div className="header-contact">
                <div><p>Nombre</p></div>
                <div><p>Apellidos</p></div>
                <div><p>Correo electronico</p></div>
                <div><p>Editar</p></div>
                <div className="accions">
                <i
                class="fa fa-trash"
                onClick = {(e) => handleDelete(e)} 
                ></i>
                <input type="checkbox" 
                       onClick = { (e) => handleCheckAll(e)}
                />
                </div>
            </div>
                <ul className="list-contacts">
                    {contacts.map((contact) => (
                        <Contact
                            key = {contact.id}
                            contact = {contact}
                            editContact = {editContact}
                            setIsCheckAll = {setIsCheckAll}
                        />
                ))}
         </ul>

        </div>
     

      </div>
  )
};

export default Contacts;
