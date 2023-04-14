import React, { useEffect, useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "First Name must have at least 3 characters"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(3, "Last Name must have at least 3 characters"),
  email: yup
    .string()
    .email("Email must be valid")
    .required("Email is required")
    .min(3, "Last Name must have at least 3 characters"),
  profession: yup
    .string()
    .required("Profession is required")
    .oneOf(["webDeveloper", "fashionDesigner", "digitalMarketer"]),
  image: yup
    .string()
    .required("Enter your profile picture Url")
    .url("Profile picturer url must be valid"),
  bio: yup
    .string()
    .required("Bio is required")
    .min(10, "Bio must have al least 10 characters")
    .max(300, "Bio must be at most 300 characters"),
});
function ContactForm({ addContact, contact, updateContact }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();
  const defaultValues = {
    firstName: contact?.firstName || "Tutul",
    lastName: contact?.lastName || "Kabir",
    email: contact?.email || "tutulkabir@gmail.com",
    profession: contact?.profession || "webDeveloper",
    image: contact?.image || "https://randomuser.me/api/portraits/men/85.jpg",
    bio:
      contact?.bio ||
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    gender: contact?.gender || "male",
    dateOfBirth: contact?.dateOfBirth || new Date(),
  };

  const { firstName, lastName, email, profession, image, bio, gender } =
    defaultValues;
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    setValue("dateOfBirth", startDate);
  }, [startDate]);
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        profession: "",
        image: "",
        bio: "",
      });
    }
  }, [isSubmitSuccessful]);
  const onSubmit = (data) => {
    const id = contact?.id;
    // show flash message

    if (id) {
      toast.success("Contact is updated successfully");
      updateContact(data, id);
    } else {
      toast.success("Contact is added successfully");
      // adding contacts
      addContact(data);
    }

    navigate("/contacts");
  };
  return (
    <>
      <h2 className="text-center">
        {contact?.id ? "Edit Contact" : "Add Contact"}
      </h2>
      ;
      <Form onSubmit={handleSubmit(onSubmit)}>
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
              defaultValue={firstName}
              {...register("firstName")}
              isInvalid={errors?.firstName}
              placeholder="Enter Your First Name"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.firstName?.message}
            </Form.Control.Feedback>
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
              defaultValue={lastName}
              {...register("lastName")}
              isInvalid={errors?.lastName}
              placeholder="Enter Your Last Name"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.lastName?.message}
            </Form.Control.Feedback>
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
              defaultValue={email}
              {...register("email")}
              isInvalid={errors?.email}
              placeholder="Enter Your Email"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.email?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="profession" column>
              Profession
            </Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Select
              name="profession"
              id="profession"
              defaultValue={profession}
              {...register("profession")}
              isInvalid={errors?.profession}
              aria-label="Select your profession"
            >
              <option value="" disabled>
                Select Option
              </option>
              <option value="webDeveloper">Web Developer</option>
              <option value="fashionDesigner">Fashion Designer</option>
              <option value="digitalMarketer">Digital Marketer</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">
              {errors?.profession?.message}
            </Form.Control.Feedback>
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
              defaultValue={image}
              {...register("image")}
              isInvalid={errors?.image}
              placeholder="Enter Profile picture Url"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.image?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={3}>
            <Form.Label htmlFor="dateOfBirth" column>
              D.O.B
            </Form.Label>
          </Col>
          <Col sm={9}>
            <DatePicker
              selected={startDate}
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              {...register("dateOfBirth")}
              maxDate={new Date()}
              showYearDropdown
              showMonthDropdown
              onChange={(date) => setStartDate(date)}
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
              defaultChecked={gender === "male"}
              {...register("gender")}
              value="male"
              label="Male"
            />
          </Col>
          <Col xs="auto">
            <Form.Check
              type="radio"
              name="gender"
              id="gender"
              defaultChecked={gender === "female"}
              {...register("gender")}
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
              defaultValue={bio}
              {...register("bio")}
              isInvalid={errors?.bio}
              placeholder="Enter Your Bio"
            />
            <Form.Control.Feedback type="invalid">
              {errors?.bio?.message}
            </Form.Control.Feedback>
          </Col>
        </Form.Group>
        <Button variant="primary" size="md" type="submit">
          {contact?.id ? "Update Contact" : "Add Contact"}
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
