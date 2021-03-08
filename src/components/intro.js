import React from 'react';
import {Link} from 'react-router-dom';

// Importing bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <main className="intro">
    <Container>
      <section id="about">
        <Row>
          <Col sm="4" className="colTitle">
            <h2>About this project</h2>
          </Col>
          <Col className="colContent">
            <p>The Platform Governance Archive (PGA) is a structured and open database with content policies of key platforms over their full life-time. While public debates over the handling of misinformation and hate speech by major platforms have long reached mainstream audiences and policy-makers, there is little accessible material to rigidly study short- and long-term developments of companies’ internal policies. The <a href="https://www.hiig-de/en" target="_blank" rel="noreferrer">Alexander von Humboldt Institute for Internet and Society</a> has built up and curated a vast collection of thousands of these documents, ranging from Terms of Service (ToS)  to community guidelines  On this basis, the PGA enables researchers and journalists alike to address key questions of platform governance: How do misinformation or hate speech policies compare across platforms and over time? What are the factors that drive platforms to change policies? The PGA is the first online resource of its kind. Its goal is to enhance public knowledge of platform governance by enabling research collaborations and journalistic reporting, and by already providing exemplary analyses of the material.</p>
          </Col>
        </Row>
      </section>
      <section id="paper">
        <Row>
          <Col sm="4" className="colTitle">
            <h2>Data Paper 1.0</h2>
          </Col>
          <Col className="colContent">
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            <button>Read the paper</button>
          </Col>
        </Row>
      </section>
      <section id="contribute">
        <Row>
          <Col sm="4" className="colTitle">
            <h2>How to contribute and cite</h2>
          </Col>
          <Col className="colContent">
            <p>If you have found the Platform Governance Archive useful in your research, or if you want to reference it in your work, please consider to cite the paper we presented above. You can read the article in Green Open Access at the following link:</p>
            <p><a href="#">Katzenbach, C., Magalhães, J. C., Koppe, A., & Sühr, T. (2021) Lorem ipsum dolor sit amet, consetetur sadipscing elitr. Sed diam nonumy eirmod tempor. https://doi.org/10.1177/1464884917734055
  .</a></p>
            <Link to={`/explore`}>
              <button className="explore">Explore the archive</button>
            </Link>
          </Col>
        </Row>
      </section>
    </Container>
  </main>
);
