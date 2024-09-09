import { Component } from 'react' 

 class PersonaClass extends Component {
  render() {
    return (
        <span>Hello! my names is {this.props.name} {this.props.surname} and I am {this.props.age} year old. </span>
    )
  }
}

  
export default PersonaClass