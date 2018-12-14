import React, { Component } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import axios from 'axios'

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      inventory: []
    }

    this.getInventory = this.getInventory.bind(this)
  }
  
  componentDidMount(){
    this.getInventory() 
  }

  getInventory(){
    axios.get('/api/inventory')
    .then((response) => {
      console.log(response)
      this.setState({
        inventory: response.data
      })
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard 
        inventory={this.state.inventory}
        getInventory={this.getInventory}
        />
        <Form getInventory={this.getInventory}/>
      </div>
    );
  }
}

export default App;
