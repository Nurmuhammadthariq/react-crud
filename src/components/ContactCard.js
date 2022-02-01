import React from 'react';
import { Link } from 'react-router-dom';
import { useContactsCrud } from '../context/ContactsCrudContext';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

  const { removeContactHandler } = useContactsCrud();

  const deleteContact = (id) => {
    removeContactHandler(id);
  };

  return (
    <div className="item">
      <img
        className="ui avatar image"
        src="https://semantic-ui.com/images/avatar/small/stevie.jpg"
        alt=""
      />
      <div className="content">
        <Link to={`/contact/${id}`} state={{ contact: props.contact }}>
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </Link>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: 'red' }}
        onClick={() => deleteContact(id)}
      ></i>
      <Link to={`/edit`} state={{ contact: props.contact }}>
        <i
          className="edit alternate outline icon"
          style={{ color: 'blue' }}
        ></i>
      </Link>
    </div>
  );
};

export default ContactCard;
