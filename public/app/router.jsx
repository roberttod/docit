var $     = require('jquery');
var React = require('react');

var Router          = require('cherrytree');
var Route           = require('cherrytree/route');
var HistoryLocation = require('cherrytree/location/history_location');

var App       = require('./app.jsx');
var NewDocit  = require('./new-docit/new-docit.jsx');
var DocitList = require('./docit-list/docit-list.jsx');


var router = new Router({
  location: new HistoryLocation({
    pushState: true
  })
});

router.map(function () {
  this.route('new');
  // this.resource('docit', {path: '/:docitId'}, function () {
  //   this.route('show', {path: '/'});
  //   this.route('edit')
  // });
});


router.addRoute('application', Route.extend({
  activate: function () {
    console.log("app");
    var rightButton = {
      link: router.generate("new"),
      className: "fa fa-plus"
    };
    this.app = React.renderComponent(
      <App view={ DocitList } rightButton={ rightButton } router={ router }/>,
      document.body);
  }
}));


router.addRoute('new', Route.extend({
  activate: function () {
    this.get("app").setProps({ view: NewDocit })
  }
}));


$(router.startRouting.bind(router));