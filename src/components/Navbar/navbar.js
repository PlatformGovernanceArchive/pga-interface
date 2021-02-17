import React, { Component } from 'react';

// Importing bootstrap
import Navbar from 'react-bootstrap/Navbar';

export default () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand className="ml-auto">PGA</Navbar.Brand>
    <Navbar.Brand href="#">Burger Menu</Navbar.Brand>
  </Navbar>
);

//export default () => (
//  <Navbar fixed="top" bg="dark" variant="dark">
//    <Navbar.Brand className="ml-auto">PGA</Navbar.Brand>
//    <Navbar.Brand href="#">Burger Menu</Navbar.Brand>
//  </Navbar>
//);
