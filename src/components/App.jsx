import { Component } from 'react';
import { nanoid } from 'nanoid';
import {ContactForm} from "./ContactForm/ContactForm";



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  visibleContacts = () => {
    const arr = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    console.log(arr);
    return arr;
  };  

  handleSubmit = evt => {
    let contactsState = this.state.contacts;
    contactsState.push({ id: nanoid(), name: evt.name, number: evt.number });
    this.setState({ contacts: contactsState });
  };

  findContacts = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <div>
          <h2>Phonebook</h2>
          <ContactForm onSubmit={this.handleSubmit}></ContactForm>                 
          <h2>Contacts</h2>
          <p>Find contacts by name</p>
          <input type="text" onChange={this.findContacts} />
          <ul>
            {this.visibleContacts().map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
