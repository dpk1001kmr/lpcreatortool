import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Label from "../components/ui/Label";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationFn: async () => {
      return await axios.post("http://localhost/backend/api/login.php", {
        email: email,
        password: password,
      });
    },
    onSuccess: (data) => {
      if (data.data.status === "success") {
        localStorage.setItem("lptoolUser", data.data.data.username);
        toast.success("Logged in succesfully");
        navigate("/lp-designs");
      } else {
        toast.error("wrong username or password");
      }
    },
    onError: (error) => {
      console.log(error);
      toast.error("Something went wrong");
    },
  });

  function onSubmitHandler(e) {
    e.preventDefault();
    mutate();
  }
  return (
    <LoginPageContainer>
      <Form onSubmit={onSubmitHandler}>
        <h1>Sign In</h1>
        <p className="subtitle">Enter your details to sign in</p>
        <div style={{ marginBottom: "0.75rem" }}>
          <Label>Email</Label>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ marginBottom: "0.75rem" }}>
          <Label>Password</Label>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Submit type="submit">Sign in</Submit>
        <p className="message">
          Already have an account?{" "}
          <Link className="link" to="/register">
            Sign up
          </Link>
        </p>
      </Form>
    </LoginPageContainer>
  );
}

const LoginPageContainer = styled.div`
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

export default LoginPage;
