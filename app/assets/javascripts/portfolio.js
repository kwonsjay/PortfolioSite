window.Portfolio = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    this._installSidebar($("#sidebar"));
    this._installSocialbar($("#social"));
    new Portfolio.Routers.PortRouter($("#content"));
    Backbone.history.start();
  },
  _installSidebar: function($sidebar) {
    var sidebarView = new Portfolio.Views.SidebarView();
    $sidebar.html(sidebarView.render().$el);
  },
  _installSocialbar: function($socialbar) {
    var socialbarView = new Portfolio.Views.SocialbarView();
    $socialbar.html(socialbarView.render().$el);
  }
};

$(document).ready(function(){
  Portfolio.initialize();
});
