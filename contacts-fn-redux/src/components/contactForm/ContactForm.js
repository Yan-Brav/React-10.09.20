import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm({ contact: initialContact, onDelete, onSave }) {
    const [contact, setContact] = useState(initialContact);

    function onDeleteBtnClick() {
        onDelete(contact);
    }

    function onContactFormSubmit(e) {
        e.preventDefault();
        onSave(contact);
    }

    function onChange(e) {
        setContact({
            ...contact,
            [e.target.name]: e.target.value,
        });
    }

    return (
        <form action="" className="contact-form" onSubmit={onContactFormSubmit}>
            <h2>Contact Details</h2>
            <label htmlFor="nameInput">Name</label>
            <input
                type="text"
                name="name"
                id="nameInput"
                value={contact.name}
                onChange={onChange}
            />
            <br />

            <label htmlFor="surnameInput">Surname</label>
            <input
                type="text"
                name="surname"
                id="surnameInput"
                value={contact.surname}
                onChange={onChange}
            />
            <br />

            <label htmlFor="phoneInput">Phone</label>
            <input
                type="text"
                name="phone"
                id="phoneInput"
                value={contact.phone}
                onChange={onChange}
            />

            <div className="buttons">
                <button type="submit" className="pull-right">
                    Save
                </button>
                {contact.id ? (
                    <button
                        type="button"
                        className="pull-left"
                        onClick={onDeleteBtnClick}
                    >
                        Delete
                    </button>
                ) : (
                    ''
                )}
            </div>
        </form>
    );
}

export default ContactForm;
