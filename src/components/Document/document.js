import React from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ReactDiffViewer from 'react-diff-viewer';

class Document extends React.Component {

    buildPolicies = () => {
        const platforms = this.props.platforms;
        if (platforms.length>0){
            const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop();
            const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop();
            const date = this.props.date;
            const selectedPlatformDiff = selectedType.diffchecks;
            return(
                <div>
                <Row>
                    <Col className="pageTitle">
                        <h1>Document viewer</h1>
                        <p>I should display a version of <strong>{selectedType.name}</strong> by <strong>{selectedPlatform.name}</strong> from this date <strong>{date}</strong></p>
                    </Col>
                </Row>
                    {selectedPlatformDiff.map((d, ii) => (
                        <Row key={ii}>
                            <Col>
                                <h3>{d.dateOld + " vs. " + d.dateNew}</h3>
                                <ReactDiffViewer oldValue={d.mdOld} newValue={d.mdNew} splitView={true} useDarkTheme={true}/>
                            </Col>
                        </Row>
                    ))}
                </div>
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

    };

  render() {
      return (
          <div>{this.buildPolicies()}</div>
      )

  }
}
export default Document

