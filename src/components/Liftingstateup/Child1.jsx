import React, { Component } from 'react';

class Child1 extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        {this.props.name}
      </div>
    )
  }
}
export default Child1;
