Portfolio.Views.RootView = Backbone.View.extend({
  template: JST["root"],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});