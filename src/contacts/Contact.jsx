import React from "react";
import { Card, ListGroup, Button } from "react-bootstrap";
import { FaEye, FaTrashAlt } from "react-icons/fa";

function Contact({ contact }) {
  const {
    firstName,
    lastName,
    email,
    image,
    bio,
    profession,
    gender,
    dateOfBirth,
  } = contact;
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
              <strong>D.O.B : </strong> {dateOfBirth}
            </ListGroup.Item>
          </ListGroup>

          <div className="card-btn mt-3">
            <Card.Link href="#">
              <Button variant="warning ms-3" size="md" type="view">
                <FaEye />
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger ms-3" size="md">
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
