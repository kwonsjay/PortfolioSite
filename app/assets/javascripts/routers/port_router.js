Portfolio.Routers.PortRouter = Backbone.Router.extend({
  initialize: function($content) {
    this.$content = $content;
  },
  
  routes: {
    "": "rootView"
  },
  
  rootView: function() {
    var newRootView = new Portfolio.Views.RootView();
    this._switchView(newRootView);
  },
  
  _switchView: function(newView) {
    if (this._prevView) {
      this._prevView.remove();
    }
    this._prevView = newView;
    this.$content.html(newView.render().$el);
  }
});