import React, { useState } from "react";

import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NewestWork from "./components/NewestWork";

import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Photography from "./components/Photography";
import Paintings from "./components/Paintings";
import TravelStories from "./components/TravelStories";
import Events from "./components/Events";
import Contact from "./components/Contact";
import Purchase from "./components/Purchase";
import SignUps from "./components/SignUps";
import Login from "./components/Login";
import Account from "./components/Account";

function App() {
  return (
    <div>
      {/* <Button 
        variant='primary'>click me!</Button> */}
      <Navbar />
      {/* <DisplayName name="John Doe" age="45" />
        <DisplayName name="Mary " age="44" /> */}

      {/* Step 1: Create component (tip: use rfce) */}
      {/* Step 2: Make a route (tip: copy/paste one of the ones below) */}
      {/* Route checklist: */}
      {/* Change the path (this is what shows up in the url) */}
      {/* Change the element (this is the component that will render on the path when you go to that path) */}
      {/* MAKE SURE you import the component at the top */}
      {/* Add the route to the navbar */}
      {/* Check in the browser! */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/paintings" element={<Paintings />} />
        <Route path="/travel-stories" element={<TravelStories />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/purchase" element={<Purchase />} />
        <Route path="/signup" element={<SignUps />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
        <Route path="/newestwork" element={<NewestWork />} />
      </Routes>
    </div>
  );
}

export default App;
