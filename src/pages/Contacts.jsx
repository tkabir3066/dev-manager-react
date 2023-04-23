import React, { useContext } from "react";
import Contact from "../components/contacts/Contact";
import { ContactContext } from "../context/Contact.Context";

function Contacts() {
  const context = useContext(ContactContext);
  const { contacts } = context;
  return (
    <>
      <h2 className=" text-center">All Contacts</h2>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
}

export default Contacts;
