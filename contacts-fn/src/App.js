import React, { useEffect, useState } from 'react';
import contactsService from './contactsService';
import './App.css';

import ContactsList from './components/contactsList/ContactsList';
import ContactForm from './components/contactForm/ContactForm';

function App() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(getEmptyContact());

    useEffect(() => {
        contactsService.get().then(({ data }) => setContacts(data));
    }, []);

    function onAddNewBtnClick() {
        setSelectedContact(getEmptyContact());
    }

    function onDelete(contact) {
        setContacts(contacts.filter((el) => el !== contact));
        setSelectedContact(getEmptyContact());
    }

    function onSave(contact) {
        if (contact.id) {
            updateContact(contact);
        } else {
            createContact(contact);
        }
    }

    function createContact(contact) {
        contactsService.post('', contact).then(({ data }) => {
            setContacts([...this.state.contacts, data]);
            setSelectedContact(data);
        });
    }

    function updateContact(contact) {
        contactsService.put(contact.id, contact);
        setContacts(
            contacts.map((el) => (el.id === contact.id ? contact : el))
        );
        setSelectedContact(contact);
    }

    return (
        <>
            <header className="App-header">Contacts App</header>
            <div className="left-panel">
                <ContactsList
                    contacts={contacts}
                    onSelect={setSelectedContact}
                ></ContactsList>
                <button
                    onClick={onAddNewBtnClick}
                    className="add-new-contact-btn"
                >
                    Add new
                </button>
            </div>
            <div className="right-panel">
                <ContactForm
                    key={selectedContact.id}
                    contact={selectedContact}
                    onDelete={onDelete}
                    onSave={onSave}
                ></ContactForm>
            </div>
        </>
    );
}

export default App;

function getEmptyContact() {
    return {
        // age: 33,
        name: '',
        surname: '',
        phone: '',
    };
}
