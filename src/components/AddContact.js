import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const { addContactHandler } = useContactsCrud();
  const navigate = useNavigate();

  const addContact = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert("name and email can't empty");
    }
    addContactHandler({ name, email });
    setName('');
    setEmail('');
    navigate('/');
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={addContact}>
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
