Portfolio.Views.SocialbarView = Backbone.View.extend({
  template: JST["socialbar"],
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});