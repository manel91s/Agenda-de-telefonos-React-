import React from 'react';
import { useState } from 'react';

const Contact = ({contact, editContact, setIsCheckAll}) => {
  
  const {id, name, surname , email } = contact;

  const handleDetectCheck = (e) => {
    if(!e.target.checked) {
      setIsCheckAll(false);
    }
  }


  return (
        <>
            <li>{name}</li>
            <li>{surname}</li>
            <li>{email}</li>
            <li onClick={() => editContact(contact)}><i className="fa fa-edit"></i></li>
            <li><input
                  data-id = {id}
                  type="checkbox"
                  onClick = {(e) => handleDetectCheck(e)}
                  />
            </li>
            
       </>
  

  )
};

export default Contact;
