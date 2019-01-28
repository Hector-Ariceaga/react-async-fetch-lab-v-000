// create your App component here
import React from 'React';

export default class App extends React{

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(data => data.json())
    .then(return json)
  }
}