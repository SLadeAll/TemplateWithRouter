// Router.js
import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
} from "@material-ui/core";
import "../styles/navBar.css";
import Home from "./Views/Home";
import Contact from "./Views/Contact";
import About from "./Views/About";
import ButtonAppBar from './navBar'
// Define some components to render in different routes
// Export the router component
const buttonDirection =[
  {route: './', nameButton: 'Home'},
  {route: '/about', nameButton: 'About'},
  {route: '/contact', nameButton: 'Contact'}
] 
  

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        {/* Render some buttons to navigate between routes */}
        <ButtonAppBar data={buttonDirection} />


        {/* Render the component that matches the current route */}
        {/* Note: without switch, the order of routes matters */}
        {/* The first route that matches the path will be rendered */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
