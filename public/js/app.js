var React = require("react");
var ReactDOM = require("react-dom");

var Hello = React.createClass({
  render: function() {
    // return React.createElement("h3", null, "Hello React!");
    return <h3>Hello Webpack? yeah! </h3>
  }
});


// ReactDOM.render(React.createElement(Hello), document.getElementById('react'));
ReactDOM.render(<Hello />, document.getElementById('react'));
