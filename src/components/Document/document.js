import React, {Fragment} from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactDiffViewer from 'react-diff-viewer';

class Document extends React.Component {

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
              <h3>{d.dateOld + " vs. " + d.dateNew}</h3>
              <ReactDiffViewer oldValue={d.mdOld} newValue={d.mdNew} splitView={true} useDarkTheme={true}/>
            </Col>
          </Row>
        ))}
      </Fragment>
    )


  };

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

