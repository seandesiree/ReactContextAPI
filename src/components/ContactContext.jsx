import React, { createContext, useState } from 'react';


export const ContactContext = createContext();


export const ContactProvider = ({ children }) => {
  const [contacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '111-111-1111' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '222-222-2222' },
  ]);

  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <ContactContext.Provider value={{ contacts, selectedContact, setSelectedContact }}>
      {children}
    </ContactContext.Provider>
  );
};

