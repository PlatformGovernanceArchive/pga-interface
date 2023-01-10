import React from "react";

// Importing bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import * as Strings from "../constants";
import ReactMarkdown from "react-markdown";

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
class Research extends React.Component {
  renderers = {
    link: ({ href, children }) => {
      return (
        <a href={href} rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  };

  render() {
    return (
      <main className="pageContent">
        <Container>
          <section id="research">
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.DataAndResearch_DataAccess_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.DataAndResearch_DataAccess_Text}
                  renderers={this.renderers}
                />
              </Col>
            </Row>
          </section>

          <section>
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.DataAndResearch_DataAccess_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.DataAndResearch_DataAccess_Text}
                  renderers={this.renderers}
                />
                <a
                  className="button"
                  style={{ display: "inline-block", alignSelf: "flex-start" }}
                  href={Strings.DataAndResearch_DataAccess_Button_Url}
                >
                  {Strings.DataAndResearch_DataAccess_Button_Text}
                </a>
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.DataAndResearch_DataPaper_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.DataAndResearch_DataPaper_Text}
                  renderers={this.renderers}
                />
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.DataAndResearch_Research_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.DataAndResearch_Research_Text}
                  renderers={this.renderers}
                />
              </Col>
            </Row>
          </section>
          <section>
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.DataAndResearch_Outlook_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.DataAndResearch_Outlook_Text}
                  renderers={this.renderers}
                />
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    );
  }
}
export default Research;
