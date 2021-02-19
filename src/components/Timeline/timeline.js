import React from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Timeline extends React.Component {

  render() {

    const platforms = this.props.platforms

    const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop()

    const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop()

    const date = this.props.date

    return(
      <Row>
        <Col className="pageTitle">
          <h1>Timeline</h1>
          <p>I should show the timeline of <strong>{selectedPlatform.name}</strong> with the policy <strong>{selectedType.name}</strong> and the date <strong>{date}</strong> selected</p>
        </Col>
      </Row>
    )
  }
}
export default Timeline
