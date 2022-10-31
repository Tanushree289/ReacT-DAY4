import React, { Component } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends Component {
    state = {
        name:'Rahul',
        value:10
    };
  render() {
    return (
      <div>
        <Child1 name={this.state.name}/>
        <Child2 number={this.state.value}/>
      </div>
    )
  }
}
export default Parent;