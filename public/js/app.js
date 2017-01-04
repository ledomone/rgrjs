let React = require("react");
let ReactDOM = require("react-dom");

let Hello = React.createClass({
  render() {
    return <h3>Hello ES6</h3>
  }
});


// ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));
