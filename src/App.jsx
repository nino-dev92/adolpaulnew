import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Facilities from "./Pages/Facilities";
import Admissions from "./Pages/Admissions";
import Programs from "./Pages/Programs";
import { ScrollTop } from "./Components/ScrollTop";
import "./App.css";

const App = () => {
  return (
    <HashRouter>
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
