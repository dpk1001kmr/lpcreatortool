import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function DashboardLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const username = localStorage.getItem("lptoolUser");
    if (!username) navigate("/login");
  }, []);
  return <Outlet />;
}

export default DashboardLayout;
