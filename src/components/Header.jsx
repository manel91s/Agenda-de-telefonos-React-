import Message from './Message';
import styled from '@emotion/styled';
import { useState } from 'react';

const Button = styled.button`
    background-color: rgba(0, 140, 255, 0.616);
    padding: 10px 24px;
    border: 0;
    color: white;
    cursor: pointer;
`;

const Header = ({error, setError, contact, setContact, contacts, setContacts}) => {


  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
     setContact({
        ...contact,
        [e.target.name] : e.target.value
     })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
     
     if(contact.name === '' || contact.surname === '' || contact.email === '' ||contact.telefon === '' || contact.notes === '') {
        setError(true)
         return;
     }
     
     setError(false);
     
    
     if(contact.id) {
        const editContacts = contacts.map((contactState) => contactState.id === contact.id ? contact : contactState);
        setContacts(editContacts)
     }else{
        contact.id = Date.now();
        setContacts([
            ...contacts,
            contact
        ])
     }
     
     setContact({
        id: '',
        name : '',
        surname: '',
        email: '',
        address:'',
        telefon: '',
        notes : ''
     })

     setSuccess(true);

     setTimeout(() => {
        setSuccess(false);
    }, 3000);

  }


  return (
      <header>
          <h1 className="no-margin text-center">Agenda de telefonos</h1>
          <div className="container-gray">
           <h2 className="text-center">Nuevo Contacto</h2>
           {success ? <Message type={'success'}>Contacto agregado</Message> : ''} 
           {error ? <Message type={'error'}>Todos los campos son obligatorios</Message> : ''}
          <form onSubmit = {handleSubmit} className="create-contact">

            <div className="field">
                <label htmlFor="">Nombre:</label>
                <input onChange = {handleChange} name="name" type="text" value={contact.name}/>
            </div>

            <div className="field">
                <label htmlFor="">Apellidos</label>
                <input onChange = {handleChange} name="surname" type="text"  value={contact.surname} />
            </div>

            <div className="field">
                <label htmlFor="">Correo electronico</label>
                <input onChange = {handleChange}  name="email" type="email"  value={contact.email}/>
            </div>

            <div className="field">
                <label htmlFor="">Dirección</label>
                <input onChange = {handleChange} name="address" type="text" value={contact.address}/> 
            </div>

            <div className="field">
                <label htmlFor="">Telefono: </label>
                <input onChange = {handleChange}  name="telefon" type="text" value={contact.telefon}/>
            </div>

            <div className="field">
                <label htmlFor="">Notas:</label>
                <textarea onChange = {handleChange}  name="notes" value={contact.notes}></textarea>
            </div>

            <Button>Agregar Contacto</Button>
          </form>
          </div>
      </header>
  )
};

export default Header;
