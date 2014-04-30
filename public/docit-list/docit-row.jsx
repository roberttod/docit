/** @jsx React.DOM */

var React = require('react');
module.exports = React.createClass({
  handleUpload: function () {
    console.log('upload');
  },
  handleEdit: function () {
    console.log('edit');
  },
  render: function() {
    return (
      <div className='docit-row'>
        <button className='label' onClick={this.handleUpload}><b>{this.props.docit.accountId}</b> {this.props.docit.type}</button>
        <button className='edit' onClick={this.handleEdit}>Edit</button>
      </div>
    );
  }
});