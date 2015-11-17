var React = require('react');
var ReactDOM = require('react-dom');

/*
 * Store Picker
 * this will let us make <StorePicker/>
*/

var StorePicker = React.createClass({
  render : function() {
    return (
      <form className="store-selector">
        <h2>Please enter a store</h2>
        <input type="text" ref="storeId" required />
        <input type="submit" />
      </form>
    )
  }
});

ReactDOM.render(<StorePicker/>, document.querySelector('#main'));
