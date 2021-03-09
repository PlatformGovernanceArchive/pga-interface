import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { Link } from "react-scroll";

// Importing bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container';
//import Button from 'react-bootstrap/Button';

// Importing Components
import Logotype from './logotype'
import * as Strings from '../constants';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default () => (
  <Jumbotron fluid>
    <Container>
        <blockquote>
          {Strings.Hero_Quote}
        </blockquote>
        <Logotype tag="h1" />
        <p className="subtitle">
          <ReactTypingEffect
            staticText={Strings.Hero_Typing}
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
          <button>{Strings.Hero_LearnMore}</button>
        </Link>
    </Container>
  </Jumbotron>
);
