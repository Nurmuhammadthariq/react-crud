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

  const value = {
    contacts,
    getAllContacts,
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
