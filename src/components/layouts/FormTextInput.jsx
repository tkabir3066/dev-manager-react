import React from "react";
import { Form, Col, Row } from "react-bootstrap";
function FormTextInput({
  label,
  name,
  placeholder,
  type = "text",
  defaultValue,
  register,
  errors,
  ...rest
}) {
  return (
    <Form.Group as={Row} className="mb-3">
      <Col sm={3}>
        <Form.Label htmlFor={name} column>
          {label}
        </Form.Label>
      </Col>
      <Col sm={9}>
        <Form.Control
          type={type}
          name={name}
          id={name}
          defaultValue={defaultValue}
          {...register(name)}
          isInvalid={errors?.name}
          placeholder={placeholder}
          {...rest}
        />
        <Form.Control.Feedback type="invalid">
          {errors[name]?.message}
        </Form.Control.Feedback>
      </Col>
    </Form.Group>
  );
}

export default FormTextInput;
