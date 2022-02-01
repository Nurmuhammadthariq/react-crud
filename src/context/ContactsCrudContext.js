import { createContext, useContext, useState } from 'react';
import api from '../api/contacts';
import { v4 as uuidv4 } from 'uuid';

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);
  const [text, setText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Get all contacts
  const getAllContacts = async () => {
    const response = await api.get('/contacts');
    if (response.data) {
      setContacts(response.data);
    }
  };

  const addContactHandler = async (contact) => {
    const id = uuidv4();
    const request = { id, ...contact };
    console.log(request);
    const response = await api.post('/contacts', request);
    setContacts([...contacts, response.data]);
  };

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`);
    const newContact = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContact);
  };

  const updateContactHandler = async (contact) => {
    const response = await api.put(`/contacts/${contact.id}`, contact);
    const { id } = response.data;
    setContacts(
      contacts.map((contact) => {
        return contact.id === id ? { ...response.data } : contact;
      })
    );
  };

  const searchHandler = (searchTerm) => {
    setText(searchTerm);
    if (searchTerm !== '') {
      const newContactList = contacts.filter((contact) => {
        return Object.values(contact)
          .join(' ')
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(newContactList);
    } else {
      setSearchResults(contacts);
    }
  };

  const value = {
    contacts,
    getAllContacts,
    addContactHandler,
    removeContactHandler,
    updateContactHandler,
    searchHandler,
    text,
    searchResults,
  };

  return (
    <contactsCrudContext.Provider value={value}>
      {children}
    </contactsCrudContext.Provider>
  );
}

export function useContactsCrud() {
  return useContext(contactsCrudContext);
}
