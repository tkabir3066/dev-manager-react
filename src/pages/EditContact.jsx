import React, { useContext } from "react";
import ContactForm from "../components/contacts/ContactForm";
import { useParams } from "react-router-dom";
import { ContactContext } from "../context/Contact.Context";
function EditContact() {
  const { contacts, updateContact } = useContext(ContactContext);
  const params = useParams();
  const { id } = params;
  console.log(params);

  const foundContact = contacts.find((contact) => contact.id === id);
  return (
    <>
      <ContactForm contact={foundContact} updateContact={updateContact} />
    </>
  );
}

export default EditContact;
