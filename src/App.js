import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    counter: 0,
    error: ''
  }

  onclick = (para) => {
    console.log("called");
    if(para === 'incri' && this.state.counter >= 0) {


      this.setState({counter: this.state.counter + 1,
      error: ''})
    } else {
      if(this.state.counter === 0) {
        this.setState({
          error: 'cannot go minus'
        })
        return;
      }
      this.setState({counter: this.state.counter - 1})
    }
    
  }

  render() {
    return (
      <div data-test='component-app'  className="">
        <h1 data-test="counter-display">{this.state.counter}</h1>
        <p data-test='error'>{this.state.error}</p>
        <button onClick={() => this.onclick('incri')} data-test="increment-button-in">Click me to incri</button>
        <button onClick={this.onclick} data-test="increment-button-dec">Click me decri</button>
      </div>
    );
  }
 
}

export default App;
