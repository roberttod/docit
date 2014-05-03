var React = require('react');
var Banner = require('./banner/banner.jsx');

var docits = [
  { accountId: '011455', type: 'Fire alarm' },
  { accountId: '098899', type: 'Fire alarm' },
  { accountId: '001222', type: 'CCTV' }
];

module.exports = React.createClass({
  getInitialState: function() {
    return {
      docits: docits,
      title: 'Docits'
    };
  },
  render: function() {
    var View = this.props.view;
    var router = this.props.router;
    var backLink = this.props.backLink;
    var rightButton = this.props.rightButton;

    return (
      <div>
        <Banner title={ this.state.title } backLink={ backLink } rightButton={ rightButton }/>
        <div id='main'>
          { View }
        </div>
      </div>
    );
  }
});