// create your App component here
import React, {Component} from 'react';

export default class App extends Component{

  state = {
    spacePeeps:[]
  }
  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(data => return data.json())
    .then(data =>
    this.setState({
      spacePeeps: data.people
    }))
  }
  
  render(){
    return {}
  }
}
