import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Importing bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importing Components
import * as Strings from '../constants';

class Intro extends React.Component{

  renderers = {
    link: ({href, children}) => {
      return <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    }
  }

  render() {
    return(
      <main className="intro">
        <Container>
          <section id="about">
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.Intro_About_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.Intro_About_Text}
                  renderers={this.renderers}
                />
              </Col>
            </Row>
          </section>
          <section id="paper">
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.Intro_DataPaper_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.Intro_DataPaper_Text}
                  renderers={this.renderers}
                />
                <button>{Strings.Intro_DataPaper_Button}</button>
              </Col>
            </Row>
          </section>
          <section id="contribute">
            <Row>
              <Col sm="4" className="colTitle">
                <h2>{Strings.Intro_Contribute_Headline}</h2>
              </Col>
              <Col className="colContent">
                <ReactMarkdown
                  source={Strings.Intro_Contribute_Text}
                  renderers={this.renderers}
                />
                <Link to={`/explore`}>
                  <button className="explore">{Strings.Intro_Explore}</button>
                </Link>
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    )
  }
}
export default Intro;
