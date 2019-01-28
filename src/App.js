// create your App component here
import React, {Component} from 'react';

export default class App extends Component{

  state = {
    spacePeeps: []
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(res => return res.json())
    .then(data =>
    this.setState({
      spacePeeps: data.people
    }))
  }

  render(){
    return(<div>
      {this.state.spacePeeps.map(person=>person.name)}
      </div>)
  }
}
