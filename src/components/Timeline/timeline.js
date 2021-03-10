import React from 'react';
import rd3 from 'react-d3-library';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Initiate D3
//import node from './d3file';
//const RD3Component = rd3.Component;
//const BarChart = rd3.BarChart;

class Timeline extends React.Component {

//  constructor(props) {
//    super(props);
//    this.state = {d3: ''}
//  }
//
//  componentDidMount() {
//    this.setState({d3: node});
//  }

  render() {

    const platforms = this.props.platforms

    console.log('check: ', platforms.length)

    if (platforms.length>0){
      const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop()

      const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop()

      const date = this.props.date

      return (
        <Row>
          <Col className="pageTitle">
            <h1>Timeline</h1>
            <p>I should show the timeline of <strong>{selectedPlatform.name}</strong> with the policy <strong>{selectedType.name}</strong> and the date <strong>{date}</strong> selected</p>
          </Col>
        </Row>
      )
    }
    else{
      return(
        <Row>
          <Col className="pageTitle">
            <h1>Timeline</h1>
            <p>Loading data</p>
          </Col>
        </Row>
      )
    }
  }
}
export default Timeline
