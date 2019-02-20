import React, { Component } from 'react';

import Population from './Population';
import fPopulation from './fPopulation';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    }
    this.quantities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.handleWordSubmit = this.handleWordSubmit.bind(this);
    this.handleFunctionSubmit = this.handleFunctionSubmit.bind(this);
  }

  handleWordSubmit(event) {
    event.preventDefault();
    let myPop = new Population(event.target.word.value, 20);
    this.state.name = myPop.generation();
  }

  handleFunctionSubmit(event) {
    event.preventDefault();
    let myPopf = new fPopulation(event.target.func.value, event.target.quantity.value, 20);
    myPopf.generation();
  }

  render() {
    return (
      <div>
        <h2>Welcome!</h2>
        <form onSubmit={this.handleWordSubmit} >
          <label>Input your Name.</label>
          <input type="text" name="word" />
          <button type="submit" >Submit</button>
        </form>
        <hr />
        <form onSubmit={this.handleFunctionSubmit} >
          <label>Input your desired function.</label>
          <input type="text" name="func" />
          <select name="quantity" >
            {this.quantities.map(quantity => <option key={quantity}>{quantity}</option>)}
          </select>
          <button type="submit" >Submit</button>
        </form>
        <h3>Hello {this.state.name}</h3>
      </div>
    );
  }
}

export default App;
