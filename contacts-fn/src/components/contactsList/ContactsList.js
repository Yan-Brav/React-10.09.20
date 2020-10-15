import React from 'react';
import './ContactsList.css';

import ContactsListItem from '../contactsListItem/ContactsListItem';

function ContactsList({ contacts, onSelect }) {
    return (
        <ul className="contacts-list">
            {contacts.map((contact) => (
                <ContactsListItem
                    contact={contact}
                    key={contact.id}
                    onSelect={onSelect}
                ></ContactsListItem>
            ))}
        </ul>
    );
}

export default ContactsList;
