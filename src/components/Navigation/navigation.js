import React, {Fragment}  from 'react';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

// Importing bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/Nav';
//import NavDropdown from 'react-bootstrap/Nav';
//import Form from 'react-bootstrap/Form'
//import FormGroup from 'react-bootstrap/FormGroup'
//import FormControl from 'react-bootstrap/FormControl'


// Importing Components
import Logotype from '../logotype'

/*
class Navigation extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false
    };
  }

  render (){
    return(
      <Fragment>
        <Navbar collapseOnSelect staticTop expand="xl" variant="dark" className="main-nav">
          <Logotype className="ml-auto" />
          <Navbar.Toggle aria-controls="offcanvas-collapse" />
          <button onClick={() => this.setState({ isPaneOpen: true })}>
              Click me to open right pane!
            </button>
        </Navbar>

        <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Hey, it is optional pane title.  I can be React component too."
          subtitle="Optional subtitle."
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <div>And I am pane content. BTW, what rocks?</div>
          <br />
          <img src="img.png" />

          <Navbar.Collapse id="offcanvas-collapse">
            <Nav>
              <NavItem active>Exhibit A</NavItem>
              <NavDropdown title="Github" id="basic-nav-dropdown">
                <Nav.Item href="#">Code</Nav.Item>
                <Nav.Item href="#">Issues</Nav.Item>
                <Nav.Item>Something else here</Nav.Item>
                <Nav.Item divider />
                <Nav.Item>Separated link</Nav.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text pullRight>
              I am responsive!
            </Navbar.Text>
            <Form pullRight>
              <FormGroup>
                <FormControl type="text" placeholder="Search" />
              </FormGroup>
            </Form>
          </Navbar.Collapse>
        </SlidingPane>
      </Fragment>
    )
  }
}
*/

class TopNavigation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isPaneOpen: false
    };
  }

  render() {

    const something = 'what'
    return(
      <Fragment>
        <Navbar collapseOnSelect staticTop expand="xl" variant="dark" className="main-nav">
          <Logotype className="ml-auto"/>
          <button class="functional" onClick={() => this.setState({ isPaneOpen: true })}>
              <span class="navbar-toggler-icon"></span>
          </button>
        </Navbar>


        <SlidingPane
          className="some-custom-class"
          width="30vw"
          overlayClassName="some-custom-overlay-class"
          isOpen={this.state.isPaneOpen}
          title="Hey, it is optional pane title.  I can be React component too."
          subtitle="Optional subtitle."
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            this.setState({ isPaneOpen: false });
          }}
        >
          <div>And I am pane content. BTW, what rocks?</div>
          <Nav>
            <NavItem active>Exhibit A</NavItem>
            <Nav.Item href="#">Code</Nav.Item>
            <Nav.Item href="#">Issues</Nav.Item>
            <Nav.Item>Something else here</Nav.Item>
            <Nav.Item divider />
            <Nav.Item>Separated link</Nav.Item>
          </Nav>
        </SlidingPane>
      </Fragment>
    )
  }
}
export default TopNavigation
