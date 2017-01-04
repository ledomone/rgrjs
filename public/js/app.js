import React from "react";
import ReactDOM from "react-dom";


class Hello extends React.Component {
  render() {
    return <h3>Hello React with ES6</h3>;
  }
}

// ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));
