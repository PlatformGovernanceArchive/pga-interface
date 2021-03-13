import React from 'react';
//import rd3 from 'react-d3-library';
import InteractiveTimeline from 'react-interactive-timeline';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Initiate D3
//import node from './d3-timeline';
//const RD3Component = rd3.Component;
//const BarChart = rd3.BarChart;
//import * as d3 from 'd3';

class Timeline extends React.Component {

//  constructor(props) {
//    super(props);
//    this.state = {d3: ''}
//  }
//
//  componentDidMount() {
//    this.setState({d3: node});
//  }
  render(){

//    useEffect(() => {
//      const svg = d3.select("#area");
//      svg
//        .append("circle")
//        .attr("cx", 50)
//        .attr("cy", 50)
//        .attr("r", 40)
//        .style("fill", "blue");
//      svg
//        .append("circle")
//        .attr("cx", 140)
//        .attr("cy", 70)
//        .attr("r", 40)
//        .style("fill", "red");
//      svg
//        .append("circle")
//        .attr("cx", 300)
//        .attr("cy", 100)
//        .attr("r", 40)
//        .style("fill", "green");
//    }, []);

    const platforms = this.props.platforms

    console.log('check: ', platforms.length)

    if (platforms.length>0){
      const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop()

      const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop()

      console.log(selectedType)

      const date = this.props.date

      return (
        <Row>
          <Col className="pageTitle">
            <h1>Timeline</h1>
            <p>I should show the timeline of <strong>{selectedPlatform.name}</strong> with the policy <strong>{selectedType.name}</strong> and the date <strong>{date}</strong> selected</p>
            {/*<RD3Component data={this.state.d3} className="D3ComponentWrapper" />
            <div ref="timeline"></div>
            <button onClick={changeStroke}>change stroke</button>
            <svg id="area" height={200} width={450}></svg>*/}
            <InteractiveTimeline
              startDate={'2018-09-01'}
              endDate={'2019-06-30'}
            >
              <InteractiveTimeline.Row>
                <InteractiveTimeline.Event date="2018-12-12" label="My event" />
              </InteractiveTimeline.Row>
              <InteractiveTimeline.Row fixedHeight>
                <InteractiveTimeline.StepLabels />
              </InteractiveTimeline.Row>
            </InteractiveTimeline>
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

const d3Object = () =>{

}
