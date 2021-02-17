import React from 'react';

export const UIContext = React.createContext();

export class UIProvider extends React.Component {

  state = {
    view: "intro",
    platform: "",
    type: ""
  };

  updateView = (params) => {
    console.log('updateView triggered');
    console.log('v: ',params.v);
    console.log('p: ',params.p);
    console.log('t: ',params.t);
    // Only update state if passed by function
    // eslint-disable-next-line
    params.v ?
      this.setState({view: params.v})
      : this.state.view;
    // eslint-disable-next-line
    params.p ?
      this.setState({platform: params.p})
      : this.state.platform;
    // eslint-disable-next-line
    params.t ? this.setState({type: params.t}): this.state.type;
  }

  render() {
    return (
      <UIContext.Provider
        value={{ ...this.state, updateView: this.updateView}}
      >
        {this.props.children}
      </UIContext.Provider>
    );
  }
}
