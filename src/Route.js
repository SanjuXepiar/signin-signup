import React from "react";
import { Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Signin from "./Signin";
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
