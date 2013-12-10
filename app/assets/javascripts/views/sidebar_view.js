Portfolio.Views.SidebarView = Backbone.View.extend({
  template: JST["sidebar"],
  
  events: {
    "click .a": "aboutView",
    "click .p": "projectView",
    "click .c": "contactView"
  },
  
  aboutView: function() {
    $("#main").animate({
      scrollTop: 0
    }, 500);
  },
  
  projectView: function() {
    $("#main").animate({
      scrollTop: $(".project").offset().top - $(".about").offset().top
    },500);
  },
  
  contactView: function() {
    $("#main").animate({
      scrollTop: $(".contact").offset().top - $(".about").offset().top
    }, 500);
  },
  
  render: function() {
    var renderedContent = this.template();
    this.$el.html(renderedContent);
    return this;
  }
});