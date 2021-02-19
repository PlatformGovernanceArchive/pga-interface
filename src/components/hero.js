import React from 'react';

// Importing bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
//import Container from 'react-bootstrap/Container';
//import Row from 'react-bootstrap/Row';
//import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Jumbotron>
    <blockquote>
      “The way platforms order and govern user activities has tremendous effects on how communication, politics, mobility and other key sectors are organised in the digital society.”
    </blockquote>
    <h1>Platform Governance Archive</h1>
    <p>An archive of all policy documents by Face</p>

    <p>
      <Button variant="secondary">Learn more</Button>
    </p>
  </Jumbotron>
);
