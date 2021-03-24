import React, { Component } from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import * as Strings from "../constants";
import ReactMarkdown from "react-markdown";
import {Link} from "react-router-dom";

import euLogo from "./../assets/img/EUlog_funding.png";
import osLogo_en from "./../assets/img/openscience_funding_en.png";
import osLogo_de from "./../assets/img/openscience_funding_de.png";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
class About extends React.Component{

    renderers = {
        link: ({href, children}) => {
            return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
        }
    };

    render() {
        return(
            <main className="pageContent">
                <Container>
                    <section id="about">
                        <Row>
                            <Col sm="4" className="colTitle">
                                <h2>{Strings.Intro_About_Headline}</h2>
                            </Col>
                            <Col className="colContent">
                                <ReactMarkdown
                                    source={Strings.About_Intro_One}
                                    renderers={this.renderers}
                                />
                            </Col>
                        </Row>
                    <p/>
                    <p/>
                        <Row>
                            <Col sm="4" className="colTitle">
                            </Col>
                            <Col className="colContent">
                                <ReactMarkdown
                                    source={Strings.About_Intro_Two}
                                    renderers={this.renderers}
                                />
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col sm="4" className="colTitle">
                                <h2>{Strings.About_Team_Headline}</h2>
                            </Col>
                            <Col className="colContent">
                                <ReactMarkdown
                                    source={Strings.About_TeamLead_Text}
                                    renderers={this.renderers}
                                />
                                <p></p>
                                <p></p>
                                <ReactMarkdown
                                    source={Strings.About_Team_Text}
                                    renderers={this.renderers}
                                />
                            </Col>
                        </Row>
                    </section>
                    <section>
                        <Row>
                            <Col  sm="4" className="colTitle">
                                <h2>{Strings.About_Funding_Headline}</h2>
                            </Col>
                            <Col className="colContent">
                                <ReactMarkdown
                                    source={Strings.About_Funding_Text}
                                    renderers={this.renderers}
                                />
                                <div><img width={180} height={90} src={euLogo} alt="Logo" /><img hspace={20} width={130} height={90} src={osLogo_en} alt="Logo" />
                                    <img width={130} height={90} src={osLogo_de} alt="Logo" /></div>
                            </Col>
                        </Row>
                    </section>
                </Container>
            </main>
        )
    }
}
export default About;
