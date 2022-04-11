import React, { useState } from 'react';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import SearchPage from './components/HomeScreen/SearchPage';
// import SearchPageScreen from './screens/SearchPageScreen';
import ManualSearchPageScreen from './screens/ManualSearchPageScreen';
import SearchAreaScreen from './screens/SearchAreaScreen';
import NavBar from './components/Nav';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route exact path="/about" element={<AboutScreen />} />
        <Route exact path="/contact" element={<ContactScreen />} />
        <Route exact path="/HomeScreen" element={<HomeScreen />} />
        <Route exact path="/Signup" element={<SignupScreen />} />
        <Route exact path="/Login" element={<LoginScreen />} />
        <Route exact path="/SearchPage" element={<SearchPage />} />
        <Route exact path="/ManualSearchPage" element={<ManualSearchPageScreen />} />
        <Route exact path="/SearchAreaScreen" element={<SearchAreaScreen />} />
        <Route
          exact
          path="/ManualSearchPage"
          element={<ManualSearchPageScreen />}
        />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;
