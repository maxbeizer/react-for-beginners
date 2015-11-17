var React = require('react');
var ReactDOM = require('react-dom');

/*
 * Store Picker
 * this will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
  render : function() {
    return (
      <p>hello world</p>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
