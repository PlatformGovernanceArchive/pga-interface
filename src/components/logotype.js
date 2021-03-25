import React from 'react';
import {Link} from 'react-router-dom';

const version = '1.0'

class Logotype extends React.Component{
  render(){
    let tagName = (this.props.tag === undefined) ?  'span' : this.props.tag;
    const Tag = `${tagName}`
    return(
      <Link to="/">
        <Tag className="logotype">
          Platform Governance Archive
          <span className="version">{version}</span>
        </Tag>
      </Link>
    )
  }
}
export default Logotype;
