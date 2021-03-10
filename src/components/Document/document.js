import React from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Document extends React.Component {

  render() {

    const platforms = this.props.platforms

    if (platforms.length>0){

      const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop()

      const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop()

      const date = this.props.date

      return(
        <Row>
          <Col className="pageTitle">
            <h1>Document viewer</h1>
            <p>I should display a version of <strong>{selectedType.name}</strong> by <strong>{selectedPlatform.name}</strong> from this date <strong>{date}</strong></p>
          </Col>
        </Row>
      )
    }else{
      return(
        <Row>
          <Col className="pageTitle">
            <h1>Document viewer</h1>
            <p>Loading data</p>
          </Col>
        </Row>
      )
    }
  }
}
export default Document

