import React from 'react'

 class Lifecycle extends React.Component {
    constructor(props) {
        console.log("constructor");
      super(props)
    
      this.state = {
         counter:0
      }  
      
      this.increment = () =>this.setState({counter:this.state.counter+1})
      this.decrement = () =>this.setState({counter:this.state.counter-1})
    }

    componentDidMount(){
        console.log("component Did Mount");
        console.log("-------------------");
    }

     componentDidUpdate(){
        console.log("Component Did Update");
        console.log("-------------------");

     }

     componentWillUnmount(){
        console.log("Componet Will Unmount");
        console.log("-------------------");

     }

  render() {
    console.log("render")
    return (
      <div style={{textAlign:"center"}}>
        <p>Counter:{this.state.counter}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}
export default Lifecycle;
