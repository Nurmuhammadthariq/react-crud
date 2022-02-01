import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';
import { ContactsCrudContextProvider } from '../context/ContactsCrudContext';

function App() {
  // const removeContactHandler = (id) => {
  //   const newContacts = contacts.filter((contact) => {
  //     return contact.id !== id;
  //   });

  //   setContacts(newContacts);
  // };

  return (
    <div className="ui container">
      <Router>
        <Header />
        <ContactsCrudContextProvider>
          <Routes>
            <Route path="/" element={<ContactList />} />
            <Route path="add" element={<AddContact />} />
            <Route path="/contact/:id" element={<ContactDetail />} />
          </Routes>
        </ContactsCrudContextProvider>
      </Router>
    </div>
  );
}

export default App;
