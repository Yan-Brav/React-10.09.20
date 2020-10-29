import React from 'react';

function ContactsListItem({ contact, onSelect }) {
    return (
        <li
            className="contact-list-item"
            onClick={onSelect.bind(null, contact)}
        >
            {contact.name} {contact.surname}
        </li>
    );
}

export default ContactsListItem;
