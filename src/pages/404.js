import React, { Component } from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default () => (
  <header className="App-header">
    <Row>
      <Col className="pageTitle">
        <h1>404</h1>
        <p className="slogan">Oops, that shouldn't have happened. The page you were looking for couldn't be found.</p>
        <br/>
        <br/>
        <br/>
      </Col>
    </Row>
  </header>
);
