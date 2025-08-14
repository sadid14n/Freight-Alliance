import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import Color from "./pages/Color";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/color" element={<Color />} />
    </Routes>
  );
};

export default App;
