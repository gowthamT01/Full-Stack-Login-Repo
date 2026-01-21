import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginMERN from "./pages/LoginMERN";
import FormMERN from "./pages/RegisterMERN";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginMERN />} />
        <Route path="/register" element={<FormMERN />} />
        <Route path="/GetReg" element={<div>Dashboard</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
