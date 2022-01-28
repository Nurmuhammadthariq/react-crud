import React from 'react';

const AddContact = () => {
  const addContact = (e) => {
    e.preventDefault();
    if (this.state.name === '' || this.state.email === '') {
      alert('Name and email empty');
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: '', email: '' });
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={this.addContact}>
        <div className="field">
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
          />
        </div>
        <div className="field">
          <label>email</label>
          <input
            name="email"
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>
        <button className="ui button blue">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
