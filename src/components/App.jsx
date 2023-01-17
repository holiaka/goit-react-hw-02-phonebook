import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';



export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  visibleContacts = () => {
    const arr = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(this.state.filter.toLowerCase()));
    return arr;
  };  

  handleSubmit = (evt, {resetForm}) => {
    
    const contactsState = this.state.contacts;
    const filterName = contactsState.filter(contact => contact.name === evt.name);
    
    if (filterName.length > 0) {
      alert("You have already added this person's data to Contact list!!!");
      return;
    }

    contactsState.push({ id: nanoid(), name: evt.name, number: evt.number });
    this.setState({ contacts: contactsState });
    resetForm();
  };

  findContacts = evt => {
    const { value } = evt.target;
    this.setState({ filter: value });
  };

  deleteContact = evt => {
    console.log(evt)
    const contactsState = this.state.contacts;
    const newContacts = contactsState.filter(item => item.id !== evt.target.id);
    this.setState ({contacts: newContacts})
  }

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
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.handleSubmit}></ContactForm>                 
          <h2>Contacts</h2>                    
          <Filter onChange={this.findContacts}></Filter>
          <ContactList contacts={this.visibleContacts} deleteContact={this.deleteContact}></ContactList>
        </div>
      </div>
    );
  }
}
