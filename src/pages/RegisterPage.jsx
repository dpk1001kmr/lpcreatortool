import React from "react";
import styled from "styled-components";
import Label from "../components/ui/Label";
import { Link } from "react-router-dom";

function RegisterPage() {
  function onSubmitHandler(e) {
    e.preventDefault();
    alert("login submit");
  }
  return (
    <RegisterPageContainer>
      <Form onSubmit={onSubmitHandler}>
        <h1>Sign Up</h1>
        <p className="subtitle">Enter your details to sign up</p>
        <div style={{ marginBottom: "0.75rem" }}>
          <Label>Name</Label>
          <Input type="text" placeholder="Name" />
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <Label>Email</Label>
          <Input type="text" placeholder="Email" />
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <Label>Password</Label>
          <Input type="password" placeholder="Password" />
        </div>
        <Submit type="submit">Sign up</Submit>
        <p className="message">
          Don't have an account?{" "}
          <Link className="link" to="/login">
            Sign in
          </Link>
        </p>
      </Form>
    </RegisterPageContainer>
  );
}

const RegisterPageContainer = styled.div`
  /* border: 2px solid #000000; */
  height: 100vh;
  color: var(--slate-900);

  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  .subtitle {
    color: var(--slate-500);
    margin-bottom: 1rem;
  }

  .message {
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;
  }

  .link {
    color: var(--slate-900);
    text-decoration: underline;
  }
`;

const Form = styled.form`
  width: 20rem;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  background-color: var(--slate-100);
  padding: 2rem 1rem;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
`;

const Submit = styled.button`
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid var(--slate-900);
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem;
  background-color: var(--slate-900);
  color: var(--slate-50);
`;

export default RegisterPage;
