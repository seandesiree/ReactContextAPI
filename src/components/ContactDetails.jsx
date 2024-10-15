import React, { useContext } from 'react';
import { ContactContext } from './ContactContext';

const ContactDetails = () => {
  const { selectedContact } = useContext(ContactContext);

  if (!selectedContact) {
    return <p>Please select a contact to see details.</p>;
  }

  return (
    <div>
      <h2>Contact Details</h2>
      <p>Name: {selectedContact.name}</p>
      <p>Email: {selectedContact.email}</p>
      <p>Phone: {selectedContact.phone}</p>
    </div>
  );
};

export default ContactDetails;