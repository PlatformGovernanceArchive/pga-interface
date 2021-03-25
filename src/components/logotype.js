import React from 'react';

const version = '1.0'

class Logotype extends React.Component{
  render(){
    let tagName = (this.props.tag === undefined) ?  'span' : this.props.tag;
    const Tag = `${tagName}`
    return(
      <Tag className="logotype">
        Platform Governance Archive
        <span className="version">{version}</span>
      </Tag>
    )
  }
}
export default Logotype;
