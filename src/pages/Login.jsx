import React, { useContext } from "react";

import { Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FormTextInput from "../components/layouts/FormTextInput";
import { AuthContext } from "../context/Auth.Context";

const schema = yup.object({
  email: yup
    .string()
    .email("Email must be valid")
    .lowercase()
    .required("Email is required"),

  password: yup.string().required("password is required"),
});
function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { login } = useContext(AuthContext);
  const onSubmit = (data) => {
    // registering user
    login({
      identifier: data.email,
      password: data.password,
    });
    console.log(data);
  };
  return (
    <>
      <h2 className="text-center mb-3">Login</h2>
      <Form onSubmit={handleSubmit(onSubmit)}>
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

        <Button
          variant="primary"
          size="md"
          type="submit"
          disabled={isSubmitting ? "disabled" : ""}
          className="text-center d-inline-block w-auto"
        >
          Login
        </Button>
      </Form>
    </>
  );
}

export default Login;
