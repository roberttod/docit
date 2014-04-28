var insertCss = require('insert-css');
insertCss(require('./main.styl'));


var $ = require('jquery');
var React = require('react');
var DocitList = require('./docit-list/docit-list.jsx');
var docits = [
  { accountId: "011455", type: 'Fire alarm' },
  { accountId: "098899", type: 'Fire alarm' },
  { accountId: "001222", type: 'CCTV' }
];

var Main = React.createClass({
  getInitialState: function() {
    return {
      docits: docits
    };
  },
  render: function() {
    return (
      <DocitList docits={this.state.docits}/>
    );
  }
});

window.main = React.renderComponent(
  <Main />,
  $('.main').get(0)
);