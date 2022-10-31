import React, { Component } from 'react'

class Child2 extends Component {
  render() {
    return (
      <div style={{textAlign:"center"}}>
        <h1>{this.props.number}</h1>
      </div>
    )
  }
}
export default Child2;
