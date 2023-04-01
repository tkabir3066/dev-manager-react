import React from "react";
import Contact from "./Contact";

function Contacts({ contacts }) {
  return (
    <>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </>
  );
}

export default Contacts;
