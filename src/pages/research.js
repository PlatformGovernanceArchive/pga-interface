import React, { Component } from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import * as Strings from "../constants";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
class Research extends React.Component{

    renderers = {
        link: ({href, children}) => {
            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        }
    };

    render() {
        return(
            <main className="intro">
                <Container>
                    <section id="about">
                        <Row>
                            <Col sm="4" className="colTitle">
                                <h2>{Strings.DataAndResearch_Intro_Headline}</h2>
                            </Col>
                            <Col className="colContent">
                                <ReactMarkdown
                                    source={Strings.About_Intro_One}
                                    renderers={this.renderers}
                                />
                                <Link
                                    className="more"
                                    smooth={true}
                                    offset={-20}
                                    to="research">
                                    <button >{Strings.About_Intro_Button}</button>
                                </Link>
                            </Col>
                        </Row>
                    <p/>
                    <p/>
                        <Row>
                            <Col sm="4" className="colTitle">
                            </Col>
                            <Col>
                                <ReactMarkdown
                                    source={Strings.About_Intro_Two}
                                    renderers={this.renderers}
                                />
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col  sm="4" className="colTitle">
                                <h2>{Strings.DataAndResearch_Intro_Headline}</h2>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </main>
        )
    }
}
export default Research;
