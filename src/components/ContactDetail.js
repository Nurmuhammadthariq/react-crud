import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import user from '../images/user.jpg';

const ContactDetail = (props) => {
  const location = useLocation();
  const { name, email } = location.state.contact;

  console.log(location);
  return (
    <div className="main">
      <div className="center-div">
        <Link to="/">
          <button className="ui primary center floated button">
            Back Contact List
          </button>
        </Link>
      </div>
      <div className="ui centered card">
        <div className="image">
          <img src={user} alt="" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;
