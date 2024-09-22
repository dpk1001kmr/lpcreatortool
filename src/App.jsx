import React from "react";
import LPCreatorPage from "./pages/LPCreatorPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./pages/AuthLayout";
import DashboardLayout from "./pages/DashboardLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import LPDesignsPage from "./pages/LPDesignsPage";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LPCreatorPage />
    </QueryClientProvider>
    // <QueryClientProvider client={queryClient}>
    //   <ToastContainer />
    //   <BrowserRouter>
    //     <Routes>
    //       <Route element={<AuthLayout />}>
    //         <Route path="/login" element={<LoginPage />} />
    //         <Route path="/register" element={<RegisterPage />} />
    //       </Route>
    //       <Route element={<DashboardLayout />}>
    //         <Route path="/lp-designs" element={<LPDesignsPage />} />
    //         <Route path="/create-lp/:id" element={<LPCreatorPage />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </QueryClientProvider>
  );
}

export default App;
