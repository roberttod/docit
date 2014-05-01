/** @jsx React.DOM */

var React = require('react');
var DocitRow = require('./docit-row.jsx');
module.exports = React.createClass({
  render: function() {
    var rows = this.props.docits.map(function (docit) {
      return (
        <DocitRow docit={docit} />
      );
    });
    return (
      <div className='docit-list'>
        <div className='docits'>
          {rows}
        </div>
      </div>
    );
  }
});