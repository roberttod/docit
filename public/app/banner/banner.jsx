var React = require('react');
var $     = require('jquery');

module.exports = React.createClass({
  render: function () {
    var rightButton = this.props.rightButton || {};
    var backLink = this.props.backLink;
    var button = function (link, className) {
      return (
        <a className={ 'blue' + (link ? '' : ' hidden') } href={ link }>
          <i className={ className }></i>
        </a>
      );
    };

    return (
      <div className='banner blue'>
        { button(backLink, 'fa fa-arrow-left') }
        <span>{ this.props.title }</span>
        { button(rightButton.link, rightButton.className) }
      </div>
    );
  }
});