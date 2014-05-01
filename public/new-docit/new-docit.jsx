/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function() {
    return (
      <div className='new-docit'>
        <form>
          <button className='account-picker'>Account</button>
          <button className='type-picker'>Type</button>
        </form>
        <div className='actions'>
          <button className='save blue'>Save</button>
          <button className='complete green'>Mark as complete</button>
          <button className='delete red'>Delete</button>
        </div>
      </div>
    );
  }
});