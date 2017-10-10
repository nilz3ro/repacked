import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render () {
    return (<h1>Testing JSX.</h1>);
  }
}

ReactDOM.render(document.body, <App/>);
