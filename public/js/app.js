let React = require("react");
let ReactDOM = require("react-dom");


class Hello extends React.Component {
  render() {
    return <h3>Hello ES6</h3>;
  }
}

// ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));
