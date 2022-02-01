import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

const EditContact = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, name, email } = location.state.contact;

  const [newEmail, setNewEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const { updateContactHandler } = useContactsCrud();
  //   console.log(location);

  const updateContact = (e) => {
    e.preventDefault();
    if (newName === '' || newEmail === '') {
      alert("name and email can't empty");
      return;
    }

    updateContactHandler({ id, name: newName, email: newEmail });
    setNewEmail('');
    setNewName('');
    navigate('/');
  };

  return (
    <div className="ui main">
      <h2>Edit contact {name}</h2>
      <form className="ui form" onSubmit={updateContact}>
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
        </div>
        <div className="field">
          <label>email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <button className="ui button blue">edit</button>
      </form>
    </div>
  );
};

export default EditContact;
