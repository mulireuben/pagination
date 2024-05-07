import React from "react";
class Class extends React.Component{
 constructor(props) {
  super(props);
  this.state = {
   count:0
  }
 }
 render() {
  return (
   <div>
    <p><b>you clicked{this.state.count }times</b></p>
    <button onClick={()=>this.setState({count:this.state.count+1})}> Click Me</button>
   </div>
  )
 }
}
export default Class;