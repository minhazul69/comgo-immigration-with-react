import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [validated, setValidated] = useState(false);
  const [siteError, setSiteError] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    if (!email && !password) {
      setSiteError("Please Fill In The Input Field");
      return;
    }
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    setValidated(true);
  };
  return (
    <div className="container">
      <div className="shadow w-50 mx-auto p-5 my-5">
        <h3 className="text-primary text-center fw-bold mb-3">Please Login</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="shadow-none"
              type="email"
              placeholder="Enter email"
              name="email"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              className="shadow-none"
              type="password"
              placeholder="Password"
              name="password"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Password.
            </Form.Control.Feedback>
          </Form.Group>
          <p className="text-danger fw-bold">{siteError}</p>
          <p className="text-center">
            Already have an account ?{" "}
            <Link className="text-decoration-none text-warning" to="/signUp">
              Sign Up
            </Link>
          </p>
          <Button
            className="shadow-none w-100 "
            variant="primary"
            type="submit"
          >
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
