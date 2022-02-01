import { createContext, useContext, useState } from 'react';
import api from '../api/contacts';
import { v4 as uuidv4 } from 'uuid';

const contactsCrudContext = createContext();

export function ContactsCrudContextProvider({ children }) {
  const [contacts, setContacts] = useState([]);

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

  const value = {
    contacts,
    getAllContacts,
    addContactHandler,
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
