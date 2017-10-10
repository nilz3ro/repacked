import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render () {
    return (
      <div>
        <h1>Testing JSX.</h1>
        <Ticker />
      </div>
    );
  }
}

class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      iterations: 0
    };
  }

  render () {
    console.log('test')
    this.tick();
    return (<span>This has been rendered {this.state.iterations} times.</span>)
  }

  tick () {
    setTimeout(() => {
      this.setState({iterations: this.state.iterations + 1});
    }, 1000)
  }
}


ReactDOM.render(<App/>, document.getElementById('application_root'));
