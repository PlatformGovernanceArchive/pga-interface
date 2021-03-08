import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link, animateScroll as scroll } from "react-scroll";

// Importing bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Button from 'react-bootstrap/Button';

// Importing Components
import Logotype from './logotype'



/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Jumbotron fluid>
    <Container>
        <blockquote>
          “The way platforms order and govern user activities has tremendous effects on how communication, politics, mobility and other key sectors are organised in the digital society.”
        </blockquote>
        <Logotype />
        <p className="subtitle">
          <ReactTypingEffect
            staticText="An archive of all policy documents by"
            speed="100"
            eraseSpeed="50"
            eraseDelay="2000"
            typingDelay="500"
            text={[
              "Facebook",
              "YouTube",
              "Twitter",
              "Instagram",
              "SoundCloud",
              "Vimeo",
              "Pornhub"
            ]}
            displayTextRenderer={(text, i) => {
              return (
                text.split('').map((char, i) => {
                  const key = `${i}`;
                  return (
                    <span key={key}>{char}</span>
                  );
                })
              );
            }}
          />
        </p>

        <Link
         className="more"
         smooth={true}
         offset={-20}
         to="about">
          <button>Learn more</button>
        </Link>
    </Container>
  </Jumbotron>
);
