import React, {Fragment} from 'react';
import Moment from 'moment';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactDiffViewer from 'react-diff-viewer';

class Document extends React.Component {

  // Parses date from YYYYMMDDMMSS to YYYY-MM-DD
  transformDate = (d) => {
    let datelong=d.toString()
    let year = datelong.substr(0,4)
    let month = datelong.substr(4,2)
    let day = datelong.substr(6,2)
    let date = [year, month, day]
    return date.join('-')
  }

  buildPolicyDocuments = () => {
    const platforms = this.props.platforms;

    const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop();

    const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop();

    const date = this.props.date;

    const selectedPlatformDiff = selectedType.diffchecks;

    return(
      <Fragment>
        {selectedPlatformDiff.map((d, ii) => (
          <Row key={ii}>
            <Col>
              <h3>
                <span className="dateOld">{Moment(this.transformDate(d.dateOld)).format("DD MMMM YYYY")}</span>
                <span className="dateOld"> {Moment(this.transformDate(d.dateNew)).format("DD MMMM YYYY")}</span>
              </h3>
              <ReactDiffViewer oldValue={d.mdOld} newValue={d.mdNew} splitView={true} useDarkTheme={true}/>
            </Col>
          </Row>
        ))}
      </Fragment>
    )
  };


  componentDidUpdate = (prevProps) => {
    // Typical usage (don't forget to compare props):
    if (this.props.date !== prevProps.date) {
      console.log('date changed')
    }
  }


  render() {
    const platforms = this.props.platforms;
    if (platforms.length>0){
      return (
          <Row className="loaded documents">
            <Col>
                {this.buildPolicyDocuments()}
            </Col>
        </Row>
      )
    }else{
      return(
        <Row className="loading documents">
            <Col>
                <h1>Document viewer</h1>
                <p>Loading data</p>
            </Col>
        </Row>
      )
    }
  }
}
export default Document

