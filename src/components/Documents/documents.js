import React, {Fragment} from 'react';

// Importing bootstrap
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Importing Components
import Document from '../document'

class Documents extends React.Component {

  buildPolicyDocuments = () => {
    const platforms = this.props.platforms;
//    console.log('Platforms: ',platforms)

    const selectedPlatform = platforms.filter(p => p.slug === this.props.platform).pop();

    const selectedType = selectedPlatform.policies.filter(t => t.slug === this.props.type).pop();

    const selectedPlatformDiff = selectedType.diffchecks;

    return(

      <Fragment>
        {selectedPlatformDiff.map((d, ii) => (
          <Document documents={d} key={ii} date={this.props.date} />
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
export default Documents

