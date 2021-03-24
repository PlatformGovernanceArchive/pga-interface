import React from 'react';
import {Link} from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

// Importing bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';


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
           <section id="footer">
            <Row>
              <Col sm="4" className="colTitle">
                <Nav className="flex-column">
                  <Nav.Item><Link to="/about">About the archive</Link></Nav.Item>
                  <Nav.Item><Link to="/research">Data and Research</Link></Nav.Item>
                  <Nav.Item><a href="https://www.hiig.de/en/imprint/">Imprint</a></Nav.Item>
                  <Nav.Item><a href="https://www.hiig.de/en/data-protection-policy/">Data Protection Policy</a></Nav.Item>
                </Nav>
              </Col>

              <Col className="colContent">
              </Col>
            </Row>
          </section>
        </Container>
      </main>
    )
  }
}
export default Intro;
