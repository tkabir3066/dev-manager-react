import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function AddContact({ addContact }) {
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profession: "",
    bio: "",
    gender: "male",
    dateOfBirth: new Date(),
  });

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

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check

    // Form submission

    addContact(contact);
  };
  return (
    <>
      <h2 className="text-center">AddContact</h2>;
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="firstName" column>
              First Name
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="firstName"
              id="firstName"
              onChange={handleChange}
              value={firstName}
              placeholder="Enter Your First Name"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="lastName" column>
              Last Name
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="lastName"
              id="lastName"
              onChange={handleChange}
              value={lastName}
              placeholder="Enter Your Last Name"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="email" column>
              Email
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
              value={email}
              placeholder="Enter Your Email"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="profession"
              id="profession"
              onChange={handleChange}
              value={profession}
              placeholder="Enter Your Profession"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="image" column>
              Image
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="text"
              name="image"
              id="image"
              onChange={handleChange}
              value={image}
              placeholder="Enter Profile picture Url"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              D.O.B
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              onChange={handleChange}
              value={dateOfBirth}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="gender" column>
              Gender
            </Form.Label>
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              name="gender"
              id="gender"
              onChange={handleChange}
              checked={gender === "male"}
              value="male"
              label="Male"
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              name="gender"
              id="gender"
              onChange={handleChange}
              checked={gender === "female"}
              value="female"
              label="Female"
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="bio" column>
              Bio
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control
              as="textarea"
              type="text"
              name="bio"
              id="bio"
              onChange={handleChange}
              value={bio}
              placeholder="Enter Your Bio"
            />
          </Col>
        </Form.Group>
        <Button variant="primary" size="md" type="submit">
          Add Contact
        </Button>
      </Form>
    </>
  );
}

export default AddContact;
