import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

function LogoutButton() {
  const navigate = useNavigate();
  function handleLogout(e) {
    localStorage.removeItem("lptoolUser");
    toast.success("Logged out successfully");
    navigate("/login");
  }
  return <Button onClick={handleLogout}>Logout</Button>;
}

const Button = styled.button`
  outline: none;
  border: 1px solid var(--slate-300);
  border-radius: 0.25rem;
  background-color: #ffffff;
  padding: 0.5rem 0.75rem;
  font-size: 0.85rem;
`;

export default LogoutButton;
