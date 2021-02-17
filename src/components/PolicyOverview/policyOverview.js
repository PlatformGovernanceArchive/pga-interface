import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';


// Importing bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PolicyOverview extends React.Component{

  render () {

    const platforms = this.props.platforms
    console.log('Platforms', platforms)

    const platformOutput = platforms.map((p,i) => {
      return(
        <Fragment>
          <p key={i}>{p.name}</p>
          <ul>
            {
              p.policies.map((pp, ii) => {
                return (
                  <Link to={`/view/${p.slug}/${pp.slug}`}>
                    <li key={ii}>{pp.name}</li>
                  </Link>
                )
              })
            }
          </ul>
        </Fragment>
      )
    })

    return(

      <Container className="h-100">
        <Row class="row align-items-center h-100">
          <Col className="mx-auto">
            <h1>Pick a platform</h1>
            <br/>
            {platformOutput}
          </Col>
        </Row>
      </Container>

    )
  }
}

export default PolicyOverview
