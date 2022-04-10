import React from "react";
import NavBar from "./components/Nav";
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import ContactScreen from "./screens/ContactScreen";
import SignupScreen from "./screens/SignupScreen";
import ManualSearchPageScreen from "./screens/ManualSearchPageScreen";
import SearchPageScreen from "./screens/SearchPageScreen";
import LoginScreen from "./screens/LoginScreen";

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
        <Route exact path="/Login" element={<LoginScreen />} />
        <Route exact path="/SearchPage" element={<SearchPageScreen />} />
        <Route
          exact
          path="/ManualSearchPage"
          element={<ManualSearchPageScreen />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
