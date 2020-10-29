import React, { useEffect } from 'react';
import contactsService from './contactsService';
import './App.css';

import ContactsList from './components/contactsList/ContactsList';
import ContactForm from './components/contactForm/ContactForm';
import { connect } from 'react-redux';
import { setContacts, changeContact, addContact, setSelectedContact, resetSelectedContact, deleteContact } from './store/actions/actions';

function App({contacts, 
            selectedContact, 
            setContacts, 
            changeContact,
            addContact,
            setSelectedContact, 
            resetSelectedContact, 
            deleteContact}) {
    useEffect(() => {
        contactsService.get().then(({ data }) => setContacts(data));
    }, []);

    function onAddNewBtnClick() {
        resetSelectedContact()
    }

    function onDelete({id}) {
        contactsService.delete(id);
        deleteContact(id)
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
            addContact(data);
        });
    }

    function updateContact(contact) {
        contactsService.put(contact.id, contact);
        changeContact(contact)
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

function mapStateToProps(state){
    return state
}


const mapDispatchToProps = {
    setContacts,
    changeContact,
    addContact,
    setSelectedContact,
    resetSelectedContact,
    deleteContact
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

