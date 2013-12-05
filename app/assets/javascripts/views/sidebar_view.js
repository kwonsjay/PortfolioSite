Portfolio.Views.SidebarView = Backbone.View.extend({
  template: JST["sidebar"],
  
  events: {
    "click .design": "designView"
  },
  
  designView: function() {
    console.log("not implemented yet");
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});