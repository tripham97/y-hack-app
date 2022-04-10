import React from "react";
import NavBar from "./components/Nav";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import SignupScreen from "./screens/SignupScreen";

import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/about" element={<AboutScreen />} />
        <Route exact path="/contact" element={<ContactScreen />} />
        <Route exact path="/" element={<HomeScreen />} />
        <Route exact path="/Signup" element={<SignupScreen />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
