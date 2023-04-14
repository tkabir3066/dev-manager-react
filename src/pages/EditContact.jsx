import React from "react";
import ContactForm from "../components/contacts/ContactForm";
import { useParams } from "react-router-dom";
function EditContact() {
  const params = useParams();
  const { id } = params;
  console.log(params);
  return (
    <>
      <ContactForm />
    </>
  );
}

export default EditContact;
