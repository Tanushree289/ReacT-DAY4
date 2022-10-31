import React from 'react'
import Lifecycle from './Lifecycle'

export default class Lifecyle1 extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         mount:true
      }

      this.mountCounter = () => this.setState({mount:true})
      this.unmountCounter = () => this.setState({mount:false})
    }
  render() {
    return (
      <div style={{textAlign:"center" , padding:"20px"}}>
        <button onClick={this.mountCounter} disabled={this.state.mount}>Mount Counter</button>
        <button onClick={this.unmountCounter} disabled={!this.state.mount}>Unmount Counter</button>
        {this.state.mount ? <Lifecycle/> : null}
      </div>
    )
  }
}
