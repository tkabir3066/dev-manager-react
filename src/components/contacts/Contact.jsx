import React, { useContext } from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { object } from "yup";
import { format } from "date-fns";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { ContactContext } from "../../context/Contact.Context";

function Contact({ contact }) {
  const { deleteContact } = useContext(ContactContext);
  const {
    id,
    firstName,
    lastName,
    email,
    image,
    bio,
    profession,
    gender,
    dateOfBirth,
  } = contact;

  const handleDelete = () => {
    toast.success("Contact is deleted successfully");
    deleteContact(id);
  };
  return (
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
            <Card.Link as={Link} to={`/contacts/${id}`}>
              <Button variant="warning ms-3" size="md" type="view">
                <FaEye />
              </Button>
            </Card.Link>
            <Card.Link>
              <Button variant="danger ms-3" size="md" onClick={handleDelete}>
                <FaTrashAlt />
              </Button>
            </Card.Link>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
}

export default Contact;
