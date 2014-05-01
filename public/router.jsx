/** @jsx React.DOM */

var React = require('react');
var DocitList = require('./docit-list/docit-list.jsx');
var NewDocit = require('./new-docit/new-docit.jsx');
var Banner = require('./banner/banner.jsx');

var docits = [
  { accountId: "011455", type: 'Fire alarm' },
  { accountId: "098899", type: 'Fire alarm' },
  { accountId: "001222", type: 'CCTV' }
];

var Main = React.createClass({
  getInitialState: function() {
    return {
      docits: docits,
      title: "Docits"
    };
  },
  handleNew: function () {
    this.setState({ title: "New docit", docits: docits });
    setTimeout(function () {
      React.renderComponent(<NewDocit />, document.getElementById('main'));
    }, 0);
  },
  render: function() {
    var rightButton = (
      <button className='blue' onClick={ this.handleNew }>
        <i className="fa fa-plus"></i>
      </button>
    );

    return (
      <div>
        <Banner title={ this.state.title } rightButton={ rightButton }/>
        <div id='main'>
          <DocitList docits={ this.state.docits }/>
        </div>
      </div>
    );
  }
});

React.renderComponent(<Main />, document.body);