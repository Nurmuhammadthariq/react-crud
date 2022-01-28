import React, { useEffect, useState } from 'react';
import { useContactsCrud } from '../context/ContactsCrudContext';
import ContactCard from './ContactCard';

const ContactList = () => {
  const { contacts, getAllContacts } = useContactsCrud();

  useEffect(() => {
    getAllContacts();
  }, [contacts]);

  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  return (
    <div className="main">
      <h2>Contact List</h2>
      <div
        className="ui very relaxed list "
        style={{ width: '30em', marginTop: '2rem' }}
      >
        {renderContactList}
      </div>
    </div>
  );
};

export default ContactList;
