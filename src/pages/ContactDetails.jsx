import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { ContactContext } from "../context/Contact.Context";
function ContactDetails() {
  const { contacts, deleteContact } = useContext(ContactContext);
  const [contact, setContact] = useState({});
  const navigate = useNavigate();
  const params = useParams();
  const { id } = params;
  const foundContact = contacts.find((contact) => contact.id === id);

  useEffect(() => {
    if (id && foundContact) {
      setContact(foundContact);
    }
  }, [id]);

  const handleDelete = (id) => {
    toast.success("Contact Details is deleted successfully");
    deleteContact(id);
    navigate("/contacts");
  };
  const {
    firstName,
    lastName,
    email,
    profession,
    bio,
    gender,
    image,
    dateOfBirth,
  } = contact;

  return (
    <>
      <h2 className="text-center mb-3">Contact Details</h2>

      {Object.keys(contact).length === 0 ? (
        <p>No contact to show</p>
      ) : (
        <Card className="mb-3">
          <div className="d-flex">
            <Card.Img variant="top" src={image} className="card-image" />
            <Card.Body>
              <Card.Title>
                <span className="text-dark mb-2">
                  {firstName} {lastName}{" "}
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                <strong>Profession:</strong> {profession}{" "}
              </Card.Subtitle>
              <Card.Text>
                <strong>Bio:</strong> {bio}
              </Card.Text>

              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  <strong>Gender :</strong> {gender}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Email : </strong> {email}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>D.O.B : </strong>{" "}
                  {dateOfBirth instanceof Object
                    ? format(dateOfBirth, "dd/MM/yyy")
                    : dateOfBirth}
                </ListGroup.Item>
              </ListGroup>

              <div className="card-btn mt-3">
                <Card.Link as={Link} to={`/edit-contact/${id}`}>
                  <Button variant="warning ms-3" size="md" type="view">
                    <FaPencilAlt />
                  </Button>
                </Card.Link>
                <Card.Link>
                  <Button
                    variant="danger ms-3"
                    size="md"
                    onClick={handleDelete}
                  >
                    <FaTrashAlt />
                  </Button>
                </Card.Link>
              </div>
            </Card.Body>
          </div>
        </Card>
      )}
    </>
  );
}

export default ContactDetails;
