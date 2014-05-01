/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className='banner blue'>
        <button className='blue' onClick={ this.props.onBack }><i className="fa fa-arrow-left"></i></button>
        <span>{ this.props.title }</span>
        { this.props.rightButton }
      </div>
    );
  }
});