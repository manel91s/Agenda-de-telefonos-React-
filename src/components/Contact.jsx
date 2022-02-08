import React from 'react';

const Contact = ({contact, editContact}) => {
  
  const {name, surname , email } = contact;

  const handleCheckAll = (e) => {
    console.log("test");
  }


  return (
        <>
            <li>{name}</li>
            <li>{surname}</li>
            <li>{email}</li>
            <li onClick={() => editContact(contact)}><i className="fa fa-edit"></i></li>
            <li><input 
                  type="checkbox"
          
                  />
            </li>
            
       </>
  

  )
};

export default Contact;
