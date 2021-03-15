import React from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlatform: '',
      selectedPolicy: '',
      selectedDate: '',
      value: 0,
      previous: 0
    }
  }

  updateSelection = () => {
    const selectedP = this.props.platforms.filter(p => p.slug === this.props.platform).pop()

    const selectedT = selectedP.policies.filter(t => t.slug === this.props.type).pop()

    const selectedD = this.props.date

    this.setState({
      selectedPlatform: selectedP,
      selectedPolicy: selectedT,
      selectedDate: this.props.date
    });

//    return ({
//        p: selectedP,
//        t: selectedT,
//        s: selectedD
//      })
  }

  transformDate = (d) => {
    let datelong=d.toString()
    let year = datelong.substr(0,4)
    let month = datelong.substr(4,2)
    let day = datelong.substr(6,2)
    let date = [year, month, day]
    return date.join('-')
  }

  buildPolicies = () => {
    const policies=this.state.selectedPlatform.policies
    return (
      <Col>
        <ul className="policies">
          {policies.map((policy,key)=> (
            <Row key={key}>
              <Col>
                {policy.name}
              </Col>
              <Col sm="8">
                {
                  console.log('dates:', policy.dates, policy.dates.map(d => (this.transformDate(d))) )
                }
                <HorizontalTimeline
                    index={this.state.value}
                    indexClick={(index) => {
                      this.setState({ value: index, previous: this.state.value });
                    }}
                    values={policy.dates.map(d => (this.transformDate(d)))}
                  />
              </Col>
            </Row>
          ))}
        </ul>
      </Col>
    )

  }

  getDates = () => {
    const policies=this.state.selectedPlatform.policies
    let dateArrays=policies.map((p)=>p.dates)
    let dates=[].concat.apply([],dateArrays)
//    console.log('all dates: ', dateArrays, dates)
    return dates
  }

//  getMinDate = () => {
//    return  Math.min(...this.getDates())
//  }
//
//  getMaxDate = () => {
//    return Math.max(...this.getDates());
//  }


  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.platforms !== prevProps.platforms) {
      this.updateSelection();
    }
  }


  render(){

    if (this.state.selectedPlatform.policies){

      const policiesCode = this.buildPolicies();

      return (
        <Row>
          <Col>
            {policiesCode}
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
