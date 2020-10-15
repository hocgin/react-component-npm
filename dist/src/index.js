import React from "react";
import ReactDOM from "react-dom";
import Example from '../../src/index'

class App extends React.Component {
  render() {
    return (<Example>Hello World</Example>);
  }
}

ReactDOM.render(<App/>, document.getElementById("app"));
