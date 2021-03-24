import React, {Fragment} from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import Moment from 'moment';

// Import Bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlatform: '',
      selectedPolicy: '',
      selectedDate: '',
      value_0: 0,
      value_1: 0,
      value_2: 0,
      value_3: 0,
      previous: 0
    }
  }

  // Get data from props and update selection states
  updateSelection = () => {
    const selectedP = this.props.platforms.filter(p => p.slug === this.props.platform).pop()

    const selectedT = selectedP.policies.filter(t => t.slug === this.props.type).pop()

    const policyIndex = selectedP.policies.findIndex(policy => policy.slug === this.props.type)
    const dateIndex = selectedT.dates.findIndex(date => date === this.props.date)

//    console.log('position: ',policyIndex, dateIndex, this.props.date)

    this.setState({
      selectedPlatform: selectedP,
      selectedPolicy: selectedT,
      selectedDate: this.props.date,
      [`value_${policyIndex}`]: dateIndex
    });
  }

  // Parses date from YYYYMMDDMMSS to YYYY-MM-DD
  transformDate = (d) => {
    let datelong=d.toString()
    let year = datelong.substr(0,4)
    let month = datelong.substr(4,2)
    let day = datelong.substr(6,2)
    let date = [year, month, day]
    return date.join('-')
  }

  // Build Code for Timeline
  buildPolicyTimelines = () => {
    const policies=this.state.selectedPlatform.policies
    return (
      <Fragment>
        <ul className="policies">
          {policies.map((policy,key)=> (
            <Row key={key}
              className={`policy ${policy.slug===this.state.selectedPolicy.slug ? "active" : "inactive"} ${policy.slug}`}
            >
              <Col>
                <h3>{policy.name}</h3>
              </Col>
              <Col className="horizontalTimeline">
                {
//                  console.log(
//                    'dates:',
//                    policy.dates,
//                    policy.dates.map(d => (this.transformDate(d))),
//                    this.state[`value_${key}`]
//                  )
                }
                <HorizontalTimeline
                  index={this.state[`value_${key}`]}
                  indexClick={(index) => {
                    this.setState({ [`value_${key}`]: index, previous: this.state[`value_${key}`] });
                    this.actionOnDateClick(policy.slug, index);
                  }}
                  values={policy.dates.map(d => (d))}
                  styles={{
                    background: '#08131e',
                    foreground: '#206D86',
                    outline: '#dfdfdf'
                  }}
                  isOpenBeginning="true"
                  getLabel={(date) => (Moment(date).format("DD MMM YYYY"))}
                />
              </Col>
            </Row>
          ))}
        </ul>
      </Fragment>
    )
  }

  translateIndexToDate = (pp, ii) => {
    return this.state.selectedPlatform.policies.filter(p => p.slug === pp).pop().dates[ii]
  }

  // OnClick action when date in timeline selected
  actionOnDateClick = (s, i) => {
//    console.log('action:', s, i, this.props.history)
    const path = `/view/${this.state.selectedPlatform.slug}/${s}/${this.translateIndexToDate(s,i)}`

    console.log('path:', path)
    this.props.history.push(path)
  }

//// Build dates Array of all policies
//  getDates = () => {
//    const policies=this.state.selectedPlatform.policies
//    let dateArrays=policies.map((p)=>p.dates)
//    let dates=[].concat.apply([],dateArrays)
////    console.log('all dates: ', dateArrays, dates)
//    return dates
//  }
//  getMinDate = () => {
//    return  Math.min(...this.getDates())
//  }
//  getMaxDate = () => {
//    return Math.max(...this.getDates());
//  }


  // Trigger updateSelection() upon props change
  componentDidUpdate = (prevProps) => {
    // Typical usage (don't forget to compare props):
    if (this.props.platforms !== prevProps.platforms) {
      this.updateSelection();
    }

    if (this.props.date !== prevProps.date) {
      this.updateSelection();
    }
  }

  // Trigger updateSelection() upon load
  componentDidMount = () => {
    if (this.props.platforms.length > 0) {
      this.updateSelection();
    }
  }


  render(){
//    console.log('Policies:', this.state.selectedPlatform.policies)

    // Render timeline when API returned data
    if (this.state.selectedPlatform.policies){

      const policiesCode = this.buildPolicyTimelines();

      return (
        <Row className="loaded timelines">
          <Col>
            {policiesCode}
          </Col>
        </Row>
      )
    }
    // Render placeholder when no data from API
    else{
      return(
        <Row className="loading timelines">
          <Col>
            <h1>Timeline</h1>
            <p>Loading data</p>
          </Col>
        </Row>
      )
    }
  }
}
export default Timeline
