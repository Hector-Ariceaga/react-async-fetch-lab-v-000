// create your App component here
import React from 'react';

export default class App extends React{

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then(data => return data.json())
  }
}
