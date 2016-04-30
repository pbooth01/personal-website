// gangsta wrap
$.fn.wrapEach = function (what, replace) {
  var text = this.html();
  return this.html(text.replace(what, replace));
};