import React, { useContext } from "react";

import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormTextInput from "../components/layouts/FormTextInput";
import { AuthContext } from "../context/Auth.Context";

const schema = yup.object({
  username: yup
    .string()
    .required("username is required")
    .min(5, "must must have at least 5 characters"),

  email: yup
    .string()
    .email("Email must be valid")
    .lowercase()
    .required("Email is required"),

  password: yup
    .string()
    .required("password is required")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
      "must contain 6 characters, One uppercase, One lowercase, One number, One special case character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "confirm password doesn't match"),
});
function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { registerUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    // registering user
    registerUser({
      username: data.username,
      email: data.email,
      password: data.password,
    });
    console.log(data);
  };
  return (
    <>
      <h2 className="text-center mb-3">Register</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          name="username"
          label="Username"
          placeholder="Enter Username"
          register={register}
          errors={errors}
          defaultValue="tutul"
        />
        <FormTextInput
          name="email"
          label="Email"
          placeholder="Enter user email"
          register={register}
          errors={errors}
          defaultValue="tutulkabir@gmail.com"
        />
        <FormTextInput
          name="password"
          label="Password"
          placeholder="Enter user password"
          register={register}
          errors={errors}
          type="password"
          defaultValue="Abcde123@"
        />
        <FormTextInput
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Re-Enter your password"
          register={register}
          errors={errors}
          type="password"
          defaultValue="Abcde123@"
        />

        <Button
          variant="primary"
          size="md"
          type="submit"
          disabled={isSubmitting ? "disabled" : ""}
          className="text-center d-inline-block w-auto"
        >
          Register
        </Button>
      </Form>
    </>
  );
}

export default Register;
