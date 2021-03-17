import React from 'react';
import Moment from 'moment';
import ReactDiffViewer from 'react-diff-viewer';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Document extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
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

  componentDidUpdate = (prevProps) => {
    if (this.props.documents.dateNew===this.props.date) {
      this.executeScroll();
    }
  }

  // run this method to execute scrolling.
  executeScroll = () => {
    this.myRef.current.scrollIntoView({
//      Not working in Chrome
//      behavior: 'smooth',
      block: 'start',
      inline: 'center',
    })
  }

  render() {
    const d=this.props.documents
    return (
      <Row key={this.props.key} ref={this.myRef}>
        <Col>
          <h3>
            <span className="dateOld">{Moment(this.transformDate(d.dateOld)).format("DD MMMM YYYY")}</span>
            <span className="dateOld"> {Moment(this.transformDate(d.dateNew)).format("DD MMMM YYYY")}</span>
          </h3>
          <ReactDiffViewer oldValue={d.mdOld} newValue={d.mdNew} splitView={true} useDarkTheme={true}/>
        </Col>
      </Row>
    )
  }

}
export default Document
