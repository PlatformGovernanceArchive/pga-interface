import React from 'react';
import InteractiveTimeline, {calendar} from 'react-interactive-timeline';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Timeline extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedPlatform: '',
      selectedPolicy: '',
      selectedDate: ''
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
            <li key={key}>{policy.name}</li>
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

  getMinDate = () => {
    return  Math.min(...this.getDates())
  }

  getMaxDate = () => {
    return Math.max(...this.getDates());
  }

  changeDocument = () => {
    console.log('tadaa')
  }

  buildTimeline = () => {
    const policies=this.state.selectedPlatform.policies
    let min=this.transformDate(this.getMinDate())
    let max=this.transformDate(this.getMaxDate())
    console.log('policies: ',policies, min, max)
    return (
      <Col sm="8">
        <InteractiveTimeline
          className="policyTimeline"
          calendar={calendar('en', 'day')}
          startDate={min}
          endDate={max}
          theme={{
            backgroundColor: 'transparent',
            primaryColor: '#fff4',
            secondaryColor: '#fff8',
            tertiaryColor: '#fff4',
            eventColor: '#fff4',
          }}
          stepMinWidth="100px"
        >
          <InteractiveTimeline.Controls panDuration={{ month: 12 }} zoomFactor={4} />

        {policies.map((policy,key)=> (
          <InteractiveTimeline.Row className={policy.name} key={key}>
            {policy.dates.map((date,key)=> (
                <InteractiveTimeline.Event
                  date={this.transformDate(date)}
                  label={this.transformDate(date)}
                  onClick={() => this.changeDocument()}
                />
            ))}
          </InteractiveTimeline.Row>
        ))}

        <InteractiveTimeline.Row fixedHeight>
          <InteractiveTimeline.StepLabels />
        </InteractiveTimeline.Row>
      </InteractiveTimeline>
      </Col>
    )

  }



  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.platforms !== prevProps.platforms) {
      this.updateSelection();
    }
  }


  render(){

    if (this.state.selectedPlatform.policies){

      const policiesCode = this.buildPolicies();
      const timelineCode = this.buildTimeline();

      return (
        <Row>
            {policiesCode}
            {timelineCode}
        </Row>
      )
    }
    else{
      return(
        <Row>
          <Col className="pageTitle">
            <h1>Timeline</h1>
            <p>Loading data</p>

    <InteractiveTimeline
      calendar={calendar('en', 'day')}
      startDate={'1966-01-01'}
      endDate={'1974-01-01'}
      theme={{
        backgroundColor: 'transparent',
        primaryColor: '#fff4',
        secondaryColor: '#AA0',
        tertiaryColor: '#A50',
        eventColor: '#AAA',
      }}
      stepMinWidth="100px"
    >
      <InteractiveTimeline.Controls panDuration={{ month: 12 }} zoomFactor={4} />

      <InteractiveTimeline.Row style={{ marginTop: '30px' }}>
        <InteractiveTimeline.Event date="1967-01-27" label="Apollo 1" />
      </InteractiveTimeline.Row>

      <InteractiveTimeline.Row>
        <InteractiveTimeline.Event date="1967-01-27" />
        <InteractiveTimeline.Event date="1968-10-11" />
        <InteractiveTimeline.Event date="1968-12-21" />
        <InteractiveTimeline.Event date="1969-03-03" />
        <InteractiveTimeline.Event date="1969-05-18" />
        <InteractiveTimeline.Event date="1969-07-16" color="#81996A" />
        <InteractiveTimeline.Event date="1969-11-14" />
        <InteractiveTimeline.Event date="1970-04-11" />
        <InteractiveTimeline.Event date="1971-01-31" />
        <InteractiveTimeline.Event date="1971-07-26" />
        <InteractiveTimeline.Event date="1972-04-16" />
        <InteractiveTimeline.Event date="1972-12-07" />
      </InteractiveTimeline.Row>

      <InteractiveTimeline.Row fixedHeight>
        <InteractiveTimeline.StepLabels />
      </InteractiveTimeline.Row>
            </InteractiveTimeline>
          </Col>
        </Row>
      )
    }
  }
}
export default Timeline
