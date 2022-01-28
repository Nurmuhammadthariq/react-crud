import React from 'react';
import { Link } from 'react-router-dom';

const ContactCard = (props) => {
  const { id, name, email } = props.contact;

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
        onClick={() => props.clickHandler(id)}
      ></i>
    </div>
  );
};

export default ContactCard;
