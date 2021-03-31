import React from 'react';
import {Link} from 'react-router-dom';


// Importing bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importing Components
import {PolicyOverview_Tagline, PolicyOverview_MobileDisabled} from '../../constants';
import platforms from '../../data/platforms_overview.json';
class PolicyOverview extends React.Component{

  render () {

    //const platforms = this.props.platforms
//    console.log('Platforms', platforms)

    const platformOutput = platforms.map((p,i) => {
      return(
        <div className="platform">
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
        </div>
      )
    })

    return(

      <Container>
        <Row>
          <Col>
            <h1>{PolicyOverview_Tagline}</h1>
            <p className="mobileNotification">{PolicyOverview_MobileDisabled}</p>
            <div className="platforms">
              {platformOutput}
            </div>
          </Col>
        </Row>
      </Container>

    )
  }
}

export default PolicyOverview
