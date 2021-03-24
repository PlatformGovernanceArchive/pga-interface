import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

// Sliding off-canvas navigation incl styling
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// Importing bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// Importing Components
import Logotype from '../logotype'

class TopNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false
    };
  }

  render() {
    return(
      <Fragment>
        <Navbar collapseOnSelect staticTop expand="xl" variant="dark" className="main-nav">
          <Logotype className="ml-auto"/>
          <button class="functional" onClick={() => this.setState({ isPaneOpen: true })}>
              <span class="navbar-toggler-icon"></span>
          </button>
        </Navbar>


        <SlidingPane
          className="off-canvas menu"
          width="30vw"
          overlayClassName="off-canvas-overlay"
          isOpen={this.state.isPaneOpen}
          title="The Platform Governance Archive."
          subtitle="Explore our archive."
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <Nav className="flex-column">
            <Nav.Item><Link to="/explore">Explore all policies</Link></Nav.Item>

            <Nav.Item className="divider" />

            <Nav.Item><Link to="/about">About the archive</Link></Nav.Item>
              <Nav.Item><Link to="/research">Data and Research</Link></Nav.Item>
              <Nav.Item className="divider" />
              <Nav.Item><a href="https://www.hiig.de/en/project/platform-governance-and-copyright/">Visit project website</a></Nav.Item>
              <Nav.Item><a href="https://www.hiig.de/en/imprint/">Imprint</a></Nav.Item>
              <Nav.Item><a href="https://www.hiig.de/en/data-protection-policy/">Data Protection Policy</a></Nav.Item>
          </Nav>

        </SlidingPane>
      </Fragment>
    )
  }
}
export default TopNavigation
