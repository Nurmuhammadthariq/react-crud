import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';
import ContactCard from './ContactCard';

const ContactList = () => {
  const { contacts, getAllContacts } = useContactsCrud();

  useEffect(() => {
    getAllContacts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderContactList = contacts.map((contact) => {
    return <ContactCard contact={contact} key={contact.id} />;
  });

  return (
    <div className="ui main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui right floated button blue">Add Contact</button>
        </Link>
      </h2>
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
