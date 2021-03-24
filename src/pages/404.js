import React, { Component } from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <header >
    <Row style={{height: 100+'vh', padding: 10+'vh'}}>
      <Col className="pageTitle">
        <h1 style={{marginTop: 30+'vh'}}>404</h1>
        <p className="slogan">Oops, that shouldn't have happened. The page you were looking for couldn't be found.</p>
      </Col>
    </Row>
  </header>
);
